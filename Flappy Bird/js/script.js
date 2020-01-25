/**
 * Flappy Bird v 1.0
 * made by Lub4ikChe 
 * through inspiration by Code Explained	
 */

//get the canvas
let cvs = document.querySelector('#canvas');
let ctx = cvs.getContext('2d');

//imgas

let bird = new Image();
let bg = new Image();
let fg = new Image();
let pipeTop = new Image();
let pipeBottom = new Image();

//upload imgages
bird.src = 'imgs/bird.png';
bg.src = 'imgs/bg.png';
fg.src = 'imgs/fg.png';
pipeTop.src = 'imgs/pipeTop.png';
pipeBottom.src = 'imgs/pipeBottom.png';


//audio
let fly = new Audio();
let score_sound = new Audio();

//upload audio files
fly.src = 'audio/fly.mp3';
score_sound.src = 'audio/score.mp3';

// gap
let gap = 90;

//bird position
let birdX = 5;
let birdY = 150;

// gravitation
let grav = 15;

//scrores
let score = 0;


//pipes
let pipes = [{
    x: cvs.width,
    y: 0,
},];


//functions


//main function
function gameStart() {

    //draw background
    ctx.drawImage(bg, 0, 0);

    //draw fontground
    ctx.drawImage(fg, 0, cvs.height - fg.height);

    //draw bird
    ctx.drawImage(bird, birdX, birdY);

    //draw pipes
    for (let i = 0; i < pipes.length; i++) {
        //draw pipes
        ctx.drawImage(pipeTop, pipes[i].x, pipes[i].y);
        ctx.drawImage(pipeBottom, pipes[i].x, pipes[i].y + pipeTop.height + gap);

        //pipes' move
        pipes[i].x -= 5;

        //add new pipes
        if (pipes[i].x == 113) {
            pipes.push({
                x: cvs.width,
                y: Math.floor(Math.random() * pipeTop.height) - pipeTop.height,
            });
        }

        //delete past pipes in order to save memory
        if (pipes.length > 10) {
            pipes.shift();
        }

        //collision all options
        if (birdX + bird.width >= pipes[i].x &&
            birdX <= pipes[i].x + pipeTop.width &&
            (birdY <= pipes[i].y + pipeTop.height
                || birdY + bird.height >= pipes[i].y + pipeTop.height + gap)
            || birdY + bird.height >= cvs.height - fg.height) {
            location.reload();
        }

        //score
        if (pipes[i].x == -2) {
            score++;
            score_sound.play();
        }

    }

    //gravitation
    birdY += grav;

    //text == "score"
    ctx.fillStyle = 'black';
    ctx.font = '24px Vernada';
    ctx.fillText('Score ' + score, 10, cvs.height - 20);


}

//move the bird function
document.onkeydown = () => {
    birdY -= 35;
    fly.play();
}

//start main function after uploaded all images
pipeBottom.onload = setInterval(() => {
    gameStart();
}, 100);

