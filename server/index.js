require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const c = require("./controller");
const massive = require("massive");
const chalk = require("chalk");
const path = require("path");

const { SERVER_PORT, CONNECTION_STRING } = process.env;

const app = express();

app.use(express.static(`${__dirname}/../build`));

app.use(bodyParser.json());

massive(CONNECTION_STRING).then((db) => {
  console.log(chalk.magenta("The Database has Connected!"));
  app.set("db", db);
});

app.get("/api/builds", c.getAllBuilds);
app.put(
  "/api/updatebuild/:id/:buildPrice/:shippingPrice/:sellPrice",
  c.updatebuild
);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(SERVER_PORT, () =>
  console.log(chalk.cyan(`POWER LEVEL OVER ${SERVER_PORT}!!!!!!!`))
);
