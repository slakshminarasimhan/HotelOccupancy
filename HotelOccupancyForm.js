import React, { useState } from 'react';
import axios from 'axios';

const HotelOccupancyForm = () => {
  const [roomNumber, setRoomNumber] = useState('');
  const [occupied, setOccupied] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      roomNumber,
      occupied
    };

    axios.post('http://localhost:4000/roomdata', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        setRoomNumber('');
        setOccupied('');
        alert('Data submitted successfully');
      })
      .catch((error) => {
        console.error(error);
        alert('Error submitting data');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Room Number:
        <input
          type="text"
          value={roomNumber}
          onChange={(event) => setRoomNumber(event.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Occupied (Y/N):
        <input
          type="text"
          value={occupied}
          onChange={(event) => setOccupied(event.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default HotelOccupancyForm;
