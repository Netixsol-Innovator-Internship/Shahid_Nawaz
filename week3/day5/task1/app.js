const express = require("express")
const bodyParser=require("body-parser")
const ejs = require('ejs')
const app = express();
app.set('view engine', 'ejs');
 app.use(bodyParser.urlencoded({extended:true}))
 var items=[]
 app.get('/',(req, res)=>{
    // let today=new Date();
    // console.log(today)
    // let day = today.getDay();
    // console.log(day)
    // let time= today.getTime()
    // console.log(time)
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let today  = new Date();
    let day=today.toLocaleDateString("en-US", options)
    res.render("index",{today:day , newItemList:items})
})
// ... (your existing code)

app.delete('/delete/:index', (req, res) => {
    const index = req.params.index;
    if (index >= 0 && index < items.length) {
        items.splice(index, 1);
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

// ... (your existing code)

app.post("/",(req, res)=>{
   let item=req.body.newItem
   items.push(item)
    res.redirect("/")
})


 app.listen(3000,()=>{console.log("app is listen")})
