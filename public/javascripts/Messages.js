const moment = require("moment");

const messages = [
  {
    title: "title1",
    description: "description1",
    username: "username1",
    added: moment().format("LT"),
  },
  {
    title: "title2",
    description: "description2",
    username: "username2",
    added: moment().format("LT"),
  },
];

module.exports = messages;
