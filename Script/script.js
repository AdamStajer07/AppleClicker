const appleIcon = document.querySelector('.apple__img');
let scoreInfo = document.querySelector('.apple__score');
let boostInfo = 1;
let autoclickInfo = 0;
const boost = (boost) => {
    for(let i=0;i<boost;i++) {
        scoreInfo.innerHTML++;
    }
    console.log('boost - work')
}
function autoClick(autoclick) {
    for(let i=0;i<autoclick;i++) {
        scoreInfo.innerHTML++;
    }
    console.log('autoclick - work')
}
appleIcon.addEventListener('click', () => {
    boost(boostInfo);
    console.log("add point - work");
})

const x2Boost = document.querySelector('.x2boost');
const x5Boost = document.querySelector('.x5boost');
const x10Boost = document.querySelector('.x10boost');

x2Boost.addEventListener('click', () => {
    if(scoreInfo.innerHTML >= 20) {
        boostInfo = 2;
        scoreInfo.innerHTML -= 10;
        x2Boost.style.display = 'none';
    }
})
x5Boost.addEventListener('click', () => {
    if(scoreInfo.innerHTML >= 50) {
        boostInfo = 5;
        scoreInfo.innerHTML -= 25;
        x5Boost.style.display = 'none';
    }
})
x10Boost.addEventListener('click', () => {
    if(scoreInfo.innerHTML >= 200) {
        boostInfo = 10;
        scoreInfo.innerHTML -= 100;
        x10Boost.style.display = 'none';
    }
})

const x10autoclick = document.querySelector('.x10autoclick');
const x25autoclick = document.querySelector('.x25autoclick');
const x50autoclick = document.querySelector('.x50autoclick');

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
    }
})
x50autoclick.addEventListener('click', () => {
    if(scoreInfo.innerHTML >= 2500) {
        autoclickInfo = 50;
        scoreInfo.innerHTML -= 2000;
        x50autoclick.style.display = 'none';
    }
})