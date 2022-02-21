import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import request from '../middleware/request';
import response from '../middleware/response';
import authentication from '../middleware/authentication';
import apiRouter from '../routes/api';
import authRouter from '../routes/auth';
import '../model';

const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(request);
app.use(response);
app.use(express.urlencoded({ extended: false }));
app.use('/auth', authRouter);
app.use(authentication);
app.use('/api', apiRouter);

export default app;
