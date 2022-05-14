import { customers } from "../models/signupModel.js";

// importing packages and libraries
import bcrypt from "bcrypt"

// Other file imports
import {token} from "../tokenGenerator.js"

// Login api request

export const loginFunction = async (request, response) => {
    try {
        const { emailid, password } = request.body;
        console.log("Email id is:", emailid);
        console.log("Password is:", password);

        // checking whether the user is already in db are not
        const checkUser = await customers.findOne({ emailid: emailid });
        console.log(checkUser);

        // if user is registered
        if (checkUser) {
            const{firstname,lastname}=checkUser
            const storedPassword = checkUser.password;
            console.log("Stored Password is:", password);
            const checkPassword = await bcrypt.compare(password, storedPassword);

            // check the password
            if (checkPassword) {
                const { _id } = checkUser;
                console.log("_id is:", _id);
                const finalToken = await token({ _id });
                response.send({ message: "Token is", finalToken,emailid,firstname,lastname,_id });
                return;
            }

            // if password is incorrect
            else{
                response.status(401).send({message:"Incorrect password"});
                return;
            }
        }

        // if not registred
        else {
            response.status(401).send({ message: "User is not registerd" });
            return;
        }

    } catch (error) {
        console.log("Error is:", error);
    }
}