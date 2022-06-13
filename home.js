const headerTag = document.querySelector("header");
const navTag = document.querySelectorAll("header .navButton a");
const bodyTag = document.querySelector("body");
const containerTag = document.querySelector(".container");
 
console.log(navTag);


// 1. 스크롤된 양이 movelogo bottom 보다 크면 스타일 변경(큰 거에서 작은 걸로), 
//movelogo bottom 만큼 container 밑으로 밀리게
// 2. 그렇지 않으면 큰거로
const movelogoTag = headerTag.querySelector(".movelogo");

console.log(movelogoTag);

document.addEventListener("scroll", function(){
  const containerTop = containerTag.getBoundingClientRect().top;
  const pixels = window.scrollY;
  console.log(pixels);


  if(pixels < containerTop ){

    movelogoTag.style.transform = `scale(${9})`

  }else{

    movelogoTag.style.transform = `scale(${1})`
    movelogoTag.style.transition = "all .3s ease"
  }
  
  
})



document.addEventListener("scroll", function(){

  const pixeled = window.scrollY;

  if(pixeled >= headerTag.getBoundingClientRect().height){

    headerTag.classList.add("down");
  }  else{
    headerTag.classList.remove("down");
  }
})

document.addEventListener("scroll", function(){

  const pixeled = window.scrollY;

  if(pixeled >= headerTag.getBoundingClientRect().height){

    headerTag.classList.add("down");
  }  else{
    headerTag.classList.remove("down");
  }
})





const animatedTags = document.querySelectorAll("h2, h3, p, section img,a.button")
animatedTags.forEach(tag => {
    tag.style.opacity = 0
})

document.addEventListener("scroll", function () {

    let delay = 0.25;
    animatedTags.forEach(tag => {
        const tagTop = tag.getBoundingClientRect().top;
        const tagBottom = tag.getBoundingClientRect().bottom;

        if (tagTop < window.innerHeight && tagBottom > 0) {
            tag.style.animation = `fadeIn .8s ${delay}s both`;
            delay += 0.25;
        } else {
            tag.style.animation = "0";
        }
    })
})
