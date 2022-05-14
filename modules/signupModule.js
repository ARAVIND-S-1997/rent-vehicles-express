

// other file imports
import { customers } from "../models/signupModel.js";
import { passwordGenerator } from "../passwordGenerator.js";

// signup api call

export const signupFunction = async (request, response) => {
    try {
        // finding whether the user is present or not

        const check = await customers.findOne({ emailid: request.body.emailid });

        // if user is already registered

        if (check) {
            response.status(422).send({ message: "email id already exist" });
            return;
        }
        // if not

        else {
            const { password } = request.body;
            console.log("password is:", password);
            const finalPassword = await passwordGenerator(password);
            const data = new customers({
                firstname: request.body.firstname,
                lastname: request.body.lastname,
                dob: request.body.dob,
                emailid: request.body.emailid,
                password: finalPassword
            });
            const opertion = await data.save();
            response.send({ message: "Successfully signed up" });
        }

    } catch (error) {
        console.log(error);
    }

}