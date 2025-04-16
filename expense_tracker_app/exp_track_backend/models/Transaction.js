const mongoose=require("mongoose");

const TransactionSchema=new mongoose.Schema({
    id: Number,
    description: String,
    amount: Number,
    category: String,
    date:{
        type: String,
        default:Date.now,
    },
});

module.exports=mongoose.model("Transaction",TransactionSchema);