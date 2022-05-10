import express from "express";

import { vehiclesFunction } from "../modules/vehiclesModule.js";


const router = express.Router();
export const myroutes = router;

router.get("/allvehicles", vehiclesFunction);