import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { userRoutes } from './routes';
import { checkAuth } from './middlewares';

const app = express();

import './core/db';

app.use(express.json());
app.use(checkAuth);

app.use(userRoutes);

const PORT = process.env.PORT || 9999;

app.listen(PORT, () => {
    console.log(`Сервер запущен на порте ${PORT}`);
});