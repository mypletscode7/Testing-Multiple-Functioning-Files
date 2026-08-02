const button = document.getElementById("hero-button");


let clicked = false;


button.addEventListener("click",()=>{


if(clicked) return;


clicked=true;



createConfetti();



setTimeout(()=>{


window.location.href="resources.html";


},500);



});





function createConfetti(){


for(let i=0;i<40;i++){


let particle=document.createElement("span");


particle.className="confetti";


particle.style.left=Math.random()*100+"vw";


particle.style.top="50%";


particle.style.background=
[
"#FF4D6D",
"#FFD23F",
"#39D6C0",
"#8B5CF6"
][Math.floor(Math.random()*4)];



document.body.appendChild(particle);



setTimeout(()=>{

particle.remove();

},500);



}


}
