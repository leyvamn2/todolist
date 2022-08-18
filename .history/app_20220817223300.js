//jshin esversion:7
const express=require("express");
const bodyParser= require("body-parser");



const app= express();
var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

app.set("view engine","ejs");
app.get("/",function(req,res){
    
    var today=new Date();
    var currentDay=today.getDate();
    var day="";
  
    if(currentDay===6 || currentDay===0){
        //res.render('index');
        
    }
    else{
        //day="weekday";
        //res.sendFile(__dirname + "/weekday.html");
        //console.log(__dirname + "/index.html");
        //res.write("<p>I have to work!</p>"); enviar varios textos
        //res.send();
    }

    day=days[currentDay];

    console.log(day);

   res.render("list.ejs", { kindOfDay:day});
});

app.listen(3001,function(){
    console.log("Server on port 3000");

});