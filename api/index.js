const app = require('../server')
const timenew = new Date().toISOString();
app.get("/", (req, res) => res.send("Express & Vercel"+timenew));

const userRouter = require("./routes/user");
app.use("/user", userRouter);

module.exports = app;