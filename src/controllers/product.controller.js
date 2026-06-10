import ProductService  from '../services/product.service.js'
import { asyncHandler } from '../utils/asyncHandler.js'

class ProductController{
   constructor(){
    this.productService=new ProductService()
   }

   createProduct=asyncHandler(async (req,res,next)=>{
       let productData=req.body
       
       let newProduct=await this.productService.createProduct(productData)

       res.status(201).json({
        success:true,
        data:newProduct,
        message:"Product created successfully"
       })

   })

   getProducts=asyncHandler(async(req,res,next)=>{
     let allProducts=await this.productService.getAllProducts()
    
     
       res.status(200).json({
        success:true,
        data:allProducts,
        message:"All Products fetched successfully"
       })
     
   })

   getSingleProduct=asyncHandler(async(req,res,next)=>{
      let {id}=req.params

      let product=await this.productService.getSingleProduct(id)

       res.status(200).json({
        success:true,
        data:product,
        message:"Product fetched successfully"
       })

   })

   updateProduct=asyncHandler(async(req,res,next)=>{
      let {id}=req.params

      let data=req.body

      let updatedProduct=await this.productService.updateProduct(id,data)

      res.status(200).json({
        success:true,
        data:updatedProduct,
        message:"Product updated successfully"
       })

   })

   deleteProduct=asyncHandler(async(req,res,next)=>{
       let {id}=req.params

       let deletedProduct=await this.productService.deleteProduct(id)
  
         res.status(200).json({
        success:true,
        data:deletedProduct,
        message:"Product deleted successfully"
       })

   })
}

export default new ProductController()