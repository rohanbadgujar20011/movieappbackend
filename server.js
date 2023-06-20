const express=require("express");
const path = require("path");
const app=express();
const userRoute=require("./Routes")
app.use(express.json())
const cors=require("cors")
app.use(cors())
const ConnectDb=require("./Connection")
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
const Port=process.env.PORT||5000
app.get("/",(req,res)=>{
    res.send("Hii i am live")
})
const start= async ()=>{
    try {
        await ConnectDb();
        app.listen(Port,()=>{
            
            console.log(`${Port} is Live`);
        })
    } catch (error) {
        console.log(error);
    }
   
}
app.use(userRoute);

start();