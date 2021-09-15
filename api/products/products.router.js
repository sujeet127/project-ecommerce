const {createProduct,getProducts,getProductById,getProductByName,updateProduct,deleteProduct}=require("./products.controller");
const router=require("express").Router();
const multer = require('multer');
const path = require('path');
const express = require('express');
const app=express();

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

function errHandler(err,req,res,next){
    if(err instanceof multer.MulterError){
        res.json({
            success:0,
            message:err.message
        })
    }
}
app.use(errHandler);
router.post("/",upload.single('img'),createProduct);
router.get("/",getProducts);
router.get("/:id",getProductById);
router.get("/product",getProductByName);
router.put("/",updateProduct);
router.delete("/:id",deleteProduct);
module.exports=router;