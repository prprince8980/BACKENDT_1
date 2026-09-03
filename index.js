const express = require("express");
require("dotenv").config();

const app = express();


app.get("/",(req,res)=>{

    res.send("hellow world");

})

app.get("/twitter",(req,res)=>{

    res.send("my twitter");
})

app.get("/login",(req,res)=>{
    res.send("<h1>jhjsdhsj</h1>")
})


app.get("/pr",(req,res)=>{
    res.send("<h2>jhsjdsjd</h2>")
})

app.listen(process.env.PORT,()=>{
    console.log(`run on port ${process.env.PORT}`)
});
