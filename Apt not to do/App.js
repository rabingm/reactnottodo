import express from "express";
const app = express();
const PORT = 9000;
import path from "path";
import bodyParser from "body-parser";
import router from "./router.js";

// create application/x-www-form-urlencoded parser
var jsonParser = bodyParser.json(bodyParser.urlencoded({ extended: false }));

// create application/json parser
app.use(bodyParser.json());

const __dirname = path.resolve();

app.use("/api/vi", router);

app.listen(PORT, (error) => {
  error && console.log(error);
  console.log(`Serer is running at http://localhost:${PORT}`);
});
