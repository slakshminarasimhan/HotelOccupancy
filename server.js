const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.post('/submit-form-data', (req, res) => {
  const { date, roomNumber, isOccupied } = req.body;
  const formData = { date, roomNumber, isOccupied };

  fs.readFile('roomdata.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Failed to read file');
      return;
    }

    let roomData = [];
    if (data) {
      roomData = JSON.parse(data);
    }

    roomData.push(formData);

    fs.writeFile('roomdata.json', JSON.stringify(roomData, null, 2), (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Failed to write file');
        return;
      }

      res.status(200).send('Form data submitted successfully!');
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
