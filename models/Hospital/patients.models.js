import mongoose from 'mongoose'

const PatientSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true,

    },
    diagnonsedWith : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    age : {

        type : Number,
        required : true
    },
    BloodGroup : {
        type : String,
        enum : ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+","O-"], 
        required : true
    },
    gender : {
        type : String,
        enum : ["M", "F", "T"],
        required : true
    },
    addmittedIn : {
        type : mongoose.Schema.Types.ObjectId,
        ref:"Hospital"
    }
}, {timestamps : true})

export const Patients = mongoose.model(
    "Patients",
    PatientSchema);