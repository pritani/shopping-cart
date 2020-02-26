const Cart=require('../models/cart')

module.exports.list=(req,res)=>{
    Cart.find({user:req.user._id})
    .then((carts)=>{
        res.json(carts)
    })
    .catch((err)=>{
        res.json(err)
    })
}
module.exports.create=(req,res)=>{
    const body=req.body
    const cart=new Cart(body)
    cart.user=req.user._id
    cart.save()
    .then((cart)=>{
        res.json(cart)
    })
    .catch((err)=>{
        res.json(err)
    })
}