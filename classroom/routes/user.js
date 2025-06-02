const express = require("express");
const router = express.Router();

//Index route : for Users
router.get("/", (req, res) => {
  res.send("GET for Users");
});

//Show route : for Users
router.get("/:id", (req, res) => {
  res.send("GET for Show User id");
});

//Post route : for Users
router.post("/", (req, res) => {
  res.send("POST for users");
});

//Delete route : for Users
router.delete("/:id", (req, res) => {
  res.send("DELETE for user id");
});

module.exports = router;
