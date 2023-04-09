import React from 'react';
import HotelOccupancyForm from './HotelOccupancyForm';
import DeviceDataForm from './DeviceDataForm';


function HotelOperationsDashboard() {
  return (
    <div>
      <h1>Hotel Operations Dashboard</h1>
      <h2>Hotel Occupancy Form</h2>
      <HotelOccupancyForm />
      <h2>Device Data Form</h2>
      <DeviceDataForm />
    </div>
  );
}

export default HotelOperationsDashboard;
