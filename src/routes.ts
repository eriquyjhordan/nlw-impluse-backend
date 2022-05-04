import express from 'express';
import { feedBacksController } from './controllers/feedbacks.controler';

const routes = express.Router();

routes.post('/feedbacks', feedBacksController.store);

export default routes;