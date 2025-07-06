const dotenv = require("dotenv");
dotenv.config(); // ✅ MUST be first

const express = require("express");
const cors = require("cors");
const session = require("express-session");
const connectDB = require("./config/db");

// Connect to MongoDB
connectDB();

const app = express();

// ✅ CORS for your deployed client
app.use(
  cors({
    origin: "https://job-management-app-new-client.onrender.com",
    credentials: true,
  })
);

app.use(express.json());

// ✅ If you are not using passport, remove these lines
// const passport = require("passport");
// app.use(passport.initialize());
// app.use(passport.session());

app.use(
  session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.get("/", (req, res) => {
  res.send("Server is running!");
});

// ✅ Only mount routes **once**
app.use("/api/jobs", require("./routes/jobs"));
app.use("/api/auth", require("./routes/authRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
