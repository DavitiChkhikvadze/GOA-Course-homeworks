const prev = document.querySelector("#prev")
const next = document.querySelector("#next")
const mainImg = document.querySelector("#mainImg")

const newArr = ["car1.png", "car2.png", "car3.png"]
let index = 0

next.addEventListener("click", function(){
    index++
    if (index >= newArr.length){
        index = 0
    }
    mainImg.src = newArr[index]
})

prev.addEventListener("click", function(){
    index--
    if (index < newArr.length){
        index = 2
    }
    mainImg.src = newArr[index]
})

const parentDiv = document.querySelector("#parent")
const pSpawner = document.querySelector("#button1")

pSpawner.addEventListener("click", function(){
    let newP = document.createElement("p")
    newP.textContent = "new paragraph"
    newP.id = "uniqueP"
    parentDiv.appendChild(newP)
})

console.dir(parentDiv)

const newDiv = document.querySelector("#newDiv")

newDiv.removeChild(newDiv.firstChild)
newDiv.remove(newDiv.children[2])

console.log(newDiv)