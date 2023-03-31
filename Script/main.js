const upgradeContainer = document.querySelector('.upgrade__container');
const appleIcon = document.querySelector('.apple__img');
let scoreInfo = document.querySelector('.apple__score');
let rotateInfo = 30;

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
    rotateInfo += 30;
}

appleIcon.addEventListener('click', () => {
        rotate();
        boost(boostInfo);
})
