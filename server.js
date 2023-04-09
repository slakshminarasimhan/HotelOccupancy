const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 4000;

app.post('/roomdata', (req, res) => {
  const { date, roomNumber, occupied } = req.body;
  const data = { date, roomNumber, occupied };
  fs.readFile('./roomdata.json', (err, jsonString) => {
    if (err) {
      console.log('Error reading file:', err);
      return res.status(500).send('Error reading file');
    }

    let jsonData = jsonString.length > 0 ? JSON.parse(jsonString) : [];

    jsonData.push(data);

    fs.writeFile('./roomdata.json', JSON.stringify(jsonData), (err) => {
      if (err) {
        console.log('Error writing file:', err);
        return res.status(500).send('Error writing file');
      }

      console.log('Data written to file');
      return res.status(200).send('Data written to file');
    });
  });
});

app.post('/devicedata', (req, res) => {
  const { date, deviceId, temperature, electricity } = req.body;
  const data = { date, deviceId, temperature, electricity };
  fs.readFile('./devicedata.json', (err, jsonString) => {
    if (err) {
      console.log('Error reading file:', err);
      return res.status(500).send('Error reading file');
    }

    let jsonData = jsonString.length > 0 ? JSON.parse(jsonString) : [];

    jsonData.push(data);

    fs.writeFile('./devicedata.json', JSON.stringify(jsonData), (err) => {
      if (err) {
        console.log('Error writing file:', err);
        return res.status(500).send('Error writing file');
      }

      console.log('Data written to file');
      return res.status(200).send('Data written to file');
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
