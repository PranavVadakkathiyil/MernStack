const express = require("express")
const path = require("path")
const app = express();
const port = 4000;
app.get("/Home",(req,res)=>{
    res.sendFile(path.join(__dirname + "/index.html"));
})
app.post("/api",(req,res)=>{
    res.send("<h1>Done</h1>")
    console.log(req.body.name)
})
app.get("/Contact",(req,res)=>{
    res.send("<h1>Contact page</h1>")
})
app.get("/Service",(req,res)=>{
    res.send("<h1>Service</h1>")
})
app.get("/Product",(req,res)=>{
    res.send("<h1>Product</h1>")
})

app.listen(port,(req,res)=>{
    console.log(`server runing on : ${port}`)
})