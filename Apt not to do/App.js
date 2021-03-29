import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
const PORT = 8000;
import bodyParser from "body-parser";
import router from "./router.js";

import mongoClient from "./config/db.js";

mongoClient();

// create application/x-www-form-urlencoded parser
var jsonParser = bodyParser.json(bodyParser.urlencoded({ extended: false }));

// create application/json parser
app.use(bodyParser.json());

app.use("/api/v1", router);

app.listen(PORT, (error) => {
  error && console.log(error);
  console.log(`Serer is running at http://localhost:${PORT}`);
});
