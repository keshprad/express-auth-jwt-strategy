import express, { Router } from 'express';
import { findUserByEmailAndPass } from '../database';
const jwt = require('jsonwebtoken');
const { jwtOptions } = require('../strategies/jwtStrategy');

const router: Router = express.Router();

router.post('/login', (req, res) => {
  // if the body has an email and password
  if (req.body.email && req.body.password) {
    // query db for the user specified by the email and pass
    findUserByEmailAndPass(req.body.email, req.body.password)
      .then((user) => {
        if (user) {
          // login info is correct
          const payload = { id: user.userid };
          // Use jwt package to create a signed JWT token with payload and secret/key
          const token = jwt.sign(payload, jwtOptions.secretOrKey);
          res.status(200).json({ message: 'OK', token });
        } else {
          res.status(401).json({ message: 'Incorrect email or password' });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(401);
      });
  }
});

module.exports = router;
