const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.post('/submit-form-data', (req, res) => {
  const formData = req.body;
  const json = JSON.stringify(formData, null, 2);
  fs.writeFile('roomdata.json', json, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error writing file');
    } else {
      console.log('Data written to file');
      res.send('Data written to file');
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
