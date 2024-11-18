function addTask() {
    const input = document.getElementById('taskInput');
    const task = input.value.trim();

    if (task) {
        const list = document.getElementById('taskList');
        const li = document.createElement('li');

        li.textContent = task;
        li.onclick = function() {
            li.classList.toggle('completed');
        };

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function(event) {
            event.stopPropagation(); // Prevent triggering the li click
            list.removeChild(li);
        };

        li.appendChild(removeButton);
        list.appendChild(li);
        input.value = '';
    }
}

function removeCompleted() {
    const list = document.getElementById('taskList');
    const items = list.getElementsByTagName('li');

    for (let i = items.length - 1; i >= 0; i--) {
        if (items[i].classList.contains('completed')) {
            list.removeChild(items[i]);
        }
    }
}

