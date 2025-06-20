const express = require('express')
const router = express.Router()
const prisma = require('../../prisma/prisma.js');

router.get("/", async (req, res) => {

  // You can perform database operations here
  // For example, fetching users:
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }

});

// Define a route for user-related operations
router.get("/list", (req, res) => {
  res.send("用户列表  !");
});

module.exports = router;