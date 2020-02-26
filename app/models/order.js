const mongoose=require('mongoose')

const orderSchema=mongoose.Schema({
    User:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    order:[
        {
            product:{
                type:Schema.Types.ObjectId,
                ref:"Product"
            },
            total:{
                type:Number
            }
        }
    ]

})
const Order=mongoose.model('Order',orderSchema)
module.exports=Order