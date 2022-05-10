// Other imports

import express from "express";
import cors from "cors"
import dotenv from "dotenv";
dotenv.config();

// files imports
import { mongoconnection } from "./mongooseConnection.js"
import { myroutes } from "./routes/allRoutes.js"


// express and mongo connection
await mongoconnection();
const application = express();
const port = process.env.PORT;
application.listen(port, () => { console.log(`App is running at port:${port}`) })



// middleware

application.use(cors({origin: "http://localhost:3000"}));
application.use(express.json());
application.use("/rentvehicles", myroutes);