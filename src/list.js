export class List {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
    console.log(this.tasks)
    return this.tasks;
  }
}
