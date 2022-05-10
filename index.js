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
const app = express();
const port = process.env.PORT;
app.listen(port, () => { console.log(`App is running at port:${port}`) })



// middleware
app.use(express.json());
app.use(cors());
app.use("/rentvehicles", myroutes);