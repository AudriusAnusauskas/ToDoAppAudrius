import { todoList, deleteTodo } from "./todo.js";
import { sortByTimestamp } from "./utils.js";

export function updateTodoListUI() {
  const todoListElement = document.getElementById("todo-list");
  todoListElement.innerHTML = "";

  const completedTodos = [];
  const incompletedTodos = [];

  todoList.forEach((todo, index) => {
    const newTodo = document.createElement("li");

    const descriptionElement = document.createElement("span");
    descriptionElement.textContent = todo.description;

    const timeLeftElement = document.createElement("span");
    timeLeftElement.textContent = ` ${
      !todo.daysLeft && !todo.hoursLeft && !todo.minutesLeft
        ? "You have all the time in the world to complete that!"
        : `in ${todo.daysLeft} days, ${todo.hoursLeft} hours, ${todo.minutesLeft} minutes`
    }`;

    const doneCheckbox = document.createElement("input");
    doneCheckbox.type = "checkbox";
    doneCheckbox.checked = todo.isDone;
    doneCheckbox.addEventListener("change", function () {
      todo.isDone = this.checked;
      updateTodoListUI();
    });

    if (todo.isDone) {
      descriptionElement.style.textDecoration = "line-through";
      timeLeftElement.textContent = "";
      completedTodos.unshift(newTodo);
      completedTodos.sort(sortByTimestamp);
    } else {
      incompletedTodos.push(newTodo);
    }

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.addEventListener("click", function () {
      const confirmed = confirm("Are you sure you want to delete this item?");
      if (confirmed) {
        deleteTodo(index);
        updateTodoListUI();
      }
    });

    newTodo.appendChild(descriptionElement);
    newTodo.appendChild(timeLeftElement);
    newTodo.appendChild(doneCheckbox);
    newTodo.appendChild(deleteButton);
  });

  const allTodos = incompletedTodos.concat(completedTodos);
  allTodos.forEach((todo) => todoListElement.appendChild(todo));
}
