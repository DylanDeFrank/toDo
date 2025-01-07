export class List {
    constructor() {
        this.list = []
    }
    addTask(task) {
        this.list.push(task)
    }
    showList() {
        return (this.list)
    }
}