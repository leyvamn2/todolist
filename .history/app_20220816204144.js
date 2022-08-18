//jshin esversion:7
const express=require("express");
const bodyParser= require("body-parser");

const app= express();

app.get("/",function(req,res){
    
    var today=new Date();
    var currentDay=today.getDate();
    if(currentDay===6 || currentDay===0){
        res.send("<h1>yay is the weekend</h1>");

    }
    else{
        res.send("<h1>booo</h1>");
    }
});

app.listen(3000,function(){
    console.log("Server on port 3000");

});