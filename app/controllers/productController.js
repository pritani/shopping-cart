const Product=require('../models/product')

module.exports.list=(req,res)=>{
    Product.find().populate('subcategory')
    .then((products)=>{
        res.json(products)
    })
    .catch((err)=>{
        res.json(err)
    })
}
module.exports.create=(req,res)=>{
    const body=req.body
    const product=new Product(body)
    product.save()
    .then((product)=>{
        res.json(product)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.show=(req,res)=>{
    const id=req.params.id
    console.log(id)
    Product.findById(id).populate('subcategory')
    .then((products)=>{
        if(products){
            res.json(products)
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
    console.log(body)
    Product.findByIdAndUpdate(id,body,{new:true,runValidators:true})
.then((product)=>{
    if(product){
        res.json(product)
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
    Product.findByIdAndDelete(id)
    .then((product)=>{
    if(product){
      res.json(product)
    }else{
        res.json({})
    }
})
.catch((err)=>{
    res.json(err)
})
}