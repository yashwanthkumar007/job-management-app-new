const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/User");
const jwt = require("jsonwebtoken");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/api/auth/google/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ googleId: profile.id });

        if (!user) {
          user = await User.create({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value
          });
        }

        const token = jwt.sign(
          { id: user._id, email: user.email },
          process.env.JWT_SECRET,
          { expiresIn: "7d" }
        );

        // Pass the JWT token as the user object to serialize
        return done(null, { token });
      } catch (err) {
        return done(err, false);
      }
    }
  )
);

// 🔴 This is the part you’re missing
passport.serializeUser((user, done) => {
  done(null, user); // you can choose to store just user.token or full user
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
