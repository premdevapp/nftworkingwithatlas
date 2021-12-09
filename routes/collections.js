const router = require("express").Router();

const collection = require("../model/collections");

router.get("/all", async (req, res) => {
  const response = await collection.find({});
  console.log(response);
});

module.exports = router;
