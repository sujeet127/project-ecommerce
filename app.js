require("dotenv").config();
const cors = require('cors');
const express = require('express');
const app=express();
const userRouter=require("./api/users/user.router");
const productRouter=require("./api/products/products.router");

app.use(cors());
app.use(express.json());
app.use("/api/users",userRouter);

app.use("/api/products",productRouter);
app.listen(process.env.APP_PORT,()=>{
    console.log("server is running at port no: ",process.env.APP_PORT);
})