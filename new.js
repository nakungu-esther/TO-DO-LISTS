/// Get the Add Task button and add a click event listener
let addTaskButton = document.getElementById('add-task-button');
addTaskButton.addEventListener('click', function() {
    // Get the input element and trim its value to remove leading/trailing whitespace
    const taskInput = document.getElementById('new-task');
    const taskValue = taskInput.value.trim();
    
    // Check if the input is not empty
    if (taskValue) {
        // Get the task list element
        const taskList = document.getElementById('task-list');
        
        // Create a new list item
        const listItem = document.createElement('li');
        
        // Create a span to hold the task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskValue;
        
        // Create the Complete button
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.classList.add('complete');
        
        // Add click event listener to the Complete button
        completeButton.addEventListener('click', function() {
            listItem.classList.toggle('completed');
        });
        
        // Create the Edit button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit');
        
        // Add click event listener to the Edit button
        editButton.addEventListener('click', function() {
            // Prompt the user to edit the task text
            const newTaskValue = prompt('Edit your task:', taskSpan.textContent);
            
            // If the user provides a new value, update the task text
            if (newTaskValue !== null && newTaskValue.trim() !== '') {
                taskSpan.textContent = newTaskValue.trim();
            }
        });
        
        // Create the Delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        
        // Add click event listener to the Delete button
        deleteButton.addEventListener('click', function() {
            // Remove the task from the list
            taskList.removeChild(listItem);
        });

        // Append the task text, Complete button, Edit button, and Delete button to the list item
        listItem.appendChild(taskSpan);
        listItem.appendChild(completeButton);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        
        // Append the list item to the task list
        taskList.appendChild(listItem);
        
        // Clear the input field
        taskInput.value = '';
    } else {
        alert('Please enter a task.');
    }
});
