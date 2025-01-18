import { Task } from "./task.js"
import { List } from "./list.js"   
import "./styles.css"    

const taskButton = document.querySelector(".addTask")
const name = document.querySelector(".taskName")
const details = document.querySelector(".details")
const date = document.querySelector(".dateTime")


taskButton.addEventListener ('click', () => {
   let task = new Task(name.value, details.value, date.value )
    console.log(task)
            

 })


    let walk = new Task('walk')
    console.log(walk.name)

    let shop = new Task('shop')
    console.log(shop.name)
    
    
    let list = new List('list')
    list.addTask(walk)
    list.addTask(shop)
    console.log(list.showList())

    let list2 = new List('list2')
    list2.addTask(shop)
    console.log(list2.showList())



