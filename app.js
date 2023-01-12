const menuButton = document.getElementById('menu-btn');
const navInfo = document.getElementById('nav-info');
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
menuButton.addEventListener('click',() =>{
    navInfo.classList.toggle('active-menu');
    line1.classList.toggle('line-1');
    line2.classList.toggle('line-2');
    line3.classList.toggle('line-3');

})