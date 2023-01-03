var express = require("express");
var router = express.Router();
const moment = require("moment");
const messages = require("../public/javascripts/Messages");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "message Board", messages: messages });
});

router.post("/new", (req, res, next) => {
  messages.push({
    title: req.body.title,
    description: req.body.description,
    username: req.body.username,
    added: moment().format("LT"),
  });
  res.redirect("/");
});
module.exports = router;
