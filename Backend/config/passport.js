const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const User = require("../models/User");

require('dotenv').config();

passport.serializeUser((user, done) => {
  done(null, user.id); // Serialize the MongoDB user ID
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

// Google Strategy
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL ,
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      let user = await User.findOne({ oauthId: profile.id, oauthProvider: "google" });
      if (!user) {
        user = await User.create({
          name: profile.displayName,
          email: profile.emails[0].value,
          oauthProvider: "google",
          oauthId: profile.id,
        });
      }
      return done(null, user);
    } catch (err) {
      return done(err, null);
    }
  }
));

// Facebook Strategy
passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL,
    profileFields: ["id", "displayName", "emails"]
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      let user = await User.findOne({ oauthId: profile.id, oauthProvider: "facebook" });
      if (!user) {
        user = await User.create({
          name: profile.displayName,
          email: profile.emails?.[0]?.value || "",
          oauthProvider: "facebook",
          oauthId: profile.id,
        });
      }
      return done(null, user);
    } catch (err) {
      return done(err, null);
    }
  }
));
