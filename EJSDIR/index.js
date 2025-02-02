const express = require("express");
const app = express();
const port = 8080;

// Set the view engine to EJS
app.set("view engine", "ejs"); // Corrected typo: "view engie" -> "view engine"

// Home route
app.get("/", (req, res) => {
    res.render("view.ejs"); // Corrected typo: req.send -> res.send
});

// Start the server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});