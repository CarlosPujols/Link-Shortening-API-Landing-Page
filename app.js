const menuButton = document.getElementById('menu-btn');
const navInfo = document.getElementById('nav-info');
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
const ctaButton = document.getElementById('cta-button');
const results = document.getElementById('results-container');
const shortenResultContainer = document.getElementById('shorten-result-container')
menuButton.addEventListener('click',() =>{
    navInfo.classList.toggle('active-menu');
    line1.classList.toggle('line-1');
    line2.classList.toggle('line-2');
    line3.classList.toggle('line-3');

})

ctaButton.addEventListener('click', (event)=>{
    event.preventDefault();

    let resultModuleChilds = document.querySelectorAll('#shorten-result-container .copy-button').length;
    
    let resultModule = `<div class="shorten-result" id="shorten-result-container">
    
    <div class="shorten-result-info">
      <p class="long-link" id="long-link${resultModuleChilds + 1}">https://wwwwwwwwwwwwwwwww.frontendmentor.io</p>
      <p class="shortened-link" id="shortened-link${resultModuleChilds + 1}">https://wwwwwwwwwwwwwwwwfrntemtor.io</p>
    </div>
    <button class="copy-button" id="copy-button${resultModuleChilds + 1}">Copy</button>
    </div>`;

    results.innerHTML += resultModule;

    results.classList.add('visible-result');

    for (let i = 1; i <= resultModuleChilds; i++){
        let copyBtn = document.getElementById(`copy-button${resultModuleChilds + 1}`);
        copyBtn.addEventListener('click', (event)=>{
            event.preventDefault();
            const shortenedLink = document.getElementById(`shortened-link${resultModuleChilds + 1}`).innerText;
            const buttonSelectTest = `${shortenedLink} ${resultModuleChilds}`
            navigator.clipboard.writeText(buttonSelectTest);
        })
    }

    

    


    
})