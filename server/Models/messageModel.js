import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    name:{
        type:String,
       
    },
    email:{
        typr:String,
        
    },
    phone:{
        type:Number,
        
    },
    message:{
        type:String,
        minLength:[3]
    }
})

export const messageModel =  mongoose.model("message", messageSchema)