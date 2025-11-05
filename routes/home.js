import express from 'express';
import * as home from '../controllers/home.js';

export const homeRouter = express.Router()

// Below are all the routes for the home
homeRouter.get('/', home.index);
homeRouter.get('/form', home.form);
homeRouter.get('/text', home.text)
homeRouter.post('/submit', home.submit);
homeRouter.post('/read', home.read);
homeRouter.post('/save', home.save);




