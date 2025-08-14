import flatpickr from "flatpickr"
import 'flatpickr/dist/flatpickr.min.css'
import { Task } from "./task.js"
import { List } from "./list.js"  
import { Display } from "./display.js" 
import "./styles.css"    
import { differenceInDays, formatDistanceToNow } from "date-fns"


const taskButton = document.querySelector(".addTask")
const name = document.querySelector(".taskName")
const details = document.querySelector(".details")
const date = document.querySelector("#dateTime")
const listWrapper = document.querySelector(".listWrapper")

flatpickr(date, {})
if (localStorage.getItem("tasks")) {
  let tasks = (JSON.parse(localStorage.getItem("tasks")))
  let savedList = new Display()
  savedList.addSaved(tasks)
} 
let taskList = new List()
let displayList = new Display()




taskButton.addEventListener ('click', () => {
  const result = formatDistanceToNow (
  new Date(date.value)
)

   let task = new Task(name.value, details.value, result)
   
   console.log(task)
   taskList.addTask(task)
   displayList.addDisplay(task)
   if (localStorage.getItem("tasks")) {
    const existingData = (JSON.parse(localStorage.getItem("tasks")))
    existingData.tasks.push(task)
    localStorage.setItem("tasks", JSON.stringify(existingData))
   }
   else {
   localStorage.setItem("tasks", JSON.stringify(taskList))
   }

   

 })





