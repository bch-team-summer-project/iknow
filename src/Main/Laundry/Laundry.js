import React from 'react';
import './frontpage.css';
import BookingCalendar from './BookingCalendar';

const Laundry = () => {
  return (
    <form action="find_landry.php">
      <label htmlFor="search_landry"><h1>Search address:</h1></label>
      <input type="text" name="search_landry" id="search_laundry"></input>
      <button>Continue</button>
      <BookingCalendar />
    </form>
  )
}

export default Laundry;