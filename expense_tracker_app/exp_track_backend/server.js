const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
require("dotenv").config();

const app=express();
app.use(cors());
app.use(express.json());


const Backend_Url=process.env.URL || 5000;
const Mongo_Uri=process.env.MONGO_URI;

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB connected"))
.catch((err)=>console.log(err));

app.use("/api/transactions",require("./routes/transactions"));

app.listen(Backend_Url,()=>{
    console.log(`Server running on port ${Backend_Url}`);
});