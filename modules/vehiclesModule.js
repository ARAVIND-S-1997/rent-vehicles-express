
import { vehicleModel } from "../models/vehicleModel.js";

export async function vehiclesFunction(request, response) {
    try {
        const getReq = await vehicleModel.find()
        response.status(200).send(getReq);
    } catch (error) {
        console.log("Error is (Get all Vehicle function):", error);
    }
}