import { addTodo } from "./todo.js";
import { updateTodoListUI } from "./todoUI.js";
import { prewrittenTasks } from "./prewrittenTasks.js";
import {
  loadTodoListFromSessionStorage,
  saveTodoListToSessionStorage,
} from "./todo.js";
import {
  loadPrewrittenTasksFromSessionStorage,
  savePrewrittenTasksToSessionStorage,
} from "./todo.js";

savePrewrittenTasksToSessionStorage(prewrittenTasks);
loadPrewrittenTasksFromSessionStorage();
loadTodoListFromSessionStorage();
updateTodoListUI();

document
  .getElementById("add-todo-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const taskInput = document.getElementById("task");
    const deadlineInput = document.getElementById("deadline");
    const taskDescription = taskInput.value.trim();
    const deadlineDateTime = deadlineInput.value.trim();

    addTodo(taskDescription, deadlineDateTime);
    saveTodoListToSessionStorage();
    updateTodoListUI();

    taskInput.value = "";
    deadlineInput.value = "";
  });

window.addEventListener("load", updateTodoListUI);
