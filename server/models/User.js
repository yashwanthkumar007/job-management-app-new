const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String }, // ❌ do NOT use `required: true` here
  googleId: { type: String }
});

userSchema.pre("validate", function (next) {
  if (!this.password && !this.googleId) {
    this.invalidate("password", "Either password or googleId is required.");
  }
  next();
});

module.exports = mongoose.model("User", userSchema);
