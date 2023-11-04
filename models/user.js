import mongoose from "mongoose"



const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        unique: false
    },
    yearOFstudy:{
        type: String,
        unique: false
    },
    foi:{
        type:Array,
        unique:false
    }
})


export const User = mongoose.model("User", schema)
