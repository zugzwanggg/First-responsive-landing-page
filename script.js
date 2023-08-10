let menuBtn = document.querySelector(".menu-btn");
const menuBar = document.querySelector(".menu-nav")
const learnBtn = document.querySelector(".learn-more__btn")


menuBtn.addEventListener('click', function(){
  this.classList.toggle("open")
  menuBar.classList.toggle("open")
})

learnBtn.addEventListener('click' , ()=>alert("Ansar doesn't put a function into this button!"));