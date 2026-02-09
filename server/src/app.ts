import express from "express"
import cors from "cors";

const app=express();
app.use(cors());


app.get("/health",(req,res)=>{
    res.send({status:"ok",app:"codebolt-backend"});
})

export default app;