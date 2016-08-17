var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var User = require('../models/user.js');

passport.use(new LocalStrategy({
  usernameField: 'email'
},
  function(username, password, done){
    User.findOne({email: username}, function(err, user){
      if(err){
        // return res.status(500).json({
        //   msg: 'bad things happened'
        // })
        return done(err);
      }
      if(!user){
        // return res.status(404).json({
        //   msg : 'user not found'
        // })
        return done(null, false);
      }
      if(!user.validPassword(password)){
        // return res.status(403).json({
        //   msg: 'username or password incorrect'
        // })
        return done(null, false, {
          msg: 'password or username is incorrect'
        });
      }
      // return res.status(200).json({
      //   user: user
      // })
      return done(null, user);
    });
  }
));
