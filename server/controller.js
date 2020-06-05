const chalk = require("chalk");
module.exports = {
  getAllBuilds: (req, res) => {
    const db = req.app.get("db");

    db.get_all_builds().then((response) => {
      res.status(200).send(response);
    });
  },
};
