const express = require("express");
const cors = require("cors");
const employeeRoutes = require("./routes/employeeRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/employees", employeeRoutes);

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

module.exports = app;