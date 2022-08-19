//jshin esversion:7
const express=require("express");
const bodyParser= require("body-parser");



const app= express();

app.set("view engine","ejs");
app.set(bodyParser.urlencoded({extended:True}));

app.get("/",function(req,res){
    
    var today=new Date();
    var options={
        weekday:"long",
        day:"numeric",
        month: "long"
    };
    var currentDay=today.getDay();
    
    var day=today.toLocaleDateString("en-US",options);
    if(currentDay===6 || currentDay===0){
        //res.render('index'); sirve para eviar un archivo html
        
    }
    else{
        //day="weekday";
        //res.sendFile(__dirname + "/weekday.html");
        //console.log(__dirname + "/index.html");
        //res.write("<p>I have to work!</p>"); enviar varios textos
        //res.send(); esto sirve para crear directamente html
    }

    //day=days[currentDay];
   res.render("list.ejs", { kindOfDay:day});
});
app.post("/",function(req,res){
    
    req.body.newItem;
});
app.listen(3001,function(){
    console.log("Server on port 3000");

});