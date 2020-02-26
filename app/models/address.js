const mongoose=require('mongoose')

const Schema=mongoose.Schema
const addressSchema=new Schema({
    address:[
        {
            name:{
                type:String,
                required:true
          },
        
        mobile:{
            type:Number
    },
    
        city:{
        type:String
},

        state:{
            type:String
        }
    }
    ]

})
const Address=mongoose.model('Address',addressSchema)
module.exports=Address