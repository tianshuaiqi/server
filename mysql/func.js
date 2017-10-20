const mysql = require('mysql');
const db = require('../config/database');
const pool = mysql.createPool(db);


module.exports = {
    connect (sql, val, cb) {

        pool.getConnection( (err, connect) => {

            connect.query(sql, val , (err, rows) => {
                
                if (err) {
                    console.log(err);
                }

                cb (err, rows);

                connect.release();
            })
            
        })
    },

    response(res, code = 0, msg = 'ok', data = null){

        let response = {code, msg, data};
        
        if(!data){
            delete response.data
        }

        res.send(response);
    },

    haveEmptyQuery(reqObj, aimObj, cb){

        let flag, 
            variable;

        for(let k in aimObj){

            if(reqObj[k] === undefined){

                flag = 1;

                variable = aimObj[k];
                
                break;
            }
        }

        cb(flag, variable);
    }
};;