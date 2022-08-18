//jshin esversion:7
const express=require("express");
const bodyParser= require("body-parser");
const ejs = require('ejs');


const app= express();
app.use('view-engine','ejs');


app.get("/",function(req,res){
    
    var today=new Date();
    var currentDay=today.getDate();
    var day="";
    if(currentDay===6 || currentDay===0){
        //res.render('index')
        day="weekend";

    }
    else{
        day="weekday";
        //res.sendFile(__dirname + "/weekday.html");
        //console.log(__dirname + "/index.html");
        //res.write("<p>I have to work!</p>"); enviar varios textos
        //res.send();
    }
    res.render(__dirname+"/list.js", { kindOfDay:day});
});

app.listen(3000,function(){
    console.log("Server on port 3000");

});