const taskInput = document.getElementById('task');
const addBtn = document.getElementById('add');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.innerHTML = ` ${taskText} <button class="deleteBtn">Delete</button> `; 
        taskList.appendChild(listItem);
        taskInput.value = '';
        const deleteBtn = listItem.querySelector('.deleteBtn');
        deleteBtn.addEventListener('click', () => {
            listItem.remove();
        });
    }
});