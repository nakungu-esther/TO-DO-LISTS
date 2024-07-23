document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let taskInput = document.getElementById('task-input');
    let roleInput = document.getElementById('role-input');
    let todoList = document.getElementById('todo-list');

    let task = taskInput.value;
    let role = roleInput.value;


    let date = new Date();
    let day = date.toLocaleString('default', { weekday: 'long' });
    let formattedDate = date.toLocaleDateString();

    let todoItem = document.createElement('div');
    todoItem.className = 'todo-item';
    todoItem.innerHTML = `
        <span><strong>Task:</strong> ${task} <br> <strong>Role:</strong> ${role} <br> <strong>Day:</strong> ${day} <br> <strong>Date:</strong> ${formattedDate}</span>
        <button class="remove-btn">Remove</button>
    `;

    todoList.appendChild(todoItem);

    taskInput.value = '';
    roleInput.value = '';

    let removeBtn = todoItem.querySelector('.remove-btn');
    removeBtn.addEventListener('click', function() {
        todoList.removeChild(todoItem);
        
    });
});
