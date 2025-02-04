const express = require("express");
const app = express();
const path = require("path");
const port = 8080  ;

// Set the view engine to EJS
app.set("view engine", "ejs");
app.set("view", path.join(___dirname,"/view"));


// Home route
app.get("/", (req, res) => {
    res.render("home.ejs"); // Rendering the 'home.ejs' template
});

// Start the server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
 app