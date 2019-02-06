var express        = require("express"),
    mongoose       = require("mongoose"),
    bodyParser     = require("body-parser"),
    methodOverride = require("method-override"),
    User           = require("./models/user")


var app = express();

mongoose.connect("mongodb://aciles1221:qwerty1221@ds223605.mlab.com:23605/football_games");
app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine", "ejs")
app.use(express.static(__dirname + "/public"))


app.get("/",function(req,res){
    User.find({},function(err,users){
        if(err) {
            console.log(err) ;
        } else {
            res.render("home",{ users: users});
        }
    });
});


var user = new User({
    username: "Isay", 
    gamesPlayed: "30",
    won: "15"
});


user.save(function(err,user){
    if(err){
        console.log("Error");
    }else {
        console.log("Added user");
        console.log(user);
    }
})

var user = new User({
    username: "Aganya", 
    gamesPlayed: "30",
    won: "15"
});


user.save(function(err,user){
    if(err){
        console.log("Error");
    }else {
        console.log("Added user");
        console.log(user);
    }
})


var user = new User({
    username: "Liron", 
    gamesPlayed: "30",
    won: "15"
});


user.save(function(err,user){
    if(err){
        console.log("Error");
    }else {
        console.log("Added user");
        console.log(user);
    }
})

// app.listen(3000,function(){
//     console.log("Server started at port 3000");
// });


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is up");
});