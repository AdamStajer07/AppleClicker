const x10autoclick = document.querySelector('.x10autoclick');
const x25autoclick = document.querySelector('.x25autoclick');
const x50autoclick = document.querySelector('.x50autoclick');
const x100autoclick = document.querySelector('.x100autoclick');
const x250autoclick = document.querySelector('.x250autoclick');
const x500autoclick = document.querySelector('.x500autoclick');

const autoClickArray = [
    x10autoclick,
    x25autoclick,
    x50autoclick,
    x100autoclick,
    x250autoclick,
    x500autoclick,
]

x10autoclick.style.display = 'block';
x25autoclick.style.display = 'block';
x50autoclick.style.display = 'block';

autoClickArray[0].addEventListener('click', () => {
    if(scoreInfo.innerHTML >= 250) {
        setInterval(() => {
            autoClick(autoclickInfo);
        }, 1000);
        autoclickInfo = 10;
        scoreInfo.innerHTML -= 125;
        for(let i=0;i<=0;i++){
            autoClickArray[i].style.display = 'none';
            autoClickArray[i+3].style.display = 'block';
        }
    }
})
autoClickArray[1].addEventListener('click', () => {
    if(scoreInfo.innerHTML >= 1000) {
        if(autoclickInfo != 10) {
            setInterval(() => {
                autoClick(autoclickInfo);
            }, 1000);
        }
        autoclickInfo = 25;
        scoreInfo.innerHTML -= 500;
        for(let i=0;i<=1;i++){
            autoClickArray[i].style.display = 'none';
            autoClickArray[i+3].style.display = 'block';
        }
        rotate();
    }
})
autoClickArray[2].addEventListener('click', () => {
    if(scoreInfo.innerHTML >= 2500) {
        if(autoclickInfo != 10 && autoclickInfo != 25) {
            setInterval(() => {
                autoClick(autoclickInfo);
            }, 1000);
        }
        autoclickInfo = 50;
        scoreInfo.innerHTML -= 2000;
        for(let i=0;i<=2;i++){
            autoClickArray[i].style.display = 'none';
            autoClickArray[i+3].style.display = 'block';
        }
        rotate();
    }
})
autoClickArray[3].addEventListener('click', () => {
    if(scoreInfo.innerHTML >= 5000) {
        if(autoclickInfo != 10 && autoclickInfo != 25 && autoclickInfo != 50) {
            setInterval(() => {
                autoClick(autoclickInfo);
            }, 1000);
        }
        autoclickInfo = 100;
        scoreInfo.innerHTML -= 3000;
        for(let i=0;i<=3;i++){
            autoClickArray[i].style.display = 'none';
            // autoClickArray[i+3].style.display = 'block';
        }
        rotate();
    }
})
autoClickArray[4].addEventListener('click', () => {
    if(scoreInfo.innerHTML >= 10000) {
        if(autoclickInfo != 10 && autoclickInfo != 25 && autoclickInfo != 50 && autoclickInfo != 100) {
            setInterval(() => {
                autoClick(autoclickInfo);
            }, 1000);
        }
        autoclickInfo = 250;
        scoreInfo.innerHTML -= 7500;
        for(let i=0;i<=4;i++){
            autoClickArray[i].style.display = 'none';
            // autoClickArray[i+3].style.display = 'block';
        }
        rotate();
    }
})
autoClickArray[5].addEventListener('click', () => {
    if(scoreInfo.innerHTML >= 25000) {
        if(autoclickInfo != 10 && autoclickInfo != 25 && autoclickInfo != 50 && autoclickInfo != 100 && autoclickInfo != 250) {
            setInterval(() => {
                autoClick(autoclickInfo);
            }, 1000);
        }
        autoclickInfo = 500;
        scoreInfo.innerHTML -= 20000;
        for(let i=0;i<=5;i++){
            autoClickArray[i].style.display = 'none';
            // autoClickArray[i+3].style.display = 'block';
        }
        rotate();
    }
})
