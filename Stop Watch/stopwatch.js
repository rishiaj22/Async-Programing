let [millisecond,seconds,minutes, hour] = [0,0,0,0];
let displayTime = document.querySelector("#numbers");
let stop = document.querySelector("#stopbtn");
let start = document.querySelector("#startbtn");
let reset = document.querySelector("#resetbtn");
let timer = null;

function watchWorking(){

    let h = hour > 0 ? (hour < 10 ? "0" + hour : hour) : "";
    let m = minutes > 0 ? (minutes < 10 ? "0" + minutes : minutes) : "";
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = millisecond < 10 ? "0" + millisecond : millisecond;

    millisecond++;
    if(h=="" && m==""){
        displayTime.innerText = `${s} : ${ms}`;
    }
    else{
        displayTime.innerText = `${h} : ${m} : ${s} : ${ms}`;
    };

    if(millisecond==100){
        millisecond =0;
        seconds++;
        if(seconds==60){
            seconds=0;
            minutes++;
            if(minutes==60){
                minutes=0;
                hour++;
            }
        }
    }
    
};

function Start(){

    if(timer!= null){
        clearInterval(timer);
    };
    timer = setInterval(watchWorking,10);
};

function Stop(){
    clearInterval(timer);
};

function Reset(){
    clearInterval(timer);
    [millisecond,seconds,minutes, hour] = [0,0,0,0];
    displayTime.innerText = "";


}

// Event Listners
start.addEventListener('click',function(){
    Start();
});
stop.addEventListener('click',function(){
    Stop();
});
reset.addEventListener('click',function(){
    Reset();
})