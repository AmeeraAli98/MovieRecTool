const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const User = require("../models/User")
const bcrypt = require("bcryptjs")
const verify = require("../routes/verifyToken")


async function register(req, res){
    const new_username = req.body.username
    console.log(new_username)
   const findUser = await User.findOne({username: new_username})
   
   if(findUser){
    return res.status(400).send("User exists")
   }
   
   //User doesn't exist
   //hash 
   const salt = await bcrypt.genSalt(10)
   const hashedPass = await bcrypt.hash(req.body.password, salt)
   console.log(req)
  const user = await User.create({
    username:req.body.username,
    password: hashedPass
   })
   try{
    const save_user =  await user.save();
    res.send('user saved')
   }catch(err){
    res.status(400).send(err)
   }
    

}

async function login(req,res){
    //does user exist
    const user = await User.findOne({username: req.body.username})

    if(!user){
    return res.status(400).send("User doesn't exist")
    
    }
    //is password correct
   const checkPass= await bcrypt.compare(req.body.password,user.password )
   if(!checkPass){
    console.log('here password')
    return res.status(400).send("Wrong password")
   }
   //if both are correct
   const token = jwt.sign({_id:user._id, username:user.username}, process.env.SECRET)
   //add identifier 
res.send(token)
}
async function addMovie(req,res){
  //find uder
  console.log("filmname",req.body.filmName)
  const find_user = await User.findOne({username:req.body.username})
  try{
  find_user.watchList.push({filmName:req.body.filmName,poster:req.body.poster,dateAdded:Date()})
  find_user.save()
  res.send("done!")
  }catch(err){
    console.log(err)
  }
}

async function getList(req,res){
  //find user
  console.log(req)
  const find_user = await User.findOne({username: req.query.username})
  const get_list = find_user.watchList
  res.send(get_list)


}
async function updateList(req,res){
  //find user
  const find_user = await User.findOne({username:req.query.username})
  const get_list = await find_user.watchList.find(ele=>ele._id=="63725689f46728554b329ef3")
  if(get_list){
    get_list.filmName="not Hi"
  }  
  find_user.save()
  res.send(get_list)


}
async function deleteItem(req,res){
  //find user
  const find_user = await User.findOne({username:req.body.username})
  const get_list =  find_user.watchList.filter(ele=>ele._id.valueOf()!=req.body.id)
  find_user.watchList =get_list
  find_user.save()
  res.send({list:get_list})


}


module.exports={register,login, addMovie,getList,updateList,deleteItem}