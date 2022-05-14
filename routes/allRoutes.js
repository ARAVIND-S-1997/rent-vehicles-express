import express from "express";

import { vehiclesFunction } from "../modules/vehiclesModule.js";
import { signupFunction } from "../modules/signupModule.js";
import { loginFunction } from "../modules/loginModule.js";
import { bookingFunction } from "../modules/bookingModule.js";
import { documentFunction } from "../modules/documentModule.js";
import { forgetPasswordFunction } from "../modules/forgetpasswordModule.js";
import { verifyFunction } from "../modules/comparepasswordModule.js";
import { changePasswordFunction } from "../modules/changepasswordModule.js";
import { myBookingsFunction } from "../modules/mybooking.js";

const router = express.Router();
export const myroutes = router;

router.get("/allvehicles", vehiclesFunction);

router.post("/signup", signupFunction);

router.post("/login", loginFunction);

router.post("/bookingdetails", bookingFunction);

router.post("/document", documentFunction);

router.post("/forgetpassword", forgetPasswordFunction);

router.get("/verify/:id", verifyFunction);

router.post("/changepassword", changePasswordFunction);

router.post("/mybookings", myBookingsFunction);



