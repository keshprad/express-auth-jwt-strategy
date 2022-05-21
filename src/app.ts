import dotenv from 'dotenv';
dotenv.config();
import express, { Application, Router } from 'express';
const bodyParser = require('body-parser');
const colors = require('colors');
const { jwtStrategy } = require('./strategies/jwtStrategy');
const passport = require('passport');

// create express app
const app: Application = express();
// Get port or set default port
const PORT: number = Number(process.env.PORT) || 3030;

// Middleware
// parse url encoded req: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
// passport strategies and initialization
passport.use(jwtStrategy);
app.use(passport.initialize());

// Routes
const {
  authRouter,
  dashboardRouter,
}: { authRouter: Router; dashboardRouter: Router } = require('./routes');
app.use('/auth', authRouter);
app.use('/dashboard', dashboardRouter);

// Default Route
app.get('/', async (req, res) => {
  res.send({ page: 'index', status: 200 });
});

// App startup
app.listen(PORT, () => {
  // Would also do database setup here
  console.log(colors.green(`Now listening to requests on port ${PORT}!`));
});
