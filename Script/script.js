const appleIcon = document.querySelector('.apple__img');
let scoreInfo = document.querySelector('.apple__score');
let boostInfo = 1;
const boost = (boost) => {
    for(let i=0;i<boost;i++) {
        scoreInfo.innerHTML++;

    }
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