function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// varible
let time=0;
let timerId=0;
let timerOut= true;
let card ;

//Elements
// const start = document.querySelector("")
const reset = document.querySelector("#restart");
const timer= document.querySelector("#timer");

const initClock = ()=>{
    timerOut= false;
    timerId= setInterval( () => {
        time++;
        timerCount();
    }, 1000 );
};

const timerCount = () => {
    const min = Math.floor(time/60);
    const sec = time % 60;
    if(sec<10){
        timer.innerHTML = `${min}:0${sec}`;
    } else{
        timer.innerHTML = `${min} :${sec}`;
        
    }
}

const stopClock = () => {
    clearInterval(timerId);
};

reset.addEventListener("click",function () {
    stopClock();
    timerOut= true;
    time=0;
    timerCount();
});
//functions




//-----------------------------------------------------------------
// if match and open 
// if(event.target.classList.contains("match") || event.target.classList.contains("open") ){
//     console.log(event.target);
// }


// event listeners


//if contains match or open already **
const deck = document.querySelector("#deck")
deck.addEventListener("click",(event)=>{
    if(event.target.classList.contains("match")){
        console.log(event.target); 
    }
    else if(event.target.classList.contains("open") ){
        console.log(event.target);
    }
    else if(event.target.classList.contains("card")){
    console.log(event.target);
    event.target.classList.add("open")
        if (timerOut){
        initClock();
    }
    console.log(event.target);
    card = event.target;}
});




//init clock like the task if the card is correct

// const cards = document.querySelectorAll(".card")
// for (let card of cards){
//     cards.addEventListener("click",(event)=>{
//         console.log(event.target);
//         event.target.classList.add(".open")
//         console.log(event.target);
//     })
// }