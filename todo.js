import { calculateTimeLeft, compareByTimeLeft } from "./utils.js";

export const todoList = [];

export function addTodo(taskDescription, deadlineDateTime) {
  if (deadlineDateTime && calculateTimeLeft(deadlineDateTime).daysLeft < 0) {
    alert("Task is planned in the past. Please choose a future deadline.");
    return;
  }

  const timeLeft = deadlineDateTime ? calculateTimeLeft(deadlineDateTime) : {};

  const newTodoItem = {
    description: taskDescription,
    deadline: deadlineDateTime,
    ...timeLeft,
    isDone: false,
  };

  todoList.unshift(newTodoItem);

  todoList.sort(compareByTimeLeft);
}

export function deleteTodo(index) {
  todoList.splice(index, 1);
  saveTodoListToSessionStorage();
}

export function saveTodoListToSessionStorage() {
  sessionStorage.setItem("todoList", JSON.stringify(todoList));
}

export function loadTodoListFromSessionStorage() {
  const storedTodoList = sessionStorage.getItem("todoList");
  if (storedTodoList) {
    todoList.length = 0;
    const parsedTodoList = JSON.parse(storedTodoList);
    todoList.push(...parsedTodoList);
  }
}

export function addPrewrittenTasks(prewrittenTasks) {
  prewrittenTasks.forEach((task) => {
    addTodo(task.description, task.deadline);
  });
}

export function savePrewrittenTasksToSessionStorage(prewrittenTasks) {
  sessionStorage.setItem("prewrittenTasks", JSON.stringify(prewrittenTasks));
}

export function loadPrewrittenTasksFromSessionStorage() {
  const storedPrewrittenTasks = sessionStorage.getItem("prewrittenTasks");
  if (storedPrewrittenTasks) {
    const parsedPrewrittenTasks = JSON.parse(storedPrewrittenTasks);
    addPrewrittenTasks(parsedPrewrittenTasks);
  }
}
