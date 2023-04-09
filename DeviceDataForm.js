import React, { useState } from 'react';
import axios from 'axios';

const DeviceDataForm = () => {
  const [deviceId, setDeviceId] = useState('');
  const [temperature, setTemperature] = useState('');
  const [electricity, setElectricity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      deviceId,
      temperature,
      electricity
    };

    axios.post('http://localhost:4000/devicedata', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        setDeviceId('');
        setTemperature('');
        setElectricity('');
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
        Device ID:
        <input
          type="text"
          value={deviceId}
          onChange={(event) => setDeviceId(event.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Temperature:
        <input
          type="text"
          value={temperature}
          onChange={(event) => setTemperature(event.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Electricity:
        <input
          type="text"
          value={electricity}
          onChange={(event) => setElectricity(event.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default DeviceDataForm;
