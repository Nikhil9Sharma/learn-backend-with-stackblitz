import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema(
    { 
        contend : {
            type:String,
            required : true,
        }, complete : {
            type : Boolean,
            default : false,
        }, createdBy : {
            // ref type
            type: mongoose.Schema.Types.ObjectId,
            ref : "User"
        }, subTodos: [ 
            {
                //  Array of Sub-TODOs
                type : mongoose.Schema.Types.ObjectId,
                ref : "SubTodo"
            }
        ]

    }, {timestamps: true})

export const Todo = mongoose.model("Todo", totoSchema);
