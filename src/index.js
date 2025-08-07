
import { Task } from "./task.js"
import { List } from "./list.js"  
import { Display } from "./display.js" 
import "./styles.css"    

const taskButton = document.querySelector(".addTask")
const name = document.querySelector(".taskName")
const details = document.querySelector(".details")
const date = document.querySelector(".dateTime")
let taskList = new List()
let displayList = new Display()





taskButton.addEventListener ('click', () => {
   let task = new Task(name.value, details.value, date.value)
   console.log(task)
   taskList.addTask(task)
   displayList.addDisplay(taskList)
   

 })





