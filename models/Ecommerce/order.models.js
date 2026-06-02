import mongoose from "mongoose"
const OrderItemSchema = new mongoose.Schema({
    productId : {
        type : mongoose.Schema.Type.ObjectId,
        ref : "Product"
    }, quantity : {
        type : Number,
        required : true
    }
})
const OrderSchema = new mongoose.Schema({
    orderPrice: {
        type : Number,
        required : true,
    }, customer : {
        type : mongoose.Schema.Type.ObjectId,
        ref : "User"
    }, oderitems : {
        type : [orderItemSchema]
    }, address : {
        type : String,
        required : true
    },status : {
        type : String,
        enum : ["Pending", "Cancelled", "Delivered"],
        default : "Pending"
    }
}, {timestamps : true})

export const Order = new mongoose.model("Order", OrderSchema );