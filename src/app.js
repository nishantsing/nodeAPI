const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello everyone');
})

app.post('/', (req, res) => {
    res.send('This is a post request');
})

app.listen(PORT, () => {
    console.log('Server Started');
})

// You have to restart the server every time there is a change in server files.
// To avoid restart use nodemon.
// You can install it as dev dependencies - npm i -D nodemon
// nodemon src/app.js
// or without installing use npx nodemon src/app.js as script
