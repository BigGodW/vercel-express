const express = require("express");
const app = express();
const timenew = new Date().toISOString();
app.get("/", (req, res) => res.send("Express on Vercel"+timenew));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;