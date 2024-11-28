import mongoose from "mongoose";
import validator from "validator"

const appointmentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required'],
        minlength: [3, 'First name must contain at least 3 characters']
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required'],
        minlength: [3, 'Last name must contain at least 3 characters']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        validate: {
            validator: (v) => validator.isEmail(v),
            message: 'Please provide a valid email'
        }
    },
    phone: {
        type: Number,
        required: [true, 'Mobile number is required'],
        validate: {
            validator: (v) => /^\d{10,11}$/.test(v),
            message: 'Mobile number must contain 10 or 11 digits'
        }
    },
    nic: {
        type: String,
        required: [true, 'NIC is required'],
        minlength: [13, 'NIC must contain at least 13 digits'],
        maxlength: [13, 'NIC must contain at most 13 digits']
    },
    dob: {
        type: Date,
        required: [true, "Dob is required"]
    },
    gender: {
        type: String,
        required: true,
        enum: ["Male", "Female"]
    },
    appointment_date:{
        type:String,
        required:true,
    },
    department:{
        type:String,
        required:true,
    },
    doctor:{
        firstName:{
            type:String,
            required:true,
        },
        lastName:{
            type:String,
            required:true,
        }
    },
    hasVisited:{
        type:Boolean,
        required:true
    },
    doctorId:{
        type:mongoose.Schema.ObjectId,
        required:true,
    },
    patientId:{
        type:mongoose.Schema.ObjectId,
        required:true,
    },
    address:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["Pending","Accepted","Rejected"],
        default:"Pending",

    },
});

export const Appointment=mongoose.model("Appointment",appointmentSchema);
