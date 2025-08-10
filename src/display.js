export class Display {
    constructor() {
        this.listWrapper = document.querySelector(".listWrapper")
    }
    addDisplay(task) {
        const div = document.createElement("div")
        this.listWrapper.appendChild(div)
        for (let [key,value] of Object.entries(task)) {
            const divInfo = document.createElement("div")
            divInfo.textContent = value
            div.appendChild(divInfo)


        }
            
              
        }
}