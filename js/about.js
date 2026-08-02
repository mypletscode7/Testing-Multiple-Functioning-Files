const text =
document.getElementById("about-text");


const words =
text.innerHTML.split(" ");


text.innerHTML="";


words.forEach((word,index)=>{


let span=document.createElement("span");


span.innerHTML=word+" ";


span.style.opacity=0;


span.style.display="inline-block";


span.style.animation=
`wordAppear 0.5s forwards ${index*0.08}s`;



text.appendChild(span);


});
