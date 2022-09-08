const hamburger=document.querySelector(".hamburger");
const navul=document.querySelector(".navul");
const header=document.querySelector(".heada")

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navul.classList.toggle("active");
    header.classList.toggle("active");
})