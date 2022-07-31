const mysql2 = require("mysql2");
const express = require("express");
const bodyparser = require("body-parser");
var app = express();
const cors = require("cors");
const router = express.Router();

//configuring express server
app.use(bodyparser.json());

const db = require("./models");

//Allowed paths
const corsOptions = {
  origin: "http://localhost:5001",
  origin: "http://localhost:5000",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

//mysql details
var mysqlConnection = mysql2.createConnection({
  host: "localhost",
  user: "root",
  database: "newblog",
  multipleStatements: true,
});
mysqlConnection.connect((err) => {
  if (err) console.log("connection established succesfully");
  else console.log("connection failed!" + JSON.stringify(err, undefined, 2));
});

const userRouter = require("./routes/userRoute.js");
app.use("/register", userRouter);
//port environment variable

db.sequelize.sync().then(() => {
  const port = process.env.PORT || 5001;
  app.listen(port, () => console.log("server listening on port " + port));
});
