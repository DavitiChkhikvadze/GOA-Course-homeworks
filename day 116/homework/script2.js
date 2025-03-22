async function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (!taskText) return;

    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = async function() {
        await deleteTask(li);
    };

    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}

async function deleteTask(taskItem) {
    await new Promise(resolve => setTimeout(resolve, 100)); 
    taskItem.remove();
}