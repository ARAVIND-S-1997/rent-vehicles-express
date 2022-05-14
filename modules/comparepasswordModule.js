import { customers } from "../models/signupModel.js";

export const verifyFunction = async (request, response) => {
    try {
        const { id } = request.params;
        console.log("Id is (verification function):", id);

        const check=await customers.findOne({password:id});
        if(check){
            const {emailid}=check
            // response.redirect(`http://localhost:3000/changepassword/${emailid}`);
            response.redirect(`https://tranquil-semolina-78992c.netlify.app/changepassword/${emailid}`);
            console.log("redirected")
        }else{
            response.status(404);
        }
    } catch (error) {
        console.log("Error is (verification function):", error);
    }
}

