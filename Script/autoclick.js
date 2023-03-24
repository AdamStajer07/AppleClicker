const x10autoclick = document.querySelector('.x10autoclick');
const x25autoclick = document.querySelector('.x25autoclick');
const x50autoclick = document.querySelector('.x50autoclick');
const x100autoclick = document.querySelector('.x100autoclick');
const x250autoclick = document.querySelector('.x250autoclick');
const x500autoclick = document.querySelector('.x500autoclick');

x10autoclick.style.display = 'block';
x25autoclick.style.display = 'block';
x50autoclick.style.display = 'block';

x10autoclick.addEventListener('click', () => {
    if(scoreInfo.innerHTML >= 250) {
        autoclickInfo = 10;
        scoreInfo.innerHTML -= 125;
        x10autoclick.style.display = 'none';
        setInterval(() => {
            autoClick(autoclickInfo);
        }, 1000);
        x100autoclick.style.display = 'block';
    }
})
x25autoclick.addEventListener('click', () => {
    if(scoreInfo.innerHTML >= 1000) {
        autoclickInfo = 25;
        scoreInfo.innerHTML -= 500;
        x25autoclick.style.display = 'none';
        rotate();
        x250autoclick.style.display = 'block';
    }
})
x50autoclick.addEventListener('click', () => {
    if(scoreInfo.innerHTML >= 2500) {
        autoclickInfo = 50;
        scoreInfo.innerHTML -= 2000;
        x50autoclick.style.display = 'none';
        rotate();
        x500autoclick.style.display = 'block';
    }
})
x100autoclick.addEventListener('click', () => {
    if(scoreInfo.innerHTML >= 5000) {
        autoclickInfo = 100;
        scoreInfo.innerHTML -= 3000;
        x100autoclick.style.display = 'none';
        rotate();
    }
})
x250autoclick.addEventListener('click', () => {
    if(scoreInfo.innerHTML >= 10000) {
        autoclickInfo = 250;
        scoreInfo.innerHTML -= 7500;
        x250autoclick.style.display = 'none';
        rotate();
    }
})
x500autoclick.addEventListener('click', () => {
    if(scoreInfo.innerHTML >= 25000) {
        autoclickInfo = 500;
        scoreInfo.innerHTML -= 20000;
        x500autoclick.style.display = 'none';
        rotate();
    }
})
