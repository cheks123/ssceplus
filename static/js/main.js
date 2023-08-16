const toggle = document.getElementById('toggle')
const navbar = document.getElementById('navbar')
const next = document.getElementById('next')
const previous = document.getElementById('previous')

toggle.addEventListener('click', () =>{
    navbar.classList.toggle('active')
})

const slides1 = document.querySelectorAll('.slide1')

slides1.forEach(node=>{
    let position = Number(node.firstElementChild.innerText) * 105
    node.firstElementChild.innerText = position

    node.style.transform = `translate(${position}%, 0)`
})
next.addEventListener('click', ()=>{
   
    slides1.forEach(node=>{
        let position = Number(node.firstElementChild.innerText) - 105
        if (position < 0){
            position = 315

        }
        node.firstElementChild.innerText = position
        if (position != 315){
            node.style.zIndex = "20"
            node.style.transition = "all 1s"
            node.style.transform = `translate(${position}%, 0)`
        }
        else{
            node.style.zIndex = "10"
            node.style.transition = "all 0s"
            node.style.transform = `translate(${position}%, 0)`
        }

    })



})

previous.addEventListener('click', ()=>{
    slides1.forEach(node=>{
        let position = Number(node.firstElementChild.innerText) + 105
        if (position > 315){
            position = 0
        }
        node.firstElementChild.innerText = position
        if (position != 0){
            node.style.zIndex = "20"
            node.style.transition = "all 1s"
            node.style.transform = `translate(${position}%, 0)`
        }
        else{
            node.style.zIndex = "10"
            node.style.transition = "all 0s"
            node.style.transform = `translate(${position}%, 0)`
        }
    })



})
