const x2Boost = document.querySelector('.x2boost');
const x5Boost = document.querySelector('.x5boost');
const x10Boost = document.querySelector('.x10boost');
const x25Boost = document.querySelector('.x25boost');
const x50Boost = document.querySelector('.x50boost');
const x100Boost = document.querySelector('.x100boost');
const x200Boost = document.querySelector('.x200boost');
const x400Boost = document.querySelector('.x400boost');
const x600Boost = document.querySelector('.x600boost');

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
        x200Boost.style.display = 'block';
        appleIcon.setAttribute('src', 'IMG/apple2.png')
        appleIcon.style.filter = 'none';
    }

})
x50Boost.addEventListener('click', () => {
    if(scoreInfo.innerHTML >= 1500) {
        boostInfo = 50;
        scoreInfo.innerHTML -= 1200;
        x50Boost.style.display = 'none';
        x400Boost.style.display = 'block';
        appleIcon.style.filter = 'brightness(1.1) contrast(0.99) hue-rotate(-19deg)';

    }

})
x100Boost.addEventListener('click', () => {
    if(scoreInfo.innerHTML >= 4000) {
        boostInfo = 100;
        scoreInfo.innerHTML -= 3000;
        x100Boost.style.display = 'none';
        x600Boost.style.display = 'block';
        appleIcon.style.filter = 'brightness(1.3) contrast(0.8) hue-rotate(-30deg)';

    }

})
x200Boost.addEventListener('click', () => {
    if(scoreInfo.innerHTML >= 7500) {
        boostInfo = 200;
        scoreInfo.innerHTML -= 5500;
        x200Boost.style.display = 'none';
        appleIcon.setAttribute('src', 'IMG/apple3.png')
    }

})
x400Boost.addEventListener('click', () => {
    if(scoreInfo.innerHTML >= 12500) {
        boostInfo = 400;
        scoreInfo.innerHTML -= 1000;
        x400Boost.style.display = 'none';
        appleIcon.style.filter = 'brightness(1.1) contrast(0.99) hue-rotate(-19deg)';

    }

})
x600Boost.addEventListener('click', () => {
    if(scoreInfo.innerHTML >= 20000) {
        boostInfo = 600;
        scoreInfo.innerHTML -= 15000;
        x600Boost.style.display = 'none';
        appleIcon.style.filter = 'brightness(1.3) contrast(0.8) hue-rotate(-30deg)';

    }

})