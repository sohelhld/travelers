const express = require('express');
const { travelerModel } = require('../models/user.model');
// const { employModel } = require('../models/addEmploy.models');

const travelerRouter = express.Router()

//creat
travelerRouter.post("/addtraveler",async(req,res)=>{
    const payload = req.body
    try {      
        const data = new travelerModel(payload)
        await data.save()
        res.status(200).send({message:"New traveler is added"})
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})

//read
travelerRouter.get("/gettraveler",async(req,res)=>{
    // const payload = req.body

    const {budget,destination}=req.query
    const query ={}
    if(budget){
        query.budget =budget
    }

    // if(maxSalary){
    //   if(query.salary){
    //     query.salary.$lte=maxSalary
    //   }else{
    //     query.salary={$lte:maxSalary}
    //   }   
    // }


    if(destination){
       query.destination =destination
    }

    // console.log(query);


    try {      
        const data = await travelerModel.find(query)
        
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})

//update
travelerRouter.patch("/updatetraveler/:id",async(req,res)=>{
     const {id} = req.params
     const payload=req.body
    try {      
        const data = await travelerModel.findByIdAndUpdate({_id:id},payload);
        
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})

travelerRouter.delete("/deletetraveler/:id",async(req,res)=>{
    const {id} = req.params
   try {      
       const data = await travelerModel.findByIdAndDelete({_id:id});
       
       res.status(200).send({message:"traveler is deleted"})
   } catch (error) {
       res.status(400).send({message:error.message})
   }
})




module.exports={
    travelerRouter
}