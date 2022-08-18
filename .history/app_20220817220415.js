//jshin esversion:7
const express=require("express");
const bodyParser= require("body-parser");
let ejs = require('ejs');
const router = express.Router();
module.exports=router;

const app= express();
app.use("view-engine","ejs");


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
    res.render("list", { kindOfDay:day});
});

app.listen(3010,function(){
    console.log("Server on port 3010");

});