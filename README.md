# ToDoAppAudrius
This is a simple `To-do app`, developed only using basic technologies - `HTML`, `CSS` and `JavaScript`.  <br>
User can enter a task description (required field, up to 160 characters) and a deadline. 
Deadline is optional. It is a date and time until which the task has to be completed. <br>
By pressing the `'Add'` button, new task is being added to the list. <br>
The list shows the task description, time left for the task to be completed (days, hours, minutes), 
checkbox for the task to be marked as 'completed' and `'X'` button to delete the task.
Tasks are being sorted by priority - according to the time left to complete the task. Shortest time left is on the top of the list. <br>
If the deadline is not chosen, the task is put right after the task with longest deadline. <br>
By default, tasks are put to the list by the time they are added. <br>
Tasks with deadlines in the past are not allowed. <br>
When the task is completed, the user checks the checkbox, the task description is being crossed out and the task is being moved to the bottom of the list. <br>
More recently completed tasks are upper on the list compared to earlier completed.
The tasks are being saved in browser's sessionStorage. <br>
The list is prefilled with two sample tasks. <br>

## Installation
The app does not need any installation. Simply clone this repo to the folder on  your local machine.
Just make sure all the files are in the same folder.

## Running the app
Open VSCode, navigate to the app folder and open `index.html` file with `Live Server`.  <br>
The browser tab is opened and the app is loaded. <br>


## The responsive design
The responsiveness of the app is atchieved with `css` using `media queries`. Therefore the app could be used on various devices - Desktop, Tablet, Phone.

### Demo
[ToDoAppAudrius](https://audriusanusauskas.github.io/ToDoAppAudrius)



