export class Display {
    constructor() {
        this.listWrapper = document.querySelector(".listWrapper")
    }
    addDisplay(task) {
        const div = document.createElement("div")
        this.listWrapper.appendChild(div)
        for (let value of Object.values(task)) {
            const divInfo = document.createElement("div")
            divInfo.textContent = value
            div.appendChild(divInfo)
        }
    }
    addSaved(tasks) {
        for (let savedTasks of Object.values(tasks)) {
            for(let list of savedTasks) {
                const div = document.createElement("div")
                this.listWrapper.appendChild(div)
                for(let details of Object.values(list)) {
                    const divInfo = document.createElement("div")
                    divInfo.textContent = details
                    div.appendChild(divInfo)
                }}}
    }
}
