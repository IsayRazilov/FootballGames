var express        = require("express"),
    mongoose       = require("mongoose"),
    bodyParser     = require("body-parser"),
    methodOverride = require("method-override"),
    User           = require("./models/user")


var app = express();

mongoose.connect("mongodb://aciles1221:qwerty1221@ds143474.mlab.com:43474/footballgames");
app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine", "ejs")


app.get('/',function(req,res){
    res.render('home');
});

app.listen(3000,function(){
    console.log("Server started at port 3000");
});


// app.listen(process.env.PORT, process.env.IP, function(){
//     console.log("The YelpCamp Server Has Started!");
// });