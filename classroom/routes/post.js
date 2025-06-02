const express = require("express");
const router = express.Router();

//posts
//Index route
router.get("/", (req, res) => {
  res.send("GET for posts");
});

//Show route
router.get("/:id", (req, res) => {
  res.send("GET for Show post id");
});

//Post route
router.post("/", (req, res) => {
  res.send("POST for posts");
});

//Delete route
router.delete("/:id", (req, res) => {
  res.send("DELETE for post id");
});

module.exports = router;
