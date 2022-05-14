// importing other packages and libraries
import { token } from "../tokenGenerator.js";

// other file imports
import { customers } from "../models/signupModel.js";
import { emailsender } from "../mail.js";


// forget password api call

export const forgetPasswordFunction = async (request, response) => {
    try {
        const { emailid } = request.body;
        console.log("Email id is:", emailid);
        const checkUser = await customers.findOne({ emailid });
        console.log("customer details:", checkUser);
        if (checkUser) {
            const { _id } = checkUser;
            console.log("_id is:", _id);

            const tempPassword = await token({ _id });
            console.log("Temporary password is:", tempPassword);

            const updatePassword = await customers.updateOne({ emailid }, { $set: { password: tempPassword } });
            if (updatePassword.modifiedCount === 1) {
                response.send({ message: "Temporary password got updated" });
            }

            // Password reset link
            // local
            // const resetLink = `http://localhost:5000/rentvehicles/verify/${tempPassword}`

            // heroku
            const resetLink = `https://vehicle-rent-app.herokuapp.com/rentvehicles/verify/${tempPassword}`
            // email message
            const message = (
                `<p>Hai there 😊 link to reset the password</p>
      <a href=${resetLink}> Click here to reset your password </a>`
            );
            emailsender(emailid, message);

            return;
        }
        else {
            response.send({ message: "Email id is not registered" })
        }
    } catch (error) {
        console.log("Error is:", error);
    }


}