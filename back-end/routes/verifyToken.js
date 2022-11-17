const jwt = require("jsonwebtoken")
function verifyToken(req,res){
    console.log('working here')
    const token = localStorage.getItem("token")//does it have a token
    if(!token){
        return res.status(401).send("access denied")
    }
    //if there's a token
    try{
        jwt.verify(token,process.env.SECRET)

    }catch{
        res.status(400).send("Invalid token")
    }

}
module.exports ={verifyToken}
