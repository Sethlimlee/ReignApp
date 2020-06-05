// require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const c = require("./controller");
const massive = require("massive");
const chalk = require("chalk");
const path = require("path");

// const { SERVER_PORT, CONNECTION_STRING } = process.env;

const app = express();
// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "client/build")));
// Anything that doesn't match the above, send back index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.use(bodyParser.json());

massive(
  "postgres://limdvhowehcheu:0ed628baf48e4fdf60a46938539e0eb97e1fc4c415eeaf1ea32bb62150776513@ec2-34-195-169-25.compute-1.amazonaws.com:5432/d10qs21ppq6tfg?ssl=true"
).then((db) => {
  console.log(chalk.magenta("The Database has Connected!"));
  app.set("db", db);
});

app.get("/api/builds", c.getAllBuilds);
app.put(
  "/api/updatebuild/:id/:buildPrice/:shippingPrice/:sellPrice",
  c.updatebuild
);

app.listen(3005, () =>
  console.log(chalk.cyan(`POWER LEVEL OVER ${3005}!!!!!!!`))
);
