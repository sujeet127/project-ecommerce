
const {createAddress,getAddress,getAddressById,deleteAddress,updateAddress} = require('./address.service');
module.exports={
    createAddress:(req,res)=>{
        console.log(req.body);
        const body=req.body;
        createAddress(body,(err,result)=>{
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
                
            });
    })
    },
    getAddress:(req,res)=>{
        const id=req.params.id;
        getAddress(id,(err,result)=>{
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
    getAddressById:(req,res)=>{
        const id=req.params.id;
        getAddressById(id,(err,result)=>{
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
    deleteAddress:(req,res)=>{
        const id=req.params.id;
        deleteAddress(id,(err,result)=>{
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
    updateAddress:(req,res)=>{
        const body=req.body;
        updateAddress(body,(err,result)=>{
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
}