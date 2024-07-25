import jwt  from "jsonwebtoken"
import 'dotenv/config.js'



const VerifyToken=(req,res,next)=>{
    console.log("tesssstt",req.query)
    jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
        console.log(decoded.foo) // bar
      });
    return res.status(400).send({message:"not allowed"})
    next()
}
export default
    VerifyToken
