class IProductRepository{

    async createProduct(data){
        throw new Error("Method not implemented")
    }

    async findProductById(id){
        throw new Error("Method not implemented")
    }
     
    async findAllProducts(){
        throw new Error("Method not implemented")
    }

    async findProductByIdAndUpdate(id,data){
        throw new Error("Method not implemented")
    }

    async findProductByIdAndDelete(id){
        throw new Error("Method not implemented")
    }

    async findProductByName(name){
        throw new Error("Method not implemented")
    }
}

export default IProductRepository