import React from 'react';
import './frontpage.css';
import BookingCalendar from './BookingCalendar';

const Laundry = () => {
  return (
    <div id="laundry_frontpage_container">
    <form action="find_landry.php">
      <label htmlFor="search_landry"><h1>Search laundry address:</h1></label>
      <input type="text" name="search_landry" id="search_laundry"></input>
      <button onClick={e => {
        e.preventDefault();
        document.location.href = document.location.origin + '/laundry/calendar';
      }}>
      Continue</button>
      <BookingCalendar /> {//test prps
                          }
    </form>
    </div>
  )
}

export default Laundry;