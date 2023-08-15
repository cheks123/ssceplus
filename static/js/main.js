const toggle = document.getElementById('toggle')
const navbar = document.getElementById('navbar')
const next = document.getElementById('next')
const previous = document.getElementById('previous')

toggle.addEventListener('click', () =>{
    navbar.classList.toggle('active')
})

const slides = document.querySelectorAll('.slide')

slides.forEach(node=>{
    console.log(node.firstElementChild.innerText)
    let position = Number(node.firstElementChild.innerText) * 105
    node.firstElementChild.innerText = position

    node.style.transform = `translate(${position}%, 0)`
    
    console.log(position)
  
})

let curr = 0

next.addEventListener('click', ()=>{
    curr = curr + 105
    slides.forEach(node=>{
        let position = Number(node.firstElementChild.innerText) - 105
        if (position < 0){
            position = 315
        }
        node.firstElementChild.innerText = position
        node.style.transform = `translate(${position}%, 0)`

    })

})

console.log(slides)
