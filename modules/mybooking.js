

import { customers } from "../models/signupModel.js";
import jwt from "jsonwebtoken"


export const myBookingsFunction = async(request,response) => {
    try {
        const { token, emailid } = request.headers;
        console.log("Token is (My booking  function):", token);
        console.log("Email id is (My booking  function):", emailid);

        const check = jwt.verify(token, process.env.SECRET_KEY);
        if (check) {
            const findReq = await customers.findOne({ emailid: emailid },{_id: 0, firstname: 0, lastname: 0, emailid: 0, dob: 0, password: 0})
            .populate("bookingdetails.vehiclename")
            response.send(findReq);
        }
    } catch (error) {
        console.log("Error is(My booking function):", error);
    }
}