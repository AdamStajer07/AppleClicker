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
    x1000Boost
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
        appleIcon.setAttribute('src', 'IMG/apple3.png')
        
    }
    
})
boostArray[8].addEventListener('click', () => {
    if(scoreInfo.innerHTML >= 20000) {
        boostInfo = 600;
        scoreInfo.innerHTML -= 15000;
        for(let i=0;i<=8;i++){
            boostArray[i].style.display = 'none';
            // boostArray[i+3].style.display = 'block';
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
            // boostArray[i+3].style.display = 'block';
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
            // boostArray[i+3].style.display = 'block';
        }
        appleIcon.style.filter = 'brightness(1.4) contrast(0.7) hue-rotate(45deg)';
    }

})