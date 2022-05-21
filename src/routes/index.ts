import { Router } from 'express';

const authRouter: Router = require('./auth');
const dashboardRouter: Router = require('./dashboard');

export { authRouter, dashboardRouter };
