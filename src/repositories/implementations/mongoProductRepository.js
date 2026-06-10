import IProductRepository from "../contracts/IProductRepository.js";
import Product from '../../models/product.model.js'
import { AppError } from "../../utils/errors.js";

class MongoProductRepository extends IProductRepository{
  
    async createProduct(data){
       try {
        const newProduct=await Product.create(data)
        return newProduct
       } catch (error) {
         console.error("Error in creating product:", error);
         throw new AppError(`Failed to create product: ${error.message}`, 500, error);
       }
    }

    async findProductById(id){
        try {
            const product=await Product.findById(id)
            return product
        } catch (error) {
            console.error("Error in fetching product:", error);
         throw new AppError(`Failed to fetch product: ${error.message}`, 500, error);
        }
    }
     
    async findAllProducts(){
       try {
         const products=await Product.find()
         return products
       } catch (error) {
         console.error("Error in fetching all products:", error);
         throw new AppError(`Failed to fetch all products: ${error.message}`, 500, error);
       }
    }

    async findProductByIdAndUpdate(id,data){
       try {
         const updatedProduct=await Product.findByIdAndUpdate(id,data,{new:true})
         return updatedProduct
       } catch (error) {
          console.error("Error in updating a product:", error);
         throw new AppError(`Failed to update a product: ${error.message}`, 500, error);
       }
    }

    async findProductByIdAndDelete(id){
       try {
        const deletedProduct= await Product.findByIdAndDelete(id)
        return deletedProduct
       } catch (error) {
         console.error("Error in deleting a product:", error);
         throw new AppError(`Failed to delete a product: ${error.message}`, 500, error);
       }
    }

    async findProductByName(productName){
       try {
        const product=await Product.findOne({productName})
        return product
       } catch (error) {
         console.error("Error in finding a product:", error);
         throw new AppError(`Failed to find a product: ${error.message}`, 500, error);
       }
    }

}

export default MongoProductRepository