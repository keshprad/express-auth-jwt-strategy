import dotenv from 'dotenv';
dotenv.config();
const passportJwt = require('passport-jwt');
const ExtractJwt = passportJwt.ExtractJwt;
const JwtStrategy = passportJwt.Strategy;
import { User } from '../models';
import { findUserByID } from '../database';

let jwtOptions: any = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
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

module.exports = { jwtOptions, jwtStrategy };
