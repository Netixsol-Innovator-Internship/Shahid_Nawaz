const mongoose =  require("mongoose");
const conn = async (req, res)=>{
try {
    await mongoose.connect("mongodb+srv://shahid:shahid123@cluster0.0wbrvhy.mongodb.net/").then(()=>{
        console.log("connected successfully")
    })
} catch (error) {
    res.status(400).json({
        message:"not connected"
    })
}
}   
conn();