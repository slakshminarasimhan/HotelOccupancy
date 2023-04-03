import React, { useState } from 'react';
import './HotelOccupancyForm.css';

const HotelOccupancyForm = () => {
  const [roomNumber, setRoomNumber] = useState('');
  const [isOccupied, setIsOccupied] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const date = new Date().toISOString().slice(0,10);
    const formData = { date, roomNumber, isOccupied };
    try {
      const response = await fetch('http://localhost:4000/submit-form-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setRoomNumber('');
        setIsOccupied('');
        alert('Form submitted successfully!');
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error(error);
      alert('Failed to submit form');
    }
  };

  return (
    <div className="form-container">
      <h2>Hotel Occupancy Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="roomNumber">Room Number</label>
          <input
            type="text"
            id="roomNumber"
            value={roomNumber}
            onChange={(e) => setRoomNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="isOccupied">Occupied (Y/N)</label>
          <input
            type="text"
            id="isOccupied"
            value={isOccupied}
            onChange={(e) => setIsOccupied(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default HotelOccupancyForm;
