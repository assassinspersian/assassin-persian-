function login(){

window.location.href="chat.html";

}



function saveProfile(){

let name =
document.getElementById("username").value;


let bio =
document.getElementById("about").value;



localStorage.setItem("name",name);

localStorage.setItem("bio",bio);



alert("پروفایل ذخیره شد");

}



window.onload=function(){

let n=localStorage.getItem("name");

let b=localStorage.getItem("bio");


if(n){

let name=document.getElementById("name");

if(name)
name.innerHTML=n;

}


if(b){

let bio=document.getElementById("bio");

if(bio)
bio.innerHTML=b;

}

}



function darkMode(){

document.body.classList.toggle("light");

}
