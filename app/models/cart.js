const mongoose=require('mongoose')

const cartSchema=mongoose.Schema({
    User:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    cart:[{
        quantity:{
            type:Number
        },
        total:{
            type:Number
        },
        product:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Product'
        }

    }
    ]
})
const Cart=mongoose.model('Cart',cartSchema)
module.exports=Cart