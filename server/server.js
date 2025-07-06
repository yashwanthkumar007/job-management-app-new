const dotenv = require("dotenv");
dotenv.config(); // ✅ MUST be first

const express = require("express");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
const connectDB = require("./config/db");



connectDB();

const app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(
  session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());

//const jobRoutes = require("./routes/jobs");
const jobRoutes = require("./routes/jobs");
app.use("/api/jobs", jobRoutes);
app.use("/api/jobs", require("./routes/jobs"));

const jobsRouter = require("./routes/jobs");
app.use("/api/jobs", jobsRouter);


app.use("/api/auth", require("./routes/authRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
