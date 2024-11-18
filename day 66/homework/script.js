//N1
let newP = document.createElement("p")
newP.textContent = "Hello World!"
document.body.appendChild(newP)

//N2
let currentDiv = document.querySelector(".div1")
let newDiv = currentDiv.cloneNode(true)
document.body.appendChild(newDiv)

//N3
const newList = document.querySelector("#list1")
let newLi = document.querySelector("#li1")
newList.removeChild(newLi)

//N4
let newH1 = docuemnt.getElementById("h1");
let newH2 = document.createElement("h2");
newH2.textContent = "New H2 Title";
newH1.parentNode.replaceChild(newH2, newH1);

//N5
let newP = document.getElementById("p1")
let newButton = document.getElementById("b1")
newButton.addEventListener("click", function(){
    newP.remove()
})

//N6
const parent = document.getElementById('div2');

for (let i = 0; i < 5; i++) {
    const newElement = document.createElement('span');
    newElement.textContent = "new span";
    parent.appendChild(newElement);
}
//7
const newButton2 = document.getElementById("b2")
newButton2.addEventListener("click", function(){
    const clonedButton = newButton2.cloneNode(true)
    document.body.appendChild(clonedButton)
})

//8
const newImg = document.querySelector("img1")
newImg.remove()
parent.appendChild(newImg)

//9: big project
document.addEventListener('DOMContentLoaded', function(){
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const clearCompletedButton = document.getElementById('clearCompletedButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', function(){
        const taskText = taskInput.value.trim();
        if (taskText) {
            const li = document.createElement('li');

            li.textContent = taskText;

            // Add click event to toggle completed state
            li.addEventListener('click', function(){
                li.classList.toggle('completed');
            });

            // Create Remove button
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', function(event){
                event.stopPropagation(); // Prevent toggling on button click
                taskList.removeChild(li);
            });

            li.appendChild(removeButton);
            taskList.appendChild(li);

            taskInput.value = '';
        }
    });

    clearCompletedButton.addEventListener('click', function(){
        const completedTasks = taskList.querySelectorAll('.completed');
        completedTasks.forEach(task => {
            taskList.removeChild(task);
        });
    });
});

