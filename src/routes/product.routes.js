import express from 'express'
import { authenticateJWT } from "../middlewares/auth.middleware.js";
import { createProductValidator, updateProductValidator } from '../middlewares/validators/product.validator.js'
import productController from '../controllers/product.controller.js'

let router=express.Router()

router.post('/create-product',createProductValidator,productController.createProduct)
router.get('/get-products',productController.getProducts)
router.put('/update-product/:id',updateProductValidator,productController.updateProduct)
router.get('/get-single-product/:id',productController.getSingleProduct)
router.delete('/delete-product/:id',productController.deleteProduct)

export default router