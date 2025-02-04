const express = require("express");
const app = express();
const path = require("path");
const port = 8080  ;
console.dir(app);

// Set the view engine to EJS
//app.set("view engine", "ejs");
//app.set("view", path.join(___dirname,"/view"));


// Home route
app.use( (req, res) => {
    // res.render("home.ejs"); // Rendering the 'home.ejs' template
    console.log(req);
    res.send("this is a basic repsond ")

});

// Start the server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
 app