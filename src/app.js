import express from 'express';
import indexRoutes from './routes/index.routes';
import path from 'path';
import morgan from 'morgan';
import fileUpload from 'express-fileupload';


const cors = require('cors');

const app = express();
app.use(cors());

app.set('views', path.join(__dirname, 'views'));

app.use(indexRoutes);
app.use(fileUpload());

//middleware

app.use(morgan('dev')); 
// app.use(express.urlencoded({extended: false}));

export default app;