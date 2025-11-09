require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: "5mb" }));

// Connect to DB
connectDB(process.env.MONGO_URI);

// Routes
app.use("/api/articles", require("./routes/articles"));

// Health
app.get("/api/health", (req, res) => res.json({ status: "ok" }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
