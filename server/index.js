require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const c = require("./controller");
const massive = require("massive");
const chalk = require("chalk");
const path = require("path");

const { PORT, CONNECTION_STRING } = process.env;

const app = express();
// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "reignapp/build")));
// Anything that doesn't match the above, send back index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/reignapp/build/index.html"));
});

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

app.listen(PORT || 3005, () =>
  console.log(chalk.cyan(`POWER LEVEL OVER ${PORT}!!!!!!!`))
);
