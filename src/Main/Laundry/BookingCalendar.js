import React from 'react';

// ehh... will write everything from ground - up I guess.. ugh.. lets see where it is after N hours.

let newDate = new Date();
let year = newDate.getFullYear(); // 2021
let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let weekday = [weekdays][newDate.getDay()] // current weekday
let weekdayNumber = newDate.getDay();
let [weekdayNumber1, weekdayNumber2, weekdayNumber3, weekdayNumber4, weekdayNumber5, 
  weekdayNumber6, weekdayNumber7, weekdayNumber8, weekdayNumber9, weekdayNumber10, weekdayNumber11, weekdayNumber12, weekdayNumber13] = [weekdayNumber, weekdayNumber + 1, weekdayNumber + 2, weekdayNumber + 3, weekdayNumber + 4, weekdayNumber + 5, weekdayNumber + 6, weekdayNumber + 7, weekdayNumber + 8, weekdayNumber + 9, weekdayNumber + 10, weekdayNumber + 11, weekdayNumber + 12, weekdayNumber + 13]; // 2 weeks, values = 
let hourNow = new Date().getHours(); // 00 -> midnight, 15 -> 3 PM

let days = {
  weekdayNumber1: {day: weekdays[weekdayNumber1 % 7]},
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
};
console.log(Object.values(days))
/* this.statuz = {
  days: {
    weekdayNumber2: {day: weekdays[weekdayNumber % 6]},
    weekdayNumber: {},
    weekdayNumber: {},
    weekdayNumber: {},
    weekdayNumber: {},
    weekdayNumber: {},
    weekdayNumber: {},
    weekdayNumber: {},
    weekdayNumber: {},
    weekdayNumber: {},
    weekdayNumber: {},
  
  }
} */
export default function BookingCalendar() {

  return (
    <>
    { 
      




    }
    </>
  )
}