const express=require("express");
const router=express.Router();
const Transaction=require("../models/Transaction");

router.get("/",async(req,res)=>{
    const transactions=await Transaction.find();
    res.json(transactions);
});

router.post("/",async(req,res)=>{
    const transaction=new Transaction(req.body);
    await transaction.save();
    res.status(201).json(transaction);
});

router.delete("/:id",async(req,res)=>{
    await Transaction.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

module.exports=router;