import { Task } from "./task.js"
import { List } from "./list.js"   
import "./styles.css" 
import { createTask } from "./taskcontainer.js"    

const button = document.querySelector('.addTask')

button.addEventListener ('click', function (e) {
    createTask()
    const title = document.querySelector('.title')
    title.addEventListener ('keydown', function (e) {
        if (e.key == 'Enter') {
        let task = new Task(title.textContent)
        console.log(task.name)
        }
    
    })
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



