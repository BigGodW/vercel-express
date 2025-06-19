const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
  res.send("用户管理  !");
});

// Define a route for user-related operations
router.get("/list", (req, res) => {
  res.send("用户列表  !");
});

module.exports = router;