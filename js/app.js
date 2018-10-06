const app = new Vue({
  el: '#app',
  data: {
    title: 'Todo App',
    newTodo: '',
    todos: []
  },
  methods: {
    addTodo() {
      this.todos.push({
        title: this.newTodo,
        done: false
      });
      this.newTodo = '';
    },
    removeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    },
    allDone() {
      this.todos.forEach(todo => {
        todo.done = true;
      });
    }
  }
});

// get the date
const date = new Date();
switch(date.getDay()) {
  case 0:
    document.getElementById("date").innerHTML = "Sunday, ";
    break;
  case 1:
    document.getElementById("date").innerHTML = "Monday, ";
    break;
  case 2:
    document.getElementById("date").innerHTML = "Tuesday, ";
    break;
  case 3:
    document.getElementById("date").innerHTML = "Wednesday, ";
    break;
  case 4:
    document.getElementById("date").innerHTML = "Thursday, ";
    break;
  case 5:
    document.getElementById("date").innerHTML = "Friday, ";
    break;
  case 6:
    document.getElementById("date").innerHTML = "Saturday, ";
    break;
}
switch(date.getMonth()) {
  case 0:
    document.getElementById("date").insertAdjacentHTML("beforeend", "January");
    break;
  case 1:
    document.getElementById("date").insertAdjacentHTML("beforeend", "February");
    break;
  case 2:
    document.getElementById("date").insertAdjacentHTML("beforeend", "March");
    break;
  case 3:
    document.getElementById("date").insertAdjacentHTML("beforeend", "April");
    break;
  case 4:
    document.getElementById("date").insertAdjacentHTML("beforeend", "May");
    break;
  case 5:
    document.getElementById("date").insertAdjacentHTML("beforeend", "June");
    break;
  case 6:
    document.getElementById("date").insertAdjacentHTML("beforeend", "July");
    break;
  case 7:
    document.getElementById("date").insertAdjacentHTML("beforeend", "August");
    break;
  case 8:
    document.getElementById("date").insertAdjacentHTML("beforeend", "September");
    break;
  case 9:
    document.getElementById("date").insertAdjacentHTML("beforeend", "October");
    break;
  case 10:
    document.getElementById("date").insertAdjacentHTML("beforeend", "November");
    break;
  case 11:
    document.getElementById("date").insertAdjacentHTML("beforeend", "December");
    break;
}
document.getElementById("date").insertAdjacentHTML("beforeend", " ");
document.getElementById("date").insertAdjacentHTML("beforeend", date.getDate());
if (date.getDate() == 1 || date.getDate() == 21 || date.getDate() == 31) {
  document.getElementById("date").insertAdjacentHTML("beforeend", "st");
}
else if (date.getDate() == 2 || date.getDate() == 22) {
  document.getElementById("date").insertAdjacentHTML("beforeend", "nd");
}
else if (date.getDate() == 3 || date.getDate() == 23) {
  document.getElementById("date").insertAdjacentHTML("beforeend", "rd");
}
else {
  document.getElementById("date").insertAdjacentHTML("beforeend", "th");
}
