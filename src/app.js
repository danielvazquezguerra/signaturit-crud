import express from 'express';
import indexRoutes from './routes/index.routes';
import morgan from 'morgan';

const app = express();

app.use(indexRoutes);

//middleware

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

export default app;