import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

// User routes
routes.post('/users', UserController.store);
// Sessions routes
routes.post('/sessions', SessionController.store);

// authentication middleware
routes.use(authMiddleware);

// Authenticated user routes
routes.put('/users', UserController.update);

export default routes;
