/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(todoArray) {
    this.todoArray = todoArray;
    // this.taskName=taskName;
    // this.timeline=timeline;
  }
  add = (taskName, timeline) => {
    this.todoArray.push({ [taskName]: timeline });
  }
  remove = (index) => {
    this.todoArray.splice(index, 1);
  }
  update = (index, updatedTodo) => {
    this.todoArray[index] = { [updatedTodo.newTaskname]: updatedTodo.newTimeline };
  }
  get = (index) => {
    if (!(this.todoArray[index])) {
      return 'index not present';
    }
    return this.todoArray[index];
  }
  getAll = () => {
    return this.todoArray;
  }
  clear = () => {
    this.todoArray = [];
  }
}

module.exports = Todo;

let d = new Todo([]);
d.add('dinner', '10/12/2023');
d.add('js', '15/12/2023');
d.add('async', '15/12/2023');
console.log(d.get(0));
console.log(d.get(1));
console.log(d.get(2));
d.remove(1);
d.update(0, { newTaskname: 'python', newTimeline: '2024' });
console.log(d.getAll());
d.clear();
console.log(d.getAll());
