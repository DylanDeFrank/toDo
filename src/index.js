import { Task } from "./task.js"
import { List } from "./list.js"   
import "./styles.css" 
import { createTask } from "./taskcontainer.js"    

const button = document.querySelector('.addTask')
const titleText = document.querySelector(".title")

button.addEventListener ('click', function (e) {
    createTask()
    titleText.addEventListener ('keydown', function (e) {
        let key = key.e
        if (key.e == 'Shift') {
        let task = new Task(titleText.textContent)
        return task
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
