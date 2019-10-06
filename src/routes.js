import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

// User routes
routes.post('/users', UserController.store);

// Sessions routes
routes.post('/sessions', SessionController.store);

// Authentication middleware
routes.use(authMiddleware);

/* **Authenticated routes** */

// User routes
routes.put('/users', UserController.update);

// Files routes
routes.post('/files', upload.single('file'), (req, res) => {
  return res.json({ ok: true });
});

export default routes;
