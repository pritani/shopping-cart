const SubCategory=require('../models/subCategory')

module.exports.list=(req,res)=>{
    SubCategory.find().populate('category')
    .then((subcat)=>{
        res.json(subcat)
    })
    .catch((err)=>{
        res.json(err)
    })
}
module.exports.create=(req,res)=>{
    const body=req.body
    const subcategory=new SubCategory(body)
    subcategory.save()
    .then((subcat)=>{
        res.json(subcat)
    })
    .catch((err)=>{
        res.json(err)
    })
}
module.exports.show=(req,res)=>{
    const id=req.params.id
    SubCategory.findById(id).populate('category')
    .then((subcat)=>{
        if(subcat){
            res.json(subcat)
        }
        else{
            res.json({})
    }
    })
    .catch((err)=>{
        res.json(err)
    })
}
module.exports.update=(req,res)=>{
    const id=req.params.id
    const body=req.body
    SubCategory.findByIdAndUpdate(id,body,{new:true,runValidators:true})
.then((subcat)=>{
    if(subcat){
        res.json(subcat)
    }
    else{
        res.json({})
    }
})
.catch((err)=>{
    res.json(err)
})
}
module.exports.destroy=(req,res)=>{
    const id=req.params.id
    SubCategory.findByIdAndDelete(id)
    .then((subcat)=>{
        if(subcat){
        res.json(subcat)
        }
        else{
            res.json({})
        }
    })
    .catch((err)=>{
        res.json(err)
    })
}