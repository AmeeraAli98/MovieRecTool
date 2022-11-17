const mongoose = require("mongoose")

const listSchema = new mongoose.Schema({
  filmName:{type:String,required:true},
  note:{type:String},
  poster:{type:String},
  dateAdded:{type:Date}

});

const userSchema = new mongoose.Schema({
  username:  {type:String, required:true}, // String is shorthand for {type: String}
  password: {type:String, required:true},
  watchList: [listSchema]

 
  
});
module.exports = mongoose.model("User",userSchema)