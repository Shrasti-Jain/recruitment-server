import mongoose from 'mongoose'

let productSchema=new mongoose.Schema({
     productName:{
        type:String,
        required:true,
        unique:true,
        trim:true
     },
     productDescription:{
        type:String,
        trim:true
     },
     productPrice:{
        type:Number,
        required:true,
        min:0
     },
     productCategory:{
        type:String,
        required:true,
        trim:true
     },
     productUrl:{
        type:String,
        required:true,
        trim:true
     }
},{
    timestamps:true
})


export default mongoose.model("products",productSchema)
