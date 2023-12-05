import express  from "express";
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js';
import indexRoutes from './routes/index.routes.js';
import tasksRoutes from './routes/tasks.routes.js';
import cookieParser from 'cookie-parser';

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api',authRoutes);
app.use('/api',tasksRoutes);
app.use(indexRoutes);



export default app;
