const express = require("express")
const query = require("../db/db.js")
const jwt=require("jsonwebtoken")
const bcrypt =require('bcrypt')
let salt=bcrypt.genSaltSync(10) // salt:随机给密码加密，字符串长度为60，含有字符由大小写字母，特殊字符，阿拉伯数字等
var router=express.Router();

// token令牌
// auth:相当于压缩软件，如果像访问某个网页中的个人数据，
// 登录的时候，向服务器发送账号密码后由auth进行解压和解析，
// 若解析成功，服务器内有这个账号的数据，登入成功后将所有该账号内的数据进行解压，
// 若服务器内没有这个数据，则传输失败，显示登录失败
const auth=(req,res,next)=>{  
    const raw=String(req.headers.token)
    jwt.verify(raw,'token',function(err,decode){
        if(err){
            return res.json({
                msg: '令牌错误，请重新登录',
                code:403,
                ok: false,
            })
        }else{
            req.decode=decode
          next()
        }
    })
}

module.exports=router;