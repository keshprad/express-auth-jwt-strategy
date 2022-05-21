import dotenv from 'dotenv';
dotenv.config();
const passport = require('passport');
const passportJwt = require('passport-jwt');
const ExtractJwt = passportJwt.ExtractJwt;
const JwtStrategy = passportJwt.Strategy;
import { User } from '../models';
import { findUserByID } from '../database';

let jwtOptions: any = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('JWT');
jwtOptions.secretOrKey = process.env.SECRET;

const jwtStrategy = new JwtStrategy(jwtOptions, function (jwtPayload, next) {
  // query db for user by jwt payload's id
  findUserByID(jwtPayload.id)
    .then((user: User) => {
      if (user) {
        // User found
        next(null, user);
      } else {
        // no user with this ID
        next(null, false);
      }
    })
    .catch((err) => {
      next(err);
    });
});

const authenticateJwt = passport.authenticate('jwt', { session: false });

module.exports = { jwtOptions, jwtStrategy, authenticateJwt };
