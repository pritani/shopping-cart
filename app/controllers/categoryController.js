const Category=require('../models/category')

module.exports.list=(req,res)=>{
    Category.find()
    .then((cat)=>{
        res.json(cat)
    })
    .catch((err)=>{
        res.json(err)
    })
}
module.exports.create=(req,res)=>{
    const body=req.body
    const category=new Category(body)
    category.save()
    .then((cat)=>{
        res.json(cat)
    })
    .catch((err)=>{
        res.json(err)
    })
}
module.exports.show=(req,res)=>{
    const id=req.params.id
    Category.findById(id)
    .then((cat)=>{
        if(cat){
            res.json(cat)
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
    Category.findByIdAndUpdate(id,body,{new:true,runValidators:true})
.then((cat)=>{
    if(cat){
        res.json(cat)
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
    Category.findByIdAndDelete(id)
    .then((cat)=>{
        if(cat){
        res.json(cat)
        }
        else{
            res.json({})
        }
    })
    .catch((err)=>{
        res.json(err)
    })
}