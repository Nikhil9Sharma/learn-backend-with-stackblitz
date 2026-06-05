import mongoose from "mongoose"

 

const doctorSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    salary : {
        type : String,
        required : true
    },    qualifications:{
        type : String,
        required : true
    }, ExperienceInYear : {
        type : Number,
        required : true,
        default : 0
    }, WorksInHospitals : 
         [
        {
            type : mongoose.Schema.Type.ObjectId,
            ref : "Hospital"
        }
        ]
    
}, { timestamps : true } )

export const Doctor = mongoose.model(
    "Doctor",
    doctorSchema);