import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
    name:{
        typeof: String,
        require: true
    },
    email:{
        typeof: String,
        require: true
    },
    phone:{
        typeof: Number,
        
    },
    message:{
        typeof: String,
        minLength:[4]
    }
})

export const messageModel =  mongoose.model("message", messageSchema)