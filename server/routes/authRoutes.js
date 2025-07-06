const express = require("express");
const passport = require("passport");
const router = express.Router();
const { register, login, googleSuccess, googleFailure } = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/api/auth/google/failure" }),
  googleSuccess
);

router.get("/google/failure", googleFailure);

module.exports = router;
