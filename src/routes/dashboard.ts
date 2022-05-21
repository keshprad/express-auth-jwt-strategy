import express, { Router } from 'express';
const { authenticateJwt } = require('../strategies/jwtStrategy');

const router: Router = express.Router();

router.get('/user', authenticateJwt, function (req: any, res) {
  res.json(req.user);
});

module.exports = router;
