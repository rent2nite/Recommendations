const express = require('express');
const path = require('path');

const app = express();
const port = 3030;

app.use(express.static(path.join(__dirname, '../client/dist')));

// app.get('/', (req, res) => res.send('Hello World!'));
app.get('/api/recommendations', (req, res) => {});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
