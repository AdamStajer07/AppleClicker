const appleIcon = document.querySelector('.apple__img');
let scoreInfo = document.querySelector('.apple__score');
let boostInfo = 1;
let autoclickInfo = 0;
let rotateInfo = 45;

const boost = (boost) => {
    for(let i=0;i<boost;i++) {
        scoreInfo.innerHTML++;
    }
    console.log('boost - work')
}
const autoClick = (autoclick) => {
    for(let i=0;i<autoclick;i++) {
        scoreInfo.innerHTML++;
    }
    rotate();
    console.log('autoclick - work')
}
const rotate = () => {
    appleIcon.style.rotate = rotateInfo + "deg";
    rotateInfo += 45;
}
appleIcon.addEventListener('click', () => {
    rotate();
    boost(boostInfo);
    console.log("add point - work");
})

const x2Boost = document.querySelector('.x2boost');
const x5Boost = document.querySelector('.x5boost');
const x10Boost = document.querySelector('.x10boost');
const x25Boost = document.querySelector('.x25boost');
const x50Boost = document.querySelector('.x50boost');
const x100Boost = document.querySelector('.x100boost');

x2Boost.style.display = 'block';
x5Boost.style.display = 'block';
x10Boost.style.display = 'block';

x2Boost.addEventListener('click', () => {
    if(scoreInfo.innerHTML >= 20) {
        appleIcon.style.filter = 'brightness(1.1) contrast(0.99) hue-rotate(19deg)';
        boostInfo = 2;
        scoreInfo.innerHTML -= 10;
        x2Boost.style.display = 'none';
        x25Boost.style.display = 'block';
    }
})
x5Boost.addEventListener('click', () => {
    if(scoreInfo.innerHTML >= 50) {
        boostInfo = 5;
        scoreInfo.innerHTML -= 25;
        x5Boost.style.display = 'none';
        x50Boost.style.display = 'block';
        appleIcon.style.filter = 'brightness(1.3) contrast(0.8) hue-rotate(30deg)';
    }
})
x10Boost.addEventListener('click', () => {
    if(scoreInfo.innerHTML >= 200) {
        boostInfo = 10;
        scoreInfo.innerHTML -= 100;
        x10Boost.style.display = 'none';
        x100Boost.style.display = 'block';
        appleIcon.style.filter = 'brightness(1.4) contrast(0.7) hue-rotate(45deg)';
    }
})
x25Boost.addEventListener('click', () => {
    if(scoreInfo.innerHTML >= 750) {
        boostInfo = 25;
        scoreInfo.innerHTML -= 600;
        x25Boost.style.display = 'none';
    }

})
x50Boost.addEventListener('click', () => {
    if(scoreInfo.innerHTML >= 1500) {
        boostInfo = 50;
        scoreInfo.innerHTML -= 1200;
        x50Boost.style.display = 'none';
    }

})
x100Boost.addEventListener('click', () => {
    if(scoreInfo.innerHTML >= 4000) {
        boostInfo = 100;
        scoreInfo.innerHTML -= 3500;
        x100Boost.style.display = 'none';
    }

})
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
// Test