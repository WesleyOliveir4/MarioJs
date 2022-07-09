const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const gameOverBackground = document.querySelector('.Game-Over-background');

const jump = () =>{
    mario.classList.add('jump');
    setTimeout(() => {

        mario.classList.remove('jump');

    },500)
}

const loop = setInterval(()=>{

    const pipePosition = pipe.offsetLeft;
    const cloudsPosition = clouds.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

        pipe.style.animation = 'none';
        pipe.style.left= `${pipePosition}px`;

        clouds.style.animation = 'none';
        clouds.style.left= `${cloudsPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom= `${marioPosition}px`;

        mario.src = './Images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';
        
        gameOverBackground.setAttribute('style', 'visibility:visible')

        clearInterval(loop);
    }

},10)

document.addEventListener('keydown', jump);
