import { customers } from "../models/signupModel.js";

import jwt from "jsonwebtoken"

export const bookingFunction = async (request, response) => {
    try {
        const { token, emailid } = request.headers;
        console.log("Token is (Booking function):", token);
        console.log("email id is (Booking function):", emailid);

        const check = jwt.verify(token, process.env.SECRET_KEY);
        if (check) {

            const addBookingDetails = await customers.updateOne({ emailid },
                {
                    $push: {
                        bookingdetails: {
                            vehiclename:request.body.vehiclename,
                            name: request.body.name,
                            contactno: request.body.contactno,
                            alternativeno: request.body.alternativeno,
                            address: request.body.address,
                            drivinglicenceno: request.body.drivinglicenceno,
                            aadharno: request.body.aadharno,
                            location:request.body.location,
                            state:request.body.state
                        }
                    }
                });
            if (addBookingDetails.modifiedCount === 1) {
                response.send(request.body.aadharno);
            }
        }
        else {
            response.status(400).send("Invalid autherization");
        }
    } catch (error) {
        console.log("Error is (Booking function) :", error);
    }
}

