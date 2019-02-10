var express        = require("express"),
    mongoose       = require("mongoose"),
    bodyParser     = require("body-parser"),
    methodOverride = require("method-override"),
    User           = require("./models/user"),
    Game           = require("./models/game")


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
            Game.find({},function(err, games) {
               if(err) {
                   console.log(err) ;
               } else {
                   res.render("home",{ users: users, error: "false", games:games });
               }
            });
        }
    });
});

app.post("/",function(req,res){
    
    if (req.body.password != "@gany@") {
        User.find({},function(err,users){
            if(err) {
                console.log(err) ;
            } else {
                res.render("home",{ users: users, error: "true" });
            }
        });
    } else {
        
        if ( req.body.won1 != "None") {
            User.findOneAndUpdate({"username":req.body.won1},{ $inc : { gamesPlayed: 1 ,won: 1} },function(err,user){
                if(err) {
                    console.log(err) ;
                } 
            });
        }
        if(req.body.won2 != "None") {
            User.findOneAndUpdate({"username":req.body.won2},{ $inc : { gamesPlayed: 1 ,won: 1} },function(err,user){
                if(err) {
                    console.log(err) ;
                } 
            });
        }
        if ( req.body.lost1 != "None") {
            User.findOneAndUpdate({"username":req.body.lost1},{ $inc : { gamesPlayed: 1 } },function(err,user){
                if(err) {
                    console.log(err) ;
                } 
            });
        }
        if(req.body.lost2 != "None") {
            User.findOneAndUpdate({"username":req.body.lost2},{ $inc : { gamesPlayed: 1 } },function(err,user){
                if(err) {
                    console.log(err) ;
                } 
            });
        }
        
        var date = new Date();
        var newGame = new Game({
            firstWon: req.body.won1, 
            secondWon: req.body.won2, 
            firstLost: req.body.lost1, 
            secondLost: req.body.lost2,
            date: date.toDateString() 
        });
        
        
        newGame.save(function(err,user){
            if(err){
                console.log("Error");
            }
        })
        User.find({},function(err,users){
            if(err) {
                console.log(err) ;
            } else {
                Game.find({},function(err, games) {
                   if(err) {
                       console.log(err) ;
                   } else {
                       res.render("home",{ users: users, error: "false", games:games });
                   }
                });
            }
        });
    }

});


// var user = new User({
//     username: "Moti", 
//     gamesPlayed: 1,
//     won: 1
// });


// user.save(function(err,user){
//     if(err){
//         console.log("Error");
//     }else {
//         console.log("Added user");
//         console.log(user);
//     }
// })

// var newGame = new Game({
//     firstWon: "x", 
//     secondWon: "x", 
//     firstLost: "x", 
//     secondLost: "x"
// });


// newGame.save(function(err,user){
//     if(err){
//         console.log("Error");
//     }
// })

// app.listen(3000,function(){
//     console.log("Server started at port 3000");
// });


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is up");
});