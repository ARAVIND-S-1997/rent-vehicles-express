// importing other files
import { customers } from "../models/signupModel.js";
import { passwordGenerator } from "../passwordGenerator.js";

// change password function
export const changePasswordFunction = async (request, response) => {
    try {
        const { id } = request.headers;
        const { newPassword } = request.body;
        console.log("emailid  is:", id);
        console.log("New password is:", newPassword);

            // generate new password
            const newHashedPassword = await passwordGenerator(newPassword);
            console.log("New hashed password:", newHashedPassword);

            // update password 
            const updatePassword = await customers.updateOne({ emailid:id }, { $set: { password: newHashedPassword } });
            if(updatePassword.modifiedCount===1){
                response.send( "Password got updated");
            }
        else {
            response.status(404).send({ message: "Can't find the user" });
        }
    } catch (error) {
        console.log("error is:", error);
    }

}