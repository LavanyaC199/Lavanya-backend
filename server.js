// server.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// CORS – allow frontend
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
  })
);

// Routes
const authRoutes = require("./routes/authRoutes");

// Base path: /api/auth
app.use("/api/auth", authRoutes);

// Health check (for Render + manual test)
app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});

// Port – 5000 locally, Render will inject its own PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
