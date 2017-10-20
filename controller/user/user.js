
const mysql = require('../../mysql/sqls');
const sqlFunc = require('../../mysql/func');

let fitInfo; // sql 配置数组
let query;   // sql 语句

module.exports = {

    login (req, res, next) {
        sqlFunc.haveEmptyQuery({name: 'ss', age: 15}, {name: 'ss', like: 'xx'}, (flag, variable) => {
            if(flag){
                sqlFunc.response(res, 3, `${variable}不能为空`);
            }else{
                fitInfo = ['test', req.query.name];
                sqlFunc.connect(mysql.common.queryAll, fitInfo, (err, rows) => {
                    if(rows){
                        query = `INSERT INTO test (name, age) VALUES ('${req.query.name}', ${req.query.age})`;
                        fitInfo = [];
                        sqlFunc.connect(query, fitInfo, (err, rows) => {
                            sqlFunc.response(res, 1, "", rows); 
                        });
                    }
                });
            }
        });
    },

    register (req, res, next) {
        res.send({name: 'resigter'});
    }
}