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
    const header = document.createElement("div")
    header.classList.add("header")
    const title = document.createElement("div")
    const dueDate = document.createElement("div")
    const footer = document.createElement("div")
    footer.classList.add("footer")
    const taskNotes = document.createElement("div")
    const priority = document.createElement("div")
    const body = document.querySelector("body")

    body.appendChild(taskContainer)
    taskContainer.appendChild(header)
    header.appendChild(title)
    header.appendChild(dueDate)
    taskContainer.appendChild(footer)
    footer.appendChild(taskNotes)
    footer.appendChild(priority)

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
