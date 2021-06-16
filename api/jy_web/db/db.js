const mysql = request('mysql')
// createPool 创建连接池
const pool = mysql.createPool({
    host: 'gz-cdb-ezbqu8zn.sql.tencentcdb.com',
    prot:'58587',   // 端口号
    user: 'root',
    password: 'luotianyi0712', 
    databese: 'jy', // 数据库
    connectionLimit: 1000,   // 最大连接池
    timeout: 3600, // 超时时间
    timezone:'08:00',   // 对应的时区
})

// callback 回调函数
const query = function (sql, sqlParams, callback) {
    pool.getConnection((conn, err) => {
        if (err) {
            // 连接失败时回调
            callback(err,null,null)
        }
        else {
            // conn 连接对象 
            // query方法 连接对象内部的方法
            conn.query(sql, sqlParams, (err, value, fields) => {
                // 归还连接对象
                conn.release();
                callback(err,value,fields)
            })
        }
    })
}

// module.exports  返回的是模块对象本身，返回的是一个类
  module.exports = query