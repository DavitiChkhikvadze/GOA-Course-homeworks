document.body.children[0].textContent = 'Programming is best!'
document.body.children[0].style.color = 'red'


let domMethod1 = document.getElementById('p1')
console.log(domMethod1)

let domMethod2 = document.getElementsByTagName('p')
console.log(domMethod2)

let domMethod3 = document.getElementsByClassName('mainP')
console.log(domMethod3)


console.dir(document)



function manualGetElementById(Id){
    const allElements = document.all
    for (let i=0; i < allElements.length; i++){
        if (allElements[i].id === Id){
            return allElements[i]
        }
    }
}

let functionTest = manualGetElementById('p1')
console.log(functionTest)

