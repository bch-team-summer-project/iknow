import React from 'react';

const Laundry = () => {
  return (
    <form action="find_landry.php">
      <label for="search_landry">Search address: </label>
      <input type="text" name="search_landry" id="search_laundry" value="search_laundry"></input>
      <button>Continue</button>
    </form>
  )
}

export default Laundry;