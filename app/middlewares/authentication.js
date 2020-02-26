const {User} =require('../models/User')

const authenticateUser=function(req,res,next){
    const token=req.header('x-auth')
        User.findByToken(token)
        .then(function(user){
          if(user){//vid18--logout
            req.user=user
            req.token=token
           // res.send(user)
            next()
          }else{
              res.status('401').send({notice:'token not available'})
          }
        })
            .catch(function(err){
                res.status('401').send(err)
            })
       
    }
const authorisedUser=(req,res,next)=>{
    if(req.user.role=='Admin'){
        next()
    }
    else{
        res.status('403').json({notice:"you are not authorised"})
    }
}
        module.exports={
            authenticateUser,
            authorisedUser
        }
