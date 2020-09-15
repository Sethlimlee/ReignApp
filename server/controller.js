const chalk = require("chalk");
module.exports = {
  getAllBuilds: (req, res) => {
    const db = req.app.get("db");

    db.get_all_builds().then((response) => {
      res.status(200).send(response);
    });
  },
  updatebuild: (req, res) => {
    const db = req.app.get("db");
    const { id, buildPrice, transactionFee, sellPrice } = req.params;

    db.update_build([id, buildPrice, transactionFee, sellPrice]).then(
      (response) => {
        res.status(200).send(response);
      }
    );
  },
};
