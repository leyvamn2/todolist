//jshin esversion:7
const express=require("express");
const bodyParser= require("body-parser");
const mongoose=require("mongoose");

const app= express();

app.set("view engine","ejs");

//location css files
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todolistDB",{useNewUrlParser:true});
//modelo
const itemSchema={
    name:String
};
//schema
const Item = mongoose.model("item",itemSchema);

//crear objetos 
const item1= new Item({
    name:"Welcome"
});
const item2= new Item({
    name:"Oa"
});
const item3= new Item({
    name:"Ao"
});



app.get("/",function(req,res){
    
    let today=new Date();
    let options={
        weekday:"long",
        day:"numeric",
        month: "long"
    };
    let currentDay=today.getDay();
    
    let day=today.toLocaleDateString("en-US",options);
   
    res.render("list.ejs", { kindOfDay:day,  newListItems: items});
});

app.post("/",function(req,res){
    let item=req.body.newItem;
    items.push(item);
    
    res.redirect("/");
    // res.render("list.ejs",{kindOfDay:day, newListItem: item})
});


app.listen(3001,function(){
    console.log("Server on port 3000");

});