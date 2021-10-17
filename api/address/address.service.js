const pool=require("../../config/database");
module.exports={
    createAddress:(data,callback)=>{
        pool.query(`insert into address(country,name,street,city,state,pincode,email,phone,userid) values (?,?,?,?,?,?,?,?,?)`,
        [   
            data.country,
            data.name,
            data.street,
            data.city,
            data.state,
            data.pincode,
            data.email,
            data.phone,
            data.userId
        ],(err,result,fields)=>{
            if(err)
            {
                return callback(err);
            }
            return callback(null,result);
        });

    },
    getAddress:(id,callback)=>{
        pool.query(`select * from address where userid=?`,[id],
        (error,result,fields)=>{
            if(error)
            {
                return callback(error);
            }
            return callback(null,result);
        });

    },
    getAddressById:(id,callback)=>{
        pool.query(`select * from address where address_id=?`,[id],
        (error,result,fields)=>{
            if(error)
            {
                return callback(error);
            }
            return callback(null,result[0]);
        });
    },
    deleteAddress:(id,callback)=>{
        pool.query(`delete from address where address_id=?`,[id],
        (error,result,fields)=>{
            if(error)
            {
                return callback(error);
            }
            return callback(null,result);
        }
        );
    },
    updateAddress:(data,callback)=>{
        pool.query(`update address set country=?,name=?,street=?,city=?,state=?,pincode=?,email=?,phone=?,userid=?  where address_id=?`,
        [
            data.country,
            data.name,
            data.street,
            data.city,
            data.state,
            data.pincode,
            data.email,
            data.phone,
            data.userId,
            data.address_id
        ],
        (error,result,fields)=>{
            if(error)
            {
                return callback(error);
            }
            return callback(null,result[0]);
        });
    },
}