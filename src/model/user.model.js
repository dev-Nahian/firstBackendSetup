const mongoose = require('mongoose');
const { Schema } = mongoose;


const userSchema = new Schema(
    {
    FirstName:{
        type: String,
        required: [true, "First Name Must Beee !!"],
        trim: true,
        max: [20, "Must Be In 20 Char"]
    },
    LastName:{
        type: String,
        trim: true,
        max: [10, "Must Be In 20 Char"]
    },
    Email:{
        type: String,
        required: [true, "Email Must Beee !!"], 
        unique: true,
    },
    Telephone:{
        type: Number,
        required: [true, "Give Your Telephone NUmber"],
        max: [14, "Number invaled"]
    },
    Adress1:{
        type: String,
        required: [true, "Address Missing"]
    },
    Adress2:{
        type: String,
    },
    City:{
        type: String,
        required: [true, "City Must Beee !!"]
    },
    PostCode:{
        type: Number,
    },
    divition:{
        type: String,
        required: true
    },
    district:{
        type: String,
        required: true
    },
    Password:{
        type: String,
        required: [true, "Password Missing !!"],
        trim : true
    },
    Otp:{
        type: Number,
    },
    
    },

    { timestamps: true }

)


const userMOdal = mongoose.model("user", userSchema);

module.exports = {userMOdal}