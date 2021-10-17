const pool=require("../../config/database");
module.exports={
    createCart:(data,callback)=>{
        pool.query(`insert into cart( product_id,product_name,model_year,price,discount,img,userid) values (?,?,?,?,?,?,?)`,
        [   
            data.product_id,
            data.product_name,
            data.model_year,
            data.price,
            data.discount,
            data.img,
            data.userid
        ],(err,result,fields)=>{
            if(err)
            {
                return callback(err);
            }
            return callback(null,result);
        });

    },
    getCart:(id,callback)=>{
        pool.query(`select * from cart where userid=?`,[id],
        (error,result,fields)=>{
            if(error)
            {
                return callback(error);
            }
            return callback(null,result);
        });

    },
    getCartById:(id,callback)=>{
        pool.query(`select * from cart where product_id=?`,[id],
        (error,result,fields)=>{
            if(error)
            {
                return callback(error);
            }
            return callback(null,result[0]);
        });
    },
    deleteCart:(id,callback)=>{
        pool.query(`delete from cart where cartid=?`,[id],
        (error,result,fields)=>{
            if(error)
            {
                return callback(error);
            }
            return callback(null,result);
        }
        );
    }
}