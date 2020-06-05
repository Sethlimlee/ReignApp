require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const c = require("./controller");
const massive = require("massive");
const chalk = require("chalk");

const { SERVER_PORT, CONNECTION_STRING } = process.env;

const app = express();

app.use(bodyParser.json());

massive(CONNECTION_STRING).then((db) => {
  console.log(chalk.magenta("The Database has Connected!"));
  app.set("db", db);
});

app.get("/api/builds", c.getAllBuilds);

app.listen(SERVER_PORT, () =>
  console.log(chalk.cyan(`POWER LEVEL OVER ${SERVER_PORT}!!!!!!!`))
);
