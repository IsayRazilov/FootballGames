var mongoose = require("mongoose");
// var passportLocalMongoose = require("passport-local-mongoose");


var GameSchema = new mongoose.Schema({
    firstWon: String, 
    secondWon: String, 
    firstLost: String, 
    secondLost: String
});

// UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Game",GameSchema);