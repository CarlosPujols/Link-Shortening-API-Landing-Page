const menuButton = document.getElementById('menu-btn');
const navInfo = document.getElementById('nav-info');
menuButton.addEventListener('click',() =>{
    navInfo.classList.toggle('active-menu');
})