const prev = document.getElementById("prev")
const img = document.querySelector("img")
const next = document.getElementById("next")

const imgArray = ['ferrari sf90 stradale.jpg', 
    'lamborghini temerario.jpg', 'maserati mc20.jpg', 'mclaren sabre.jpg',
'pagani huayra R.jpg']

let currentIndex = 0

next.addEventListener("click", function(){
    currentIndex++
    if (currentIndex >= imgArray.length){
        currentIndex = 0
    }
    img.src = imgArray[currentIndex]
})

prev.addEventListener("click", function(){
    currentIndex--
    if (currentIndex < 0){
        currentIndex = 4
    }
    img.src = imgArray[currentIndex]
})



