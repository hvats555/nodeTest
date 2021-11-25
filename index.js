const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>I am the root page</h1>');
}); 

app.get('/blog', (req, res) => {
    res.send('<h1>I am blog page</h1>');
}); 

app.get('/dev', (req, res) => {
    res.send('<h1>I am a dev page</h1>');
}); 

// new dev comment

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});