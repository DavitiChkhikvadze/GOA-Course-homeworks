//N1
function changeContent(){
    let element = document.getElementById('myParagraph')
     element.textContent = 'Hello, everyone!'
     return element
}

changeContent()

//N2
function changeBackground(){
    const elements = document.getElementsByClassName('colorDiv')
    elements.style.backgroundColor  = "green"
    return elements
}

changeBackground()

//N3
function elementCounter(){
    const liElements = document.getElementsByTagName('li')
    return liElements.length
}
console.log(elementCounter())

//N4
function changeStyleOfHeading(){
    let header = document.getElementById("mainHeading")
    header.style.fontSize = "20px"
    header.style.color = "red"
    return header
}
changeStyleOfHeading()

console.dir(document)

//დანარჩენი ფოტოები არ გახსნა. მოვაგვარებ ამ პრობლემას და
// როცა გამოჩნდება აქ დავამატებ დაჩენილ დავალებეს
