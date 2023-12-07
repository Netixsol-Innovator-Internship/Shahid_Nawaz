const express = require("express")
const bodyParser=require("body-parser")
const app = express();
 app.use(bodyParser.urlencoded({extended:true}))
 app.get('/',(req, res)=>{res.send("shahid is is response i send you")})
 app.listen(3000,()=>{console.log("app is listen")})
