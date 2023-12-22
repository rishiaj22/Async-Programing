const slider = document.querySelectorAll(".slideImg");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

var count = 0;
var interval = null;

// To arrange image in line
slider.forEach((slide,index) => {
    slide.style.left = `${index * 100}%`;
});

// Function for slide using buttons
let slideBtn = ()=>{
    slider.forEach((slide)=>{
        slide.style.transform = `translateX(-${count *100}%)`;
    })
};

// Setting eventListener to the buttons
next.addEventListener('click',function(){
    count++;
    slideBtn();
});
prev.addEventListener('click',function(){
    count--;
    slideBtn();
})
start.addEventListener('click',function(){
    interval = setInterval( ()=> {
        count++;
        slideBtn();
    }, 2000);
});
stop.addEventListener('click',function(){
    clearInterval(interval);
});