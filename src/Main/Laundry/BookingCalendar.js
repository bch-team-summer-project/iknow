import React from 'react';

// 
// ABANDONED
// 

let newDate = new Date();
/* let year = newDate.getFullYear(); //2021 */
let dayNumber = newDate.toString().slice(8, 10);//range: 01-last day of current month

let months = ['December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November'];
let monthNumber = newDate.getMonth(); //range: 0-11
let month = months[monthNumber]; //current month

let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let weekdayNumber = newDate.getDay(); //range: 0-6
let weekday = weekdays[weekdayNumber]; //current weekday


/* 
let [weekdayNumber1, weekdayNumber2, weekdayNumber3, weekdayNumber4, weekdayNumber5, 
  weekdayNumber6, weekdayNumber7, weekdayNumber8, weekdayNumber9, weekdayNumber10, weekdayNumber11, weekdayNumber12, weekdayNumber13, weekdayNumber14] = [weekdayNumber, weekdayNumber + 1, weekdayNumber + 2, weekdayNumber + 3, weekdayNumber + 4, weekdayNumber + 5, weekdayNumber + 6, weekdayNumber + 7, weekdayNumber + 8, weekdayNumber + 9, weekdayNumber + 10, weekdayNumber + 11, weekdayNumber + 12, weekdayNumber + 13, weekdayNumber + 14]; */ // 2 weeks, values = weekdays for 14 next days, including current day
/* let hourNow = new Date().getHours(); // 00 -> midnight, 15 -> 3 PM */

/* let days = {
  weekdayNumber1: {day: weekdays[weekdayNumber1 % 7],
  9: false, 10: false},
  weekdayNumber2: {day: weekdays[weekdayNumber2 % 7]},
  weekdayNumber3: {day: weekdays[weekdayNumber3 % 7]},
  weekdayNumber4: {day: weekdays[weekdayNumber4 % 7]},
  weekdayNumber5: {day: weekdays[weekdayNumber5 % 7]},
  weekdayNumber6: {day: weekdays[weekdayNumber6 % 7]},
  weekdayNumber7: {day: weekdays[weekdayNumber7 % 7]},
  weekdayNumber8: {day: weekdays[weekdayNumber8 % 7]},
  weekdayNumber9: {day: weekdays[weekdayNumber9 % 7]},
  weekdayNumber10: {day: weekdays[weekdayNumber10 % 7]},
  weekdayNumber11: {day: weekdays[weekdayNumber11 % 7]},
  weekdayNumber12: {day: weekdays[weekdayNumber12 % 7]},
  weekdayNumber13: {day: weekdays[weekdayNumber13 % 7]},
  weekdayNumber14: {day: weekdays[weekdayNumber14 % 7]}
}; */

 // console.log((year, hourNow, days) shut up, React notifier

/* let daysToDivs = []; // push div with
for (let [key, value] of Object.entries(days)) {
  daysToDivs.push(`<div className=${key}> ${value.day} </div>`)
} */

//console.log(Object.values(days))
//console.log(daysToDivs)

//{daysToDivs.map(obj => document.querySelector('.laundry-calendar-container').appendChild(obj))}  
export default function BookingCalendar() {

  return (
    <>
      <h2>Today is: {`  ${weekday},  ${month}      ${dayNumber}`}</h2>
      <div className="laundry-calendar-container">
      {/*daysToDivs.map(div =>{
        let divi = document.createElement('div');
        divi.innerHTML = div;
        document.body.appendChild(divi);
      })*/}
      </div>
    </>
  )
}