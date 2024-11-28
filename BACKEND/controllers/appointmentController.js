import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { Appointment } from "../models/appointmentSchema.js";
import { User } from "../models/userSchema.js";

export const postAppointment = catchAsyncErrors(async (req,res,next) => {
    const{
        firstName,
        lastName,
        email,
        phone,
        nic,
        dob,
        gender,
    department,
    appointment_date,
    hasVisited,
    address,
    doctor_firstName,
    doctor_lastName
    } =req.body;

    if(!firstName ||
        !lastName ||
        !email ||
        !phone ||
        !nic ||
        !dob ||
        !gender ||
        !appointment_date ||
        !department ||
        !doctor_firstName ||
        !doctor_lastName ||
        !address)

        {
            return next(new ErrorHandler("Please fill full Form !" ,404));
        }

        // check if same name doctor conflict happens

        const isConflict = await User.find({
            firstName:doctor_firstName,
            lastName:doctor_lastName,
            role:"Doctor",
            doctorDepartment:department
        })

        // if doctor not found
        if(isConflict.length===0)
        {
            return next(new ErrorHandler("Doctor Not found!",404));
        }

        if(isConflict.length>1)
        {
            return next(new ErrorHandler("Doctors Conflict ! Please Contact through Email or Phone !",404))
        }


        // getting doctor's id
        const doctorId = isConflict[0]._id; // doctor will be stored in the conflict
        const patientId = req.user._id; // jo authorize ho aur patient ho
        const appointment = await Appointment.create({
        firstName,
        lastName,
        email,
        phone,
        nic,
        dob,
        gender,
        department,
        appointment_date,
        hasVisited,
        address,
        doctor:{
        
            firstName:doctor_firstName,
            lastName:doctor_lastName
    } ,
    doctorId,
    patientId
    })

    res.status(200).json({
        success:true,appointment,
        message :"Appointment Sent Successfully !"
    })
})


export const getAllAppointments = catchAsyncErrors(async (req,res,next) => {

    const appointments = await Appointment.find();
    // find appointment

    res.status(200).json({
        success:true,
        appointments
    })
    
})

export const updateAppointmentStatus = catchAsyncErrors(
    async (req,res,next) => {
        const {id} = req.params; 
        // get appointment
        let appointment = await Appointment.findById(id);

        if(!appointment)
        {
            return next(new ErrorHandler("Appointment Not Found !" , 404));
        }

        appointment = await Appointment.findByIdAndUpdate(id, req.body , {
            new :true,
            runValidators:true,
            useFindAndModify:false,
        });

        res.status(200).json({
            success:true,
            message:"Appointment Status Updated !"
        });

        
    }
)


export const deleteAppointment = catchAsyncErrors(async (req,res,next) => 
{
    const{id} = req.params;
    
    const appointment = await Appointment.findById(id);

    if(!appointment)
    {
        return next(new ErrorHandler("Appointment Not Found !",404));
    }

    await appointment.deleteOne();

    res.status(200).json({
        success:true,
        message:"Appointment Deleted !"
    })
    
})