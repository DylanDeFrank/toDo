import { Task } from "./task.js"
import { List } from "./list.js"   
import "./styles.css"     

const button = document.querySelector('.addTask')

button.addEventListener ('click', function (e) {
    createTask()

    
})
function createTask () {
    const taskContainer = document.createElement("div")
    taskContainer.classList.add("taskContainer")
    const header = document.createElement("div.header")
    const title = document.createElement("h1.title")
    const dueDate = document.createElement("div.dueDate")
    const footer = document.createElement("div.footer")
    const taskNotes = document.createElement("p.taskNotes")
    const priority = document.createElement("div.priority")
    const body = document.querySelector("body")

    body.appendChild(taskContainer)
}

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
