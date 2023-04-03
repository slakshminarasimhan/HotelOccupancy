import React, { useState } from 'react';

const HotelOccupancyForm = () => {
  const [roomNumber, setRoomNumber] = useState('');
  const [isOccupied, setIsOccupied] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      roomNumber: roomNumber,
      isOccupied: isOccupied,
    };
    try {
      const response = await fetch('http://localhost:4000/submit-form-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setRoomNumber('');
        setIsOccupied('');
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="roomNumber">Room Number:</label>
        <input
          type="text"
          id="roomNumber"
          value={roomNumber}
          onChange={(event) => setRoomNumber(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="isOccupied">Occupied (Y/N):</label>
        <input
          type="text"
          id="isOccupied"
          value={isOccupied}
          onChange={(event) => setIsOccupied(event.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default HotelOccupancyForm;
