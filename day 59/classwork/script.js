for (let i = 20; i <= 50; i++){
    console.log(i)
}

let variable = 30
while(variable <= 60){
    console.log(variable)
    variable ++
}

const password = 123456 
let pass ;
let attempts = 3

while(attempts > 0){
    let pass = prompt("enter your password:")
    if(pass !== password){
        attempts --
        alert("you have " + attempts + " attempts left")
    }
    else{
        alert('Access granted')
        break
    }
    if(attempts === 0){
        alert("system blocked. try again")
    }
}

function generateEven(border){
    let newlist = []
}