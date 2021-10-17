
const {createCart,getCart,getCartById,deleteCart} = require('./cart.service');
module.exports={
    createCart:(req,res)=>{
        console.log(req.body);
        const body=req.body;
        createCart(body,(err,result)=>{
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
                message:"Data added successfully",
                image_url:`http://localhost:3001/img/${body.img}`
            });
    })
    },
    getCart:(req,res)=>{
        const id=req.params.id;
        getCart(id,(err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            if(!result ){
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
    getCartById:(req,res)=>{
        const id=req.params.id;
        getCartById(id,(err,result)=>{
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
    deleteCart:(req,res)=>{
        const id=req.params.id;
        deleteCart(id,(err,result)=>{
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
                message:"data deleted sucessfully",
            })

        });

    },
}