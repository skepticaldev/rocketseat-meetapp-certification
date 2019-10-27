import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import MeetupController from './app/controllers/MeetupController';
import ScheduleController from './app/controllers/ScheduleController';
import SubscriptionController from './app/controllers/SubscriptionController';

// Validators
import validateUserStore from './app/validators/UserStore';
import validateUserUpdate from './app/validators/UserUpdate';
import validateSessionStore from './app/validators/SessionStore';
import validateMeetupStore from './app/validators/MeetupStore';
import validateMeetupUpdate from './app/validators/MeetupUpdate';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

// User routes
routes.post('/users', validateUserStore, UserController.store);

// Sessions routes
routes.post('/sessions', validateSessionStore, SessionController.store);

// Authentication middleware
routes.use(authMiddleware);

/* ****Authenticated routes**** */

// User routes
routes.put('/users', validateUserUpdate, UserController.update);

// Files routes
routes.post('/files', upload.single('file'), FileController.store);

// Meetups routes
routes.post('/meetups', validateMeetupStore, MeetupController.store);
routes.get('/meetups', MeetupController.index);
routes.put('/meetups/:id', validateMeetupUpdate, MeetupController.update);
routes.delete('/meetups/:id', MeetupController.delete);

// Schedule routes
routes.get('/schedule', ScheduleController.index);

// Subscriptions routes
routes.post('/meetup/:meetupId/subscriptions', SubscriptionController.store);
routes.delete('/meetup/:meetupId/subscriptions', SubscriptionController.delete);
routes.get('/subscriptions', SubscriptionController.index);

export default routes;
