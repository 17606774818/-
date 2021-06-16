const express = require('express')
const app = express()

app.listen(1818, ()=>{

})  

const bodyParser = require('body-parser')
//  公共系统初始化
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
