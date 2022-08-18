//jshin esversion:7
const express=require("express");
const bodyParser= require("body-parser");

const app= express();

app.get("/",function(req,res){
    res.send("hello");
    var today=new Date();
    if(today.getDay()==6 || today.getDay()===0){
        res.send("yay is the weekend");

    }
    else{
        res.send("booo");
    }
});

app.listen(3000,function(){
    console.log("Server on port 3000");

});