//jshin esversion:7
const express=require("express");
const bodyParser= require("body-parser");



const app= express();
var items=[];

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({ extended: false }));
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

    res.render("list.ejs", { kindOfDay:day,  newListItems: items});
});

app.post("/",function(req,res){
    var item=req.body.newItem;
    items.push(item);
    
    res.redirect("/");
    // res.render("list.ejs",{kindOfDay:day, newListItem: item})
});


app.listen(3001,function(){
    console.log("Server on port 3000");

});