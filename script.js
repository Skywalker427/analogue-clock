const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

const CIRCLE = 360,
      SECPOS = 60,
      MINPOS = 60,
      HRPOS = 12;

let timeToDegrees = (unitsInCurrentTime,totalUnits) => (unitsInCurrentTime*CIRCLE)/totalUnits;

let updateClock = (currentSystemTime)=>{
    

    let hour = currentSystemTime.getHours();
    let minute = currentSystemTime.getMinutes();
    let second = currentSystemTime.getSeconds();
    console.log(minute)
    
    let hrPosition = timeToDegrees(hour,HRPOS) + (minute *(360/60)/12), 
        minPosition =timeToDegrees(minute,MINPOS) + (second *(360/60)/60),
        secPosition = timeToDegrees(second, SECPOS);
    
    HOURHAND.style.transform = `rotate(${hrPosition}deg)`;
    MINUTEHAND.style.transform = `rotate(${minPosition}deg)`;
    SECONDHAND.style.transform = `rotate(${secPosition}deg)`;
} 

setInterval(()=>{

    updateClock(new Date());
    
   

}, 1000)
