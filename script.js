document.addEventListener('DOMContentLoaded', function () {
    const todoList = document.getElementById('todo-list');
    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');
    const warningMessage = document.getElementById('warning-message');

    addButton.addEventListener('click', function () {
        addTask();
    });

    todoInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    

    function addTask() {
        const taskText = todoInput.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.classList.add('todo-item');
            listItem.innerHTML = `
                <input type="checkbox">
                <span>${taskText}</span>
                <button class="delete-button">X</button>
            `;
            todoList.appendChild(listItem);

            const deleteButton = listItem.querySelector('.delete-button');
            deleteButton.addEventListener('click', function () {
                listItem.remove();
            });

            const checkbox = listItem.querySelector('input[type="checkbox"]');
            checkbox.addEventListener('change', function () {
                listItem.classList.toggle('completed', checkbox.checked);
            });

            todoInput.value = '';
            warningMessage.style.display = 'none';
        } else {
            displayWarning();
        }
    }

    function displayWarning() {
        warningMessage.style.display = 'block';
    }
});
