const {create,getUser,getUserById,updateUser,deleteUser,getUserByEmailId}= require('./user.service');
const {genSaltSync,hashSync,compareSync}= require('bcrypt');
const {sign} = require('jsonwebtoken');//for creating web token
module.exports={
    createUser:(req,res)=>{
        const body=req.body;
        const salt=genSaltSync(10); //for storing the password in encrypted format
        body.password=hashSync(body.password,salt);
        create(body,(err,result)=>{
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
    getUserById:(req,res)=>{
        const id=req.params.id;
        getUserById(id,(err,result)=>{
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
                data:result,
            })

        })
    },
    getUser:(req,res)=>{
        getUser((err,result)=>{
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
            })
        })

    },
    updateUser:(req,res)=>{
        const body=req.body;
        const salt=genSaltSync(10); //for storing the password in encrypted format
        body.password=hashSync(body.password,salt);
        updateUser(body,(err,result)=>{
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
    deleteUser:(req,res)=>{
        const id=req.params.id;
        deleteUser(id,(err,result)=>{
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
    login:(req,res)=>{
        const body=req.body;
        getUserByEmailId(body.email,(err,result)=>{
            if(err)
            {
                console.log(err);
                return;
            }
            if(!result)
            {
                return res.json({
                     success:0,
                     message:"Invalid Email or Password"
                });
            }
            //if email is found then we will check password 
            const pass=compareSync(body.password,result.password);
            if(pass){
                result.password=undefined; 
                const jsontoken=sign({pass:result},"keyForEncripting",{
                    expiresIn:"1h"
                });
                return res.json({
                    success:1,
                    message:"Login Sucessfully",
                    token:jsontoken
                })
            }else
            {
                return res.json({
                    success:0,
                    message:"Invalid Email or Password"
               }); 
            }
        })
    }

}