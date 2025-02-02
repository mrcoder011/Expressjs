const express = require("express");
const app = express(); // app is an object

let port = 8080;
app.listen(port, () => { // listen makes the web server listen
    console.log(`App is listening on port ${port}`);
});
/// req ad res  request hi create krta h 
app.get("/", (req,res)=>{
    res.send("you contacted root path");
})
app.get("/apple", (req,res)=>{
    res.send("you contacted apple path");
})
app.get("/orange", (req,res)=>{
    res.send("you contacted orange path");
})
app.get("*", (req,res)=>{
    res.send("this page is not exist");
})

app.use((req,res)=>{
    console.log(req);
    let code = "<h1>MR CODER</h1>"
    res.send(code);
});
