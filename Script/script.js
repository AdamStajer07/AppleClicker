const appleIcon = document.querySelector('.apple__img');
let scoreInfo = document.querySelector('.apple__score');

appleIcon.addEventListener('click', () => {
    scoreInfo.innerHTML++;
    console.log("add point - work");

})