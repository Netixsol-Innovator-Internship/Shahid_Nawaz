const express=require("express")
const app=express();
require("./connection/conn")

app.get('/',(req,res)=>{
    res.send("hello worl")
})

app.listen("3000",function(){
    console.log("server start")
})