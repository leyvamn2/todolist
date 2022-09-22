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

//Modelo Item
const itemSchema={
    name:String
};

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
//modelo listSchema
const listSchema={
    name:String,
    items: [itemSchema]
};
const List= mongoose.model("List",listSchema);


const defaultItems=[item1,item2,item3];



app.get("/",function(req,res){
        

    let today=new Date();
    let options={
        weekday:"long",
        day:"numeric",
        month: "long"
    };
    let currentDay=today.getDay();
    
    let day=today.toLocaleDateString("en-US",options);
    
    Item.find({},function(err,foundItems){
        //agregar elementos al modelo si se encuentran vacios
        if(foundItems.length===0){
            Item.insertMany(defaultItems,function(err){
                if(err){
                    console.log(err);
                    }
                else{
                    console.log("yay");
                }
                });
                res.redirect("/");
        }
        else{
            res.render("list.ejs", { listTitle:"TO DO List",  newListItems: foundItems});

        }
     });
});

app.get("/:customListName",function(req,res){
    const customListName= (req.params.customListName);
    List.findOne({name:customListName},function(err,foundList){
        if(!err){
            if(!foundList){
                console.log("doesn't exist");
                const list= new List({
                    name:customListName,
                    items: defaultItems
                     });
                list.save();
                res.redirect("/"+customListName)
    
            }
            else{
                console.log("exist");
                res.render("list.ejs",{ listTitle:foundList.name  ,newListItems: foundList.items})
            }
    
        }
    });
    //  
});

app.post("/",function(req,res){
    //obtener elemento del input del ejs
    const itemName=req.body.newItem;
    const listName=req.body.list//crear modelo
    const item = new Item({
        name:itemName,
    });
    if(listName==="TO DO List"){
        
        //guardar elemento creado
        item.save();
        res.redirect("/");
    }
    else{
        console.log("o.o");
       
        List.findOne({name:listName},function(err,foundList){
            foundList.items.push(item);
            foundList.save();
        });
        foundList.save();
        res.redirect("/"+listName)
    }
    
 
});

app.post("/delete",function(req,res){
    //const itemName=req.body.newItem;
    const selectedItem=req.body.checkbox;
    const listName=req.body.list;
    //console.log(req.body.checkbox);
    Item.findByIdAndRemove(selectedItem,function(err){
        if(err){
            console.log(err);
            }
        else{
            console.log("yay");
        }
        
        
    });
    res.redirect("/");
});

app.listen(3001,function(){
    console.log("Server on port 3000");

});