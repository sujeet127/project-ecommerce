const pool=require("../../config/database");
module.exports={
    create:(data,callback)=>{
        pool.query(
            `insert into registration(fname,lname,email,password,phone) values(?,?,?,?,?)`,
            [
                data.fname,
                data.lname,
                data.email,
                data.password,
                data.phone

            ],(error,results,fields)=>{
                if(error)
                {
                    return callback(error);
                }
                return callback(null,results);
            }
        );
    },
    getUser:callback=>{
        pool.query(`select * from registration where ?`,[1],
        (error,result,fields)=>{
            if(error)
            {
                return callback(error);
            }
            return callback(null,result);
        });
    },
    getUserById:(id,callback)=>{
        pool.query(`select * from registration where id=?`,[id],
        (error,result,fields)=>{
            if(error)
            {
                return callback(error);
            }
            return callback(null,result[0]);
        });
    },
    updateUser:(data,callback)=>{
        pool.query(`update registration set fname=?,lname=?,email=?,password=?,phone=? where id=?`,
        [
                data.fname,
                data.lname,
                data.email,
                data.password,
                data.phone,
                data.id,
        ],
        (error,result,fields)=>{
            if(error)
            {
                return callback(error);
            }
            return callback(null,result[0]);
        });
    },
    deleteUser:(id,callback)=>{
        pool.query(`delete from registration where id=?`,[id],
        (error,result,fields)=>{
            if(error)
            {
                return callback(error);
            }
            return callback(null,result);
        }
        );
    },
    getUserByEmailId:(email,callback)=>{
        pool.query(`select * from registration where email=?`,[email],
        (error,result,fields)=>{
            if(error)
            {
                return callback(error);
            }
            return callback(null,result[0]);
        });
    }

}