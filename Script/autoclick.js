const x10autoclick = document.querySelector('.x10autoclick');
const x25autoclick = document.querySelector('.x25autoclick');
const x50autoclick = document.querySelector('.x50autoclick');

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
    }
})
x25autoclick.addEventListener('click', () => {
    if(scoreInfo.innerHTML >= 1000) {
        autoclickInfo = 25;
        scoreInfo.innerHTML -= 500;
        x25autoclick.style.display = 'none';
        rotate();
    }
})
x50autoclick.addEventListener('click', () => {
    if(scoreInfo.innerHTML >= 2500) {
        autoclickInfo = 50;
        scoreInfo.innerHTML -= 2000;
        x50autoclick.style.display = 'none';
        rotate();
    }
})