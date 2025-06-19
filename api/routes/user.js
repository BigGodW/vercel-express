const express = require('express')
const router = express.Router()
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient()
router.get("/", async(req, res) => {
      
    // You can perform database operations here
    // For example, fetching users:
    const users = await prisma.sys_user.findMany({
    });
    console.log(users)
  res.send(users);
});

// Define a route for user-related operations
router.get("/list", (req, res) => {
  res.send("用户列表  !");
});

module.exports = router;