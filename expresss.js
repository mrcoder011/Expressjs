/*const express = require("express");
const app = express(); // app is an object

let port = 3000;
app.listen(port, () => { // listen makes the web server listen
    console.log(`App is listening on port ${port}`);
});

// Root path
app.get("/", (req, res) => {
    res.send("You contacted the root path");
});

// Apple path
app.get("/apple", (req, res) => {
    res.send("You contacted the apple path");
});

// Orange path
app.get("/orange", (req, res) => {
    res.send("You contacted the orange path");
});

// Search path with query parameter
app.get("/search", (req, res) => {
    let { q } = req.query; // Extract the query parameter 'q'
    if (q) {
        res.send(`<h1>Search result for query: ${q}</h1>`);
    } else {
        res.send("<h1>No search query provided</h1>");
    }
});*/