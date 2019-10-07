import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import MeetupController from './app/controllers/MeetupController';
import authMiddleware from './app/middlewares/auth';
import Meetup from './app/models/Meetup';

const routes = new Router();
const upload = multer(multerConfig);

// User routes
routes.post('/users', UserController.store);

// Sessions routes
routes.post('/sessions', SessionController.store);

// Authentication middleware
routes.use(authMiddleware);

/* ****Authenticated routes**** */

// User routes
routes.put('/users', UserController.update);

// Files routes
routes.post('/files', upload.single('file'), FileController.store);

// Meetups routes
routes.post('/meetups', MeetupController.store);

export default routes;
