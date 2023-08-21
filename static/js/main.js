const toggle = document.getElementById('toggle')
const navbar = document.getElementById('navbar')
const next = document.getElementById('next')
const previous = document.getElementById('previous')

toggle.addEventListener('click', () =>{
    navbar.classList.toggle('active')
})