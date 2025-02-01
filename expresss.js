const express = require("express");
const app = express(); // app is an object

let port = 8080;
app.listen(port, () => { // listen makes the web server listen
    console.log(`App is listening on port ${port}`);
});
/// req ad res  request hi create krta h 
 
app.use((req,res)=>{
    console.log(req);
});
