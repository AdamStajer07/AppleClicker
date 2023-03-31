const autoclickBox = document.querySelector('.autoclick');
let autoclickInfo = 5;
let autoclickTextPoints = 250;
let twiceFilter = 1;

autoclickBox.addEventListener('click', () => {
    if(autoclickInfo == 5 && scoreInfo.innerHTML >= 250) {
        setInterval(() => {
            autoClick(autoclickInfo);
        }, 1000);
    }
    if(scoreInfo.innerHTML >= autoclickTextPoints)
    scoreInfo.innerHTML -= (autoclickTextPoints*0.9).toFixed(0);
        autoclickInfo = Math.ceil(autoclickInfo * 1.25);
        autoclickTextPoints = Math.ceil((autoclickInfo * 50) * 2);
        let text = `<span class="upgrade__text">x${Math.ceil(autoclickInfo * 1.25)} (${Math.ceil((autoclickInfo * 50) * 2)} apples)</span>`;
        autoclickBox.innerHTML = text;

        twiceFilter += 2;
        appleIcon.style.filter = `brightness(${firstFilter}) contrast(0.99) hue-rotate(${twiceFilter}deg)`;

})
