//jshin esversion:7
const express=require("express");
const bodyParser= require("body-parser");

const app= express();

//app.set('view engine',ejs);

app.get("/",function(req,res){
    
    var today=new Date();
    var currentDay=today.getDate();
    if(currentDay===6 || currentDay===0){
        res.sendFile(__dirname + "/weekend.html");

    }
    else{
        res.sendFile(__dirname + "/weekday.html");
        //console.log(__dirname + "/index.html");
        //res.write("<p>I have to work!</p>"); enviar varios textos
        //res.send();
    }
});

app.listen(3010,function(){
    console.log("Server on port 3010");

});