// importing packages and libraries

import jwt from "jsonwebtoken"

// function to create token

export async function token(value){
    console.log("value is:",value)
    const genToken=await jwt.sign(value,process.env.SECRET_KEY,{expiresIn: '10h'});
    console.log("final token is :",genToken)
    return genToken

}