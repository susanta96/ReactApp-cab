var express = require("express"),
    path = require('path');

  router = express.Router();


router.get("/cabs", (req, res) => {
  if (req) {
    db.query("SELECT * FROM cabs", function (err, result) {
      if (err) throw err;

      res.send(result);
    });
  }

});









module.exports = router;
