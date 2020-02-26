const mongoose=require('mongoose')

const Schema=mongoose.Schema
const productSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    reviews:[
        {
        title:{
            type:String
        },
        userId:{
            type:Schema.Types.ObjectId,
            ref:"User"
        }

    }],
    subcategory:{
        type:Schema.Types.ObjectId,
        ref:'SubCategory',//model-populating time
        required:true
    }
    ,
    productImage:{type:String}
})
const Product=mongoose.model('Product',productSchema)
module.exports=Product