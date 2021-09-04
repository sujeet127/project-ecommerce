const pool=require("../../config/database");
module.exports={
    createProduct:(data,callback)=>{
        pool.query(`insert into products( product_name,model_year,price,discount,img) values (?,?,?,?,?)`,
        [
            data.product_name,
            data.model_year,
            data.price,
            data.discount,
            data.img
        ],(err,result,fields)=>{
            if(err)
            {
                return callback(err);
            }
            return callback(null,result);
        });

    },
    getProducts:(callback)=>{
        pool.query(`select * from products where ?`,[1],
        (error,result,fields)=>{
            if(error)
            {
                return callback(error);
            }
            return callback(null,result);
        });

    },
    getProductById:(id,callback)=>{
        pool.query(`select * from products where product_id=?`,[id],
        (error,result,fields)=>{
            if(error)
            {
                return callback(error);
            }
            return callback(null,result[0]);
        });
    },
    getProductByName:(name,callback)=>{
        pool.query(`select * from products where product_name like "?%"`,[name],
        (error,result,fields)=>{
            if(error)
            {
                return callback(error);
            }
            return callback(null,result);
        });
    },
    updateProduct:(data,callback)=>{
        pool.query(`update products set product_name=?,model_year=?,price=?,discount=?,img=? where product_id=?`,
        [
            data.product_name,
            data.model_year,
            data.price,
            data.discount,
            data.img,
            data.product_id
        ],
        (error,result,fields)=>{
            if(error)
            {
                return callback(error);
            }
            return callback(null,result[0]);
        });
    },
    deleteProduct:(id,callback)=>{
        pool.query(`delete from products where product_id=?`,[id],
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