const c4 =  new Audio("sounds/C4.mp3");


const play = (audio) => {
    const clone = audio.cloneNode();
    clone.play();
};
const C4key = document.querySelector(".C4-key");

const playC4  = () => {
  play(c4);
    C4key.classList.add("active");
};
setTimeout(() => {
    c4.classList.remove("active");
}, 200);

C4key.addEventListener("click" , playC4);

var up = document.getElementById("up");
up.onclick = function(){
    console.log("arrowup")
    inputDir.x = 0;
    inputDir.y = -1;
    }

var down = document.getElementById("down");
down.onclick = function(){
    console.log("arrowdown")
    inputDir.x = 0;
    inputDir.y = 1;
    }























