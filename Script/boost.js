const x2Boost = document.querySelector('.x2boost');
const x5Boost = document.querySelector('.x5boost');
const x10Boost = document.querySelector('.x10boost');
const x25Boost = document.querySelector('.x25boost');
const x50Boost = document.querySelector('.x50boost');
const x100Boost = document.querySelector('.x100boost');
const x200Boost = document.querySelector('.x200boost');
const x400Boost = document.querySelector('.x400boost');
const x600Boost = document.querySelector('.x600boost');
const x750Boost = document.querySelector('.x750boost');
const x1000Boost = document.querySelector('.x1000boost');
const x2000Boost = document.querySelector('.x2000boost');
const x3500Boost = document.querySelector('.x3500boost');
const x5000Boost = document.querySelector('.x5000boost');
const x7500Boost = document.querySelector('.x7500boost');
const x10000Boost = document.querySelector('.x1000boost');
const x15000Boost = document.querySelector('.x15000boost');

const boostArray = [
    x2Boost,
    x5Boost,
    x10Boost, 
    x25Boost, 
    x50Boost, 
    x100Boost,
    x200Boost,
    x400Boost,
    x600Boost,
    x750Boost,
    x1000Boost,
    x2000Boost,
    x3500Boost,
    x5000Boost,
    x7500Boost,
    x10000Boost,
    x15000Boost
]

x2Boost.style.display = 'block';
x5Boost.style.display = 'block';
x10Boost.style.display = 'block';

