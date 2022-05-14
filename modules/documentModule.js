import { customers } from "../models/signupModel.js";

import jwt from "jsonwebtoken"


export const documentFunction = async (request, response) => {
    try {

        const { token, emailid, unique } = request.headers;
        console.log("Token is (Document function):", token);
        console.log("Email id is (Document function):", emailid);
        console.log("Unique is (Document function):", unique);

        const { images } = request.body;
        const document1 = (images[0]);
        const document2 = (images[1]);
        const document3 = (images[2]);
        console.log(document1)
        console.log(document2)
        console.log(document3)

        // console.log("Images (Document function) :", images);

        const check = jwt.verify(token, process.env.SECRET_KEY);
        if (check) {
            const updateDocument = await customers.updateOne({ emailid: emailid, "bookingdetails.aadharno": unique },
                {
                    $push: {
                        "bookingdetails.$.proofdocuments": { document1: document1, document2: document2, document3: document3 }
                    }
                }
            )
            if(updateDocument.modifiedCount===1)
            response.status(200).send("document got added")
        }
    } catch (error) {
        console.log("Error is (Document function) :", error);
    }
}
