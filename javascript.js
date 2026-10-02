const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function displayTasks() {
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = task.text;

    if (task.completed) {
      listItem.classList.add('completed');
    }

    taskList.appendChild(listItem);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    listItem.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
      tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      displayTasks();
    });

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.classList.add('complete-button');
    listItem.appendChild(completeButton);

    completeButton.addEventListener('click', () => {
      task.completed = !task.completed;
      localStorage.setItem('tasks', JSON.stringify(tasks));
      displayTasks();
    });
  });
}

addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert("Enter Your Task");
  } else {
    const newTask = { text: taskText, completed: false };
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    taskInput.value = '';
    displayTasks();
  
  }

});
displayTasks();