const menuButton = document.getElementById('menu-btn');
const navInfo = document.getElementById('nav-info');
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
const ctaButton = document.getElementById('cta-button');
const results = document.getElementById('results-container');
const shortenResultContainer = document.getElementById('shorten-result-container')
const linkInput = document.getElementById('link');
const mainCta = document.getElementById('main-cta');

menuButton.addEventListener('click',() =>{
    navInfo.classList.toggle('active-menu');
    line1.classList.toggle('line-1');
    line2.classList.toggle('line-2');
    line3.classList.toggle('line-3');

})

ctaButton.addEventListener('click', (event)=>{
    event.preventDefault();
    if (linkInput.value == ""){
        document.getElementById('input-error').classList.add('visible');
        linkInput.classList.add('main-cta-error');
    }else{
        document.getElementById('input-error').classList.remove('visible');
        linkInput.classList.remove('main-cta-error');
        const longUrl = document.getElementById('link').value;
        const targetUrl = `https://api.shrtco.de/v2/shorten?url=${longUrl}`;

        fetch(targetUrl)
        .then((res) => {
            if (!res.ok){
                throw new Error("Invalid link");
            }
            return res.json();
            })
        .then((data) => {
            if(data.ok){
            const longLink = data.result.original_link;
            const shortLink = data.result.full_short_link2;

            let resultModuleChilds = document.querySelectorAll('#results-container .shorten-result').length;
            
            let resultModule = `<div class="shorten-result" id="shorten-result-container${resultModuleChilds + 1}">
            
            <div class="shorten-result-info">
            <p class="long-link" id="long-link${resultModuleChilds + 1}">${longLink}</p>
            <p class="shortened-link" id="shortened-link${resultModuleChilds + 1}">${shortLink}</p>
            </div>
            <button class="copy-button" id="copy-button${resultModuleChilds + 1}">Copy</button>
            </div>`;


            results.innerHTML += resultModule;

            let actualModules = document.getElementById('results-container').innerHTML;
            
            sessionStorage.setItem('modules', actualModules);
            
            let myStorage = sessionStorage.getItem('modules');

            console.log(myStorage);



            results.classList.add('visible-result');

            }
        })
        .catch(error => {
            console.log(error);
        });  
    }

    
});

results.addEventListener('click', (event) => {
    let clickedButton = event.target.id;
    let copyTargetNumber = clickedButton.substring(11);
    let shortenedLink = document.getElementById(`shortened-link${copyTargetNumber}`).innerHTML;
    navigator.clipboard.writeText(shortenedLink);
    event.target.innerHTML = 'Copied!';
    let otherButtons = Array.from(document.getElementsByClassName('copy-button'));
    otherButtons.forEach(button => {
        if (button.id != clickedButton){
            button.innerHTML = 'Copy';
        }
    });
});

onload = () => {
    let storedModules = sessionStorage.getItem('modules');
    console.log(storedModules);
    if (storedModules != null){
        results.innerHTML = storedModules;
        results.classList.add('visible-result');
    }  
}