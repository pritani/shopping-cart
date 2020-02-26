const express=require('express')
const router=express.Router()
const {authenticateUser}=require('../App/middlewares/authentication')
const productController=require('../App/controllers/productController')
const subCategoryController=require('../App/controllers/subCategoryController')
const CategoryController=require('../App/controllers/categoryController')
const cartController=require('../App/controllers/cartController')
router.get('/products',productController.list) 
router.post('/products',productController.create)
router.get('/products/:id',productController.show)
router.put('/products/:id',productController.update)
router.delete('/products/:id',productController.destroy)


router.get('/subcategory',subCategoryController.list)
router.post('/subcategory',subCategoryController.create)
router.get('/subcategory/:id',subCategoryController.show)
router.put('/subcategory/:id',subCategoryController.update)
router.delete('/subcategory/:id',subCategoryController.destroy)


router.get('/category',CategoryController.list)
router.post('/category',CategoryController.create)
router.get('/category/:id',CategoryController.show)
router.put('/category/:id',CategoryController.update)
router.delete('/category/:id',CategoryController.destroy)

router.get('/cart',authenticateUser,cartController.list)
router.post('/cart',authenticateUser,cartController.create)

//router.get('/address',addressController.list)

module.exports=router
