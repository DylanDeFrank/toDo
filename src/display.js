export class Display {
    constructor() {
        this.listWrapper = document.querySelector(".listWrapper")
    }
    addDisplay(task) {
        const div = document.createElement("div")
        this.listWrapper.appendChild(div)
              
        }
}