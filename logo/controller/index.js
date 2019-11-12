const mysql=require('mysql');

let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  port:'3306',
  database : 'work'
});
connection.connect((error)=>{
    if(error){
        console.log('数据库连接失败')
    }else{
        console.log('数据库连接成功')
    }
});

const query=sql=>{
    return new Promise((resolve,reject)=>{
        connection.query(sql,(error,results)=>{
            if(error){
                reject(error)
            }else{
                resolve(results)
            }
        })
    })
}

module.exports=query;