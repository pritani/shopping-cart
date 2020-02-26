const mongoose=require('mongoose')

const Schema=mongoose.Schema
const subCategorySchema=new Schema({
    name:{
        type:String,
        required:true
    },
    category:{
        type:Schema.Types.ObjectId,
        ref:'Category',
        required:true
    }
})
const SubCategory=mongoose.model('SubCategory',subCategorySchema)
module.exports=SubCategory 