import mongoose from "mongoose" 

const subTodoSchema = new mongoose.Schema({
    contend: {
        type: String,
        required : true,
    }, complete : { 
        type : Boolean,
        default : false
    }, createdBy : {
        type: mongoose.Schema.Type.ObjectId,
        ref: "User"
    }
}, {timestamps : true})

export const SubTodo = mongoose.model("SubTodo", subTodoSchema);
