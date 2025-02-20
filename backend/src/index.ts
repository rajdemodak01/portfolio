import mongoose from "mongoose"
import dotenv from "dotenv"
import { app } from "./app.js";

dotenv.config({
    path:'./.env'
});

(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log("MONGODB connected");
    }catch(err){
        console.log("MONGODB connection error", err);
    }
})().then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running at ${process.env.PORT}`)
    })
}
).catch(
    (err)=>{
        console.log("Mongodb connection error");
    }
)