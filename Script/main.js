const appleIcon = document.querySelector('.apple__img');
let scoreInfo = document.querySelector('.apple__score');
let rotateInfo = 30;

const boost = (boost) => {
    for(let i=0;i<boost;i++) {
        scoreInfo.innerHTML++;
    }
}

const autoClick = (autoclick) => {
    for(let i=0;i<autoclick;i++) {
        scoreInfo.innerHTML++;
    }
    rotate();
}

const rotate = () => {
    appleIcon.style.rotate = rotateInfo + "deg";
    rotateInfo += 30;
}

appleIcon.addEventListener('click', () => {
        rotate();
        boost(boostInfo);
})
