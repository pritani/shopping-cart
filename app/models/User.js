const mongoose=require('mongoose')
const validator=require('validator')
const Schema=mongoose.Schema
const jwt=require('jsonwebtoken')
const bcryptjs=require('bcryptjs')//md5(encrypt nd decrypt//crypto package)
const userSchema=new Schema({
    username:{
      type:String,
    required:true, 
    unique:true,
     minlength:5
    },
    email:{  
        type:String,
        required:true,
        unique:true,
       
        validate:{
            validator:function(value){
                return validator.isEmail(value)
            },
            message:function(){
                return 'invalid email format'
            }
        }

    },
    password:{
        type:String,
        required:true,
        minlength:6,
        maxlength:128

    },
    tokens:[
        {
            token:{
                type:String
            },
            createdAt:{
                type:Date,
                enum:['admin','customer'],
                default:Date.now
            }
        }
    ],
    role:{
        type:String,
        default:'customer'
    }
})
userSchema.pre('save',function(next){
    const user=this
    if(user.isNew){
bcryptjs.genSalt(10)
.then(function(salt){
   //user.password=secret123
    bcryptjs.hash(user.password,salt)
      .then(function(encryptedPassword){
            user.password=encryptedPassword
    next()
   
    })
    })
}
else{
    next()
}
})
//own static method--login
userSchema.statics.findByCredentials=function(email,password){
    const User=this
 return User.findOne({email})
.then(function(user){
      if(!user){
          return Promise.reject('invalid email/password')
      }

 return bcryptjs.compare(password,user.password)//db password--hashed is not random
    .then(function(result){//bolean true or false
      if(result){
            return Promise.resolve(user)
    //    return new Promise(function(resolve,reject){
    //        resolve(user)
    //    })
         }
       else{
        return Promise.reject('invalid password/email')
    }
    })
    })

.catch(function(err){//1st then
    return Promise.reject(err)

})
}
userSchema.statics.findByToken=function(token){
    const User=this
    let tokenData
    try{
        tokenData=jwt.verify(token,'jwt@123')//decode-
    }
    catch(err){
        return Promise.reject(err)
    }
    //if valid token
    return User.findOne({
        _id:tokenData._id,
        'tokens.token':token//token arrays
    })

}

//own instance methods-12{
userSchema.methods.generateToken=function(){
    const user=this//instance
    const tokenData={
        _id:user._id,
        username:user.username,
        createdAt:Number(new Date())//token expired
        //role:admin/custoemr
    }
   
    const token=jwt.sign(tokenData,'jwt@123')//
    user.tokens.push({
        token

    })
    //pushed but still we have not saved it
    return user.save()//pre save get called
    .then(function(user){
        return Promise.resolve(token)//
    })
    .catch(function(err){
        return Promise.reject(err)
    })
}

const User=mongoose.model('User',userSchema)
module.exports={
    User
}