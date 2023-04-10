const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/submit-form', (req, res) => {
  const data = req.body;
  const jsonData = JSON.stringify(data);

  fs.writeFile('/Users/saidayashankar/Desktop/uiux/users/newusers.json', jsonData, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving data to file');
    } else {
      console.log('Data saved to file');
      res.status(200).send('Data saved to file');
    }
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
