require("dotenv").config();
const cors = require('cors');
const express = require('express');
const app=express();
const multer = require('multer');
const path = require('path');


const userRouter=require("./api/users/user.router");
const productRouter=require("./api/products/products.router");
//storage engine
const storage=multer.diskStorage({
    destination:'upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload =multer({
    storage:storage,
    limits:{fileSize:1000000}
})
app.use('/img',express.static('upload/images'));
app.post('/products/add',upload.single('img'),(req,res)=>{
    
    res.json({
        success:1,
        image_url:`http://localhost:3001/img/${req.file.filename}`
    })
})
function errHandler(err,req,res,next){
    if(err instanceof multer.MulterError){
        res.json({
            success:0,
            message:err.message
        })
    }
}
app.use(errHandler);
app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use("/api/users",userRouter);

app.use("/api/products",productRouter);
app.listen(process.env.APP_PORT,()=>{
    console.log("server is running at port no: ",process.env.APP_PORT);
})