import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        // username : String,
        // email : String,
        // isActive : boolean
        username : {
            type : String,
            required : true,
            unique : true,
            lowercase : true
        }
        , email : {
            type : String,
            required : true,
            unique : true,
            lowercase : true
        }, password : {
            type : String,
            required : [true, " Password must be Required !"]
        },

    }, {timestamps : ture}
)

export const User = mongoose.model("User", userSchema)

users
