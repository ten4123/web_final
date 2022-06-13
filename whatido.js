const headerTag = document.querySelector("header");
const navTag = document.querySelectorAll("header .navButton a");
const bodyTag = document.querySelector("body");
const containerTag = document.querySelector(".container");
 
console.log(navTag);




document.addEventListener("scroll", function(){

  const pixeled = window.scrollY;

  if(pixeled >= headerTag.getBoundingClientRect().height){

    headerTag.classList.add("down");
  }  else{
    headerTag.classList.remove("down");
  }
})
