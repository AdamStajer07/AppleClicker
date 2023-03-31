const boostBox = document.querySelector('.boost');
let boostInfo = 1;
let boostTextPoints = 30;
let firstFilter = 1;

boostBox.addEventListener('click', () => {
    if(scoreInfo.innerHTML >= boostTextPoints) {        
        scoreInfo.innerHTML -= (boostTextPoints*0.9).toFixed(0);
        boostInfo = Math.ceil(boostInfo * 1.25);
        boostTextPoints = Math.ceil((boostInfo * 35) * 1.66);
        let text = `<span class="upgrade__text">x${Math.ceil(boostInfo * 1.25)} (${Math.ceil((boostInfo * 35) * 1.66)} apples)</span>`;
        boostBox.innerHTML = text;

        filter += 0.1;
        appleIcon.style.filter = `brightness(${firstFilter}) hue-rotate(${twiceFilter}deg)`;
    }
})