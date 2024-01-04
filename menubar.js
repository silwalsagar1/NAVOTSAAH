var menubar = document.querySelector('#menu-bar')
var myNav = document.querySelector('.nav')

menubar.oneclick =() =.{
    menubar.classList.toggle('fa-times')
    myNav.classList.toggle('active')
}