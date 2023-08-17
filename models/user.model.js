const mongoose = require('mongoose');

const travelerSchema = mongoose.Schema({
   
    name:{type:String,require:true},
    email:{type:String,require:true},
    destination :{type:String,
        require:true,
        default:"Tech",
        enum:["India", "Africa", "Europe", "America"]
    },
    travelers:{type:Number,require:true},
    budget :{type:Number,require:true}

},{
    versionKey:false
})

const travelerModel = mongoose.model("traveler",travelerSchema)

module.exports={
    travelerModel
}