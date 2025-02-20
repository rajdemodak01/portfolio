import mongoose from "mongoose";

const HelpSchema=new mongoose.Schema(
    {
        email:{
            type:String,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        message:{
            type:String,
            required:true
        },
    },
    {timestamps:true}
)

export const Help=mongoose.model("Help", HelpSchema);