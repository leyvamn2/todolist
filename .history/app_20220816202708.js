//jshin esversion:7
const express=require("express");
const bodyParser= require("body-parser");

const app= express;

app.get("/",function(req,res){
    res.send("hello");
});

app.listen(3000,function(){
    console.log("Server on port 3000");

});