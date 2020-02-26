const express=require('express')
const router=express.Router()
//const bcryptjs=require('bcryptjs')
const {User} =require('../models/User')
const {authenticateUser}=require('../middlewares/authentication')
//localhost:3050/users/register

router.post('/register',function(req,res){
    const body=req.body
    const user=new User(body)
    console.log(user.isNew)
    user.save()
    .then(function(user){
        console.log(user.isNew)
        res.send(user)
    })
    .catch(function(err){
        res.send(err)
    })
})
//localhost:3050/users/login
router.post('/login',function(req,res){
    const body=req.body

    User.findByCredentials(body.email,body.password)
    .then(function(user){
        return user.generateToken()
    })
    .then(function(token){
        res.setHeader('x-auth',token).send({})
    })
    
    // User.findOne({email:body.email})
    // .then(function(user){
    //     if(!user){
    //         res.status('404').send('invalid email')
    //     }
    //     bcryptjs.compare(body.password,user.password)
    //     .then(function(result){
    //         if(result){
    //             res.send(user)
    //         }
    //         else{
    //             res.status('404').send('invalid password')
    //         }
    //     })
      //  res.send(user)
        // else{
        //     res.send('email found')
        // }
        // console.log(user)
        // res.send({})
    .catch(function(err){
        res.send(err)
    })
})


//localhost:3050/users/account
router.get('/account',authenticateUser,function(req,res){
    const {user}=req
 res.send(user)
})
//localhost:3050/users/logout
router.delete('/logout',authenticateUser,function(req,res){
    const {user,token}=req
    User.findByIdAndUpdate(user._id,{$pull:{tokens:{token:token}}})
    .then(function(){
        res.send({notice:"successfully logged out"})
    })
    .catch(function(err){
        res.send(err)
    })
})

module.exports={
    userRouter:router
}