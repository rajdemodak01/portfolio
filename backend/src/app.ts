import express from "express"
import { Request, Response } from "express";
import cors from "cors"
import dotenv from "dotenv"
import { Help } from "./models/Help.js";

dotenv.config({
    path:'./.env'
});

const app=express()
console.log(process.env.CORS_ORIGIN)
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"}));

app.get('/healthCheck',(req:Request, res:Response) =>{
    res.send({message:"Server connected successfully"}).status(200);
})
app.post('/help', async (req: Request, res: Response):Promise<any>=>{
    console.log("called")
    try{
        const {name, email, message}=req.body;
        const help=await Help.create({
            name, email, message
        })
        const helpCreated= await Help.findById(help._id);
        if(!helpCreated){
            console.log("Something went wrong while creating the help")
        }
        return res
        .status(201)
        .json({message:"Help submitted successfully"});
    }catch(err){
        console.log("Error in /help route: ", err);
        return res
        .status(500)
        .json({error:"Help not submitted"})
    }
})

export {app};