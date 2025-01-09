export function createTask() {
const taskContainer = document.createElement("div")
taskContainer.classList.add("taskContainer")
const header = document.createElement("div")
header.classList.add("header")
const title = document.createElement("div")
title.classList.add("title")

title.contentEditable = true
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