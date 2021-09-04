const {createProduct,getProducts,getProductById,getProductByName,updateProduct,deleteProduct}=require("./product.service");
module.exports={
    createProduct:(req,res)=>{
        const body=req.body;
        createProduct(body,(err,result)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message:"Database connection error",

                });
            }
            return res.status(200).json({
                success:1,
                data:result,
            });
        });
    },
    getProducts:(req,res)=>{
        getProducts((err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            if(!result){
                res.json({
                    success:1,
                    message:"No record found",
                })
            }
            return res.status(200).json({
                success:1,
                data:result,
            });
        
        })
    },
    getProductById:(req,res)=>{
        const id=req.params.id;
        getProductById(id,(err,result)=>{
            if(err){
                console.log(err);
                return ;
            }
            if(!result){
                res.json({
                    success:0,
                    message:"No record found",
                });
            }
            return res.status(200).json({
                success:1,
                data:result,
            });

        });
    },
    getProductByName:(req,res)=>{
        const name=req.params.product_name;
        getProductByName(name,(err,result)=>{
            if(err){
                console.log(err);
                return ;
            }
            if(!result){
                res.json({
                    success:0,
                    message:"No record found",
                });
            }
            return res.status(200).json({
                success:1,
                data:result,
            });
        });
    },
    updateProduct:(req,res)=>{
        const body=req.body;
        updateProduct(body,(err,result)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message:"Database connection error",

                });
            }
            return res.status(200).json({
                success:1,
                message:"updated Sucessfully",
                
            });
        });

    },
    deleteProduct:(req,res)=>{
        const id=req.params.id;
        deleteProduct(id,(err,result)=>{
            if(err){
                console.log(err);
                return ;
            }
            if(!result){
                res.json({
                    success:0,
                    message:"No record found",
                })
            }
            return res.status(200).json({
                success:1,
                message:"User deleted sucessfully",
            })

        });

    },
}