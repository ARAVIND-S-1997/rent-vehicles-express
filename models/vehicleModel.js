import mongoose from "mongoose";

const schema=mongoose.Schema;

const vehicleSchema=new schema({
    image:{
        type:String
    },
    vehiclename:{
        type:String
    },
  catagory:{
    type:String 
    },
    noofseats:{
        type:String
    },
    noofpassengers:{
        type:String 
    },
    price:{
        type:String  
    },
})

export const vehicleModel=mongoose.model("vehicle",vehicleSchema);