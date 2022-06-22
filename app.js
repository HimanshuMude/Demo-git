const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
let uname=["test"];
let pass=["pass123"];

app.get("/",function(req,res){
    res.render("login");
});

app.get("/home",function(req,res){
    let info="Walchand College of Engineering is a college in the city of Sangli, Maharashtra, India. The WCE campus ..."
    res.render("home",{content:info});
});
app.get("/forum",function(req,res){
    res.render("forum");
});

app.post("/",function(req,res){
    try {
        let flag1 = 0;
        uname.forEach(function (ele) {
            if (req.body.userName === ele) {
                flag1 = 1;
            }
        });
        let flag2 = 0;
        pass.forEach(function (ele) {
            if (ele === req.body.userPass) {
                flag2 = 1;
            }
        });
        if ((flag1 + flag2) === 2) {
            res.redirect("/home");
        }
    } catch (error) {
        res.status(400).send("Invalid Details. Try again.");
    }
     
    
})


app.listen(3000,function(){
    console.log("Server started at port 3000.");
});