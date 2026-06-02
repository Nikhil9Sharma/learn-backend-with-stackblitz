import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema({
    description : {
        required : true,
        type : String
    }, name : {
        type : String,
        required : true
    }, productImage : {
        type : String,
    }, price : {
        type : Number,
        default : 0,
    }, stock : {
        type : Number,
        default : 0
    }, category : {
        type : monogoose.Schema.Type.ObjectId,
        ref: "Caregory",
        required : true
    }, owner : {
        type : mongoose.Schema.Type.ObjectId,
        ref : "User"
    }
}, {timestamps : true})

export const Product = mongoose.model ("Product", ProductSchema)