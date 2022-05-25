const newSaleSection = document.querySelector('.new-sale-section');
const closeButton = document.querySelector('#close-button');
const title = document.querySelector('#title');
const daysElement = document.querySelector('#days');
const hoursElement = document.querySelector('#hours');
const minutesElement = document.querySelector('#minutes');
const secondsElement = document.querySelector('#seconds');
//1seconds= 1000 milliseconds
const dayInMilliSeconds = 24*60*60*1000;
const hoursInMilliSeconds = 60*60*1000;
const minuteInMilliSeconds = 60*1000;
const secondsMilliSeconds = 1000;


function displayTime(){
    const currentDate = new Date();
    const futureDate = new Date(2022, 4, 31, 8, 13, 15);
    //console.log(currentDate)
    //console.log(futureDate)
    //title code
    let yearForTitle = futureDate.getFullYear();
    let monthNameForTitle = futureDate.toLocaleDateString(undefined,{month:'long'});
    let dayForTitle = futureDate.getDate();
    let weekdayNameForTitle = futureDate.toLocaleDateString(undefined,{weekday:'long'})
    let hoursForTitle = futureDate.getHours();
    let mintuesForTitle = futureDate.getMinutes();
    let secondsForTitle = futureDate.getSeconds();
    title.textContent =`
                    Computer sale ends on ${weekdayNameForTitle}
                    ${dayForTitle}
                    ${monthNameForTitle}
                    ${yearForTitle}
                    ${hoursForTitle}:${mintuesForTitle}:${secondsForTitle}
                    `;
    //title code end

    let remainingTime = futureDate.getTime() - currentDate.getTime()//get time milliseconds
    //console.log(remainingTime)

    let days = Math.floor(remainingTime/dayInMilliSeconds)

    let hours = Math.floor((remainingTime%dayInMilliSeconds) /hoursInMilliSeconds)

    let minutes= Math.floor((remainingTime%hoursInMilliSeconds) /minuteInMilliSeconds)

    let seconds = Math.floor((remainingTime%minuteInMilliSeconds)/ secondsMilliSeconds)

    if(days < 10){
        daysElement.textContent=`0${days}`;
    }else{
        daysElement.textContent= days;
    }
    if(hours < 10){
        hoursElement.textContent=`0${hours}`;
    }else{
        hoursElement.textContent= hours;
    }
    if(minutes < 10){
        minutesElement.textContent=`0${minutes}`;
    }else{
        minutesElement.textContent= minutes;
    }
    if(seconds < 10){
        secondsElement.textContent=`0${seconds}`;
    }else{
        secondsElement.textContent= seconds;
    }
    if(remainingTime <= 0){
        clearInterval(timer)
        daysElement.textContent ='00'
        hoursElement.textContent='00'
        minutesElement.textContent='00'
        secondsElement.textContent='00'
        title.textContent =`
                    Computer sale ended on ${weekdayNameForTitle}
                    ${dayForTitle}
                    ${monthNameForTitle}
                    ${yearForTitle}
                    ${hoursForTitle}:${mintuesForTitle}:${secondsForTitle}
                    `;
    }

}
const timer = setInterval(displayTime,1000)
displayTime();

closeButton.addEventListener('click',()=>{
    newSaleSection.style.display ='none';
})