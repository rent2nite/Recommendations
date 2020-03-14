const express = require('express');
const path = require('path');
const db = require('../db/index.js');

const app = express();
const port = 3030;

app.use(express.static(path.join(__dirname, '../client/dist')));

// app.get('/', (req, res) => res.send('Hello World!'));
app.get('/api/recommendations', (req, res) => {
  db.findProperty(0, (err, foundProp) => {
    if (err) {
      console.log('err in server get');
      throw err;
    } else {
      res.send(foundProp);
    }
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
