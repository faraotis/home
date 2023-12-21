let menuHam = document.querySelector('.menuHamb')
let menuClos = document.querySelector('.menuClose')
let menu = document.getElementsByTagName('menu')[0]
let nav = document.getElementsByTagName('nav')[0]
function menuHamb() {
    menu.style.display = 'block'
    menuHam.style.display = 'none'
    menuClos.style.display = 'block'
    nav.style.display = 'none'
}
function menuClose() {
    menu.style.display = 'none'
    menuHam.style.display = ''
    menuClos.style.display = 'none'
    nav.style.display = ''
}