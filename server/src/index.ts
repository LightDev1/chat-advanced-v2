import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { userRoutes } from './routes';

const app = express();

import './core/db';

app.use(express.json());

app.use(userRoutes);

const PORT = process.env.PORT || 9999;

app.listen(PORT, () => {
    console.log(`Сервер запущен на порте ${PORT}`);
});