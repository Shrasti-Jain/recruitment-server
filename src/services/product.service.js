import MongoProductRepository from "../repositories/implementations/mongoProductRepository.js"
import { AppError } from "../utils/errors.js";

class ProductService{
    constructor(){
        this.productRepository=new MongoProductRepository()
    }

    async createProduct(data){

      let existingProduct=await this.productRepository.findProductByName(data.productName)

      if (existingProduct) {
      throw new AppError("Product already exists", 409);
      }

      let newProduct=await this.productRepository.createProduct(data)
     
      return newProduct
    }

    async getAllProducts(){

       let allproducts=await this.productRepository.findAllProducts()

       return allproducts
    }

    async getSingleProduct(id){
      
        let product=await this.productRepository.findProductById(id)

        if(!product) throw new AppError("Product not exists", 404)

        return product

    }

    async updateProduct(id,data){

        let updatedProduct=await this.productRepository.findProductByIdAndUpdate(id,data)

        if (!updatedProduct) {
         throw new AppError("Product not found", 404);
        }

        return updatedProduct
    }

    async deleteProduct(id){

        let deletedProduct=await this.productRepository.findProductByIdAndDelete(id)

          if (!deletedProduct) {
         throw new AppError("Product not found", 404);
        }

        return deletedProduct
    }

}

export default ProductService