const express = require("express");
const app = express();
const timenew = new Date().toISOString();
app.get("/", (req, res) => res.send("Express on Vercel"+timenew));

const userRouter = require("./routes/user");
app.use("/user", userRouter);

module.exports = app;