boostArray[0].addEventListener('click', () => {
    if(scoreInfo.innerHTML >= 20) {
        appleIcon.style.filter = 'brightness(1.1) contrast(0.99) hue-rotate(19deg)';
        boostInfo = 2;
        scoreInfo.innerHTML -= 10;
        for(let i=0;i<=0;i++){
            boostArray[i].style.display = 'none';
            boostArray[i+3].style.display = 'block';
        }
    }
})
boostArray[1].addEventListener('click', () => {
    if(scoreInfo.innerHTML >= 50) {
        boostInfo = 5;
        scoreInfo.innerHTML -= 25;
        for(let i=0;i<=1;i++){
            boostArray[i].style.display = 'none';
            boostArray[i+3].style.display = 'block';

        }
        appleIcon.style.filter = 'brightness(1.3) contrast(0.8) hue-rotate(30deg)';
    }
})
boostArray[2].addEventListener('click', () => {
    if(scoreInfo.innerHTML >= 200) {
        boostInfo = 10;
        scoreInfo.innerHTML -= 100;
        for(let i=0;i<=2;i++){
            boostArray[i].style.display = 'none';
            boostArray[i+3].style.display = 'block';

        }
        appleIcon.style.filter = 'brightness(1.4) contrast(0.7) hue-rotate(45deg)';
    }
})
boostArray[3].addEventListener('click', () => {
    if(scoreInfo.innerHTML >= 750) {
        boostInfo = 25;
        scoreInfo.innerHTML -= 600;
        for(let i=0;i<=3;i++){
            boostArray[i].style.display = 'none';
            boostArray[i+3].style.display = 'block';

        }
        appleIcon.setAttribute('src', 'IMG/apple2.png')
        appleIcon.style.filter = 'none';
    }
    
})
boostArray[4].addEventListener('click', () => {
    if(scoreInfo.innerHTML >= 1500) {
        boostInfo = 50;
        scoreInfo.innerHTML -= 1200;
        for(let i=0;i<=4;i++){
            boostArray[i].style.display = 'none';
            boostArray[i+3].style.display = 'block';

        }
        appleIcon.style.filter = 'brightness(1.1) contrast(0.99) hue-rotate(-19deg)';
        
    }
    
})
boostArray[5].addEventListener('click', () => {
    if(scoreInfo.innerHTML >= 4000) {
        boostInfo = 100;
        scoreInfo.innerHTML -= 3000;
        for(let i=0;i<=5;i++){
            boostArray[i].style.display = 'none';
            boostArray[i+3].style.display = 'block';
        }
        appleIcon.style.filter = 'brightness(1.3) contrast(0.8) hue-rotate(-30deg)';
        
    }
    
})
boostArray[6].addEventListener('click', () => {
    if(scoreInfo.innerHTML >= 7500) {
        boostInfo = 200;
        scoreInfo.innerHTML -= 5500;
        for(let i=0;i<=6;i++){
            boostArray[i].style.display = 'none';
            boostArray[i+3].style.display = 'block';
            
        }
        appleIcon.style.filter = 'brightness(1.4) contrast(0.7) hue-rotate(45deg)';
        
    }
    
})
boostArray[7].addEventListener('click', () => {
    if(scoreInfo.innerHTML >= 12500) {
        boostInfo = 400;
        scoreInfo.innerHTML -= 1000;
        for(let i=0;i<=7;i++){
            boostArray[i].style.display = 'none';
            boostArray[i+3].style.display = 'block';

        }
        appleIcon.setAttribute('src', 'IMG/apple3.png');
        appleIcon.style.filter = 'none';
    }
    
})
boostArray[8].addEventListener('click', () => {
    if(scoreInfo.innerHTML >= 20000) {
        boostInfo = 600;
        scoreInfo.innerHTML -= 15000;
        for(let i=0;i<=8;i++){
            boostArray[i].style.display = 'none';
            boostArray[i+3].style.display = 'block';
        }
        appleIcon.style.filter = 'brightness(1.1) contrast(0.99) hue-rotate(-19deg)';
        
    }
    
})
boostArray[9].addEventListener('click', () => {
    if(scoreInfo.innerHTML >= 50000) {
        boostInfo = 750;
        scoreInfo.innerHTML -= 40000;
        for(let i=0;i<=9;i++){
            boostArray[i].style.display = 'none';
            boostArray[i+3].style.display = 'block';
        }
        appleIcon.style.filter = 'brightness(1.3) contrast(0.8) hue-rotate(-30deg)';
    }
    
})
boostArray[10].addEventListener('click', () => {
    if(scoreInfo.innerHTML >= 100000) {
        boostInfo = 1000;
        scoreInfo.innerHTML -= 80000;
        for(let i=0;i<=10;i++){
            boostArray[i].style.display = 'none';
            boostArray[i+3].style.display = 'block';
        }
        appleIcon.style.filter = 'brightness(1.4) contrast(0.7) hue-rotate(45deg)';
    }

})
boostArray[11].addEventListener('click', () => {
    if(scoreInfo.innerHTML >= 250000) {
        boostInfo = 2000;
        scoreInfo.innerHTML -= 200000;
        for(let i=0;i<=11;i++){
            boostArray[i].style.display = 'none';
            boostArray[i+3].style.display = 'block';
        }
        appleIcon.setAttribute('src', 'IMG/apple4.png')
        appleIcon.style.filter = 'none';
    }

})
boostArray[12].addEventListener('click', () => {
    if(scoreInfo.innerHTML >= 500000) {
        boostInfo = 3500;
        scoreInfo.innerHTML -= 400000;
        for(let i=0;i<=12;i++){
            boostArray[i].style.display = 'none';
            boostArray[i+3].style.display = 'block';
        }
        appleIcon.style.filter = 'brightness(1.1) contrast(0.99) hue-rotate(-19deg)';
    }

})
boostArray[13].addEventListener('click', () => {
    if(scoreInfo.innerHTML >= 1000000) {
        boostInfo = 5000;
        scoreInfo.innerHTML -= 900000;
        for(let i=0;i<=13;i++){
            boostArray[i].style.display = 'none';
            boostArray[i+3].style.display = 'block';
        }
        appleIcon.style.filter = 'brightness(1.3) contrast(0.8) hue-rotate(-30deg)';
    }

})
boostArray[14].addEventListener('click', () => {
    if(scoreInfo.innerHTML >= 1750000) {
        boostInfo = 7500;
        scoreInfo.innerHTML -= 1500000;
        for(let i=0;i<=14;i++){
            boostArray[i].style.display = 'none';
            // boostArray[i+3].style.display = 'block';
        }
        appleIcon.style.filter = 'brightness(1.4) contrast(0.7) hue-rotate(45deg)';
    }

})
boostArray[15].addEventListener('click', () => {
    if(scoreInfo.innerHTML >= 2500000) {
        boostInfo = 10000;
        scoreInfo.innerHTML -= 200000;
        for(let i=0;i<=15;i++){
            boostArray[i].style.display = 'none';
            // boostArray[i+3].style.display = 'block';
        }
        appleIcon.setAttribute('src', 'IMG/apple5.png')
        appleIcon.style.filter = 'none';
    }

})
boostArray[16].addEventListener('click', () => {
    if(scoreInfo.innerHTML >= 4000000) {
        boostInfo = 15000;
        scoreInfo.innerHTML -= 3000000;
        for(let i=0;i<=16;i++){
            boostArray[i].style.display = 'none';
            // boostArray[i+3].style.display = 'block';
        }
        appleIcon.style.filter = 'brightness(1.1) contrast(0.99) hue-rotate(-19deg)';

    }

})