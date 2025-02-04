const express = require("express");
const app = express();
const port = 8080;

// Set the view engine to EJS (if you plan to use EJS in the future)
const path = require("path");
// app.set("view engine", "ejs");
 app.set("views", path.join(__dirname, "/views")); // yeh islie hota h taaki khin pr bhi jakr hm iska output run krwa ske
app.set("view engine", "ejs");

// Home route
app.get("/", (req, res) => {
   res.render("home.ejs");
     });
     app.get("/rolldice", (req, res) => {
        let diceval =  Math.floor(Math.random()*6)+1;
        res.render("rolldice", { diceval});
          });
          app.get("/ig/:username", (req, res) => {
            const followers = ["adam","bob","steve","abc"]
            let {username} = req.params;
            res.render("instagram.ejs" ,{username , followers});
              });

// Start the server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
 