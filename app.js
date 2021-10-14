const express= require("express");
const bodyParser= require("body-parser");

const app= express();

var items=["Wake up", "Movie" , "Eat"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req,res){
    
    var today= new Date();
    var day="";
    var options={
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    day=today.toLocaleDateString("en-US", options);
    res.render("list", {kindOfDay: day, newListItem: items});
});

app.post("/", function(req,res){
    var item= req.body.newItem;
    items.push(item);
    res.redirect("/");

});

app.listen(3000, function(){
    console.log("Server started at port 3000");
});