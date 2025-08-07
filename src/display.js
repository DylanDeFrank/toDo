export class Display {
    constructor(list) {
        this.list = list
    }
    addDisplay(taskList) {
        for(let [key,value] of Object.entries(taskList)) {
            for(let details of value) {
                for (let [x,y] of Object.entries(details)){
                    console.log(x,y)
                }
            }
        }
    }
}