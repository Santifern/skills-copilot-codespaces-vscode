// Create web server
const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
 res.send('<h1>Welcome to My Web Server!</h1><p>Thanks for visiting.</p>');
});

app.listen(port, () => {
 console.log(`Server running at http://localhost:${port}/`);
});