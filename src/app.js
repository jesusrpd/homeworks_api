import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import pkg from '../package.json';
import userRoutes from './routes/user.routes';
import homeworksRoutes from './routes/homeworks.routes';
const app = express();

//Middlewares from configuration
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan("dev"));
app.use(cors());

//Route from home
app.set('pkg', pkg);
app.get('/', (req, res)=>{
    res.send({
        nameAPI: app.get('pkg').name,
        description: app.get('pkg').description,
        version: app.get('pkg').version,
        author: app.get('pkg').author,
        repositories: app.get('pkg').repository
    });
});

//Routes from the api
app.use('/api/user', userRoutes);
app.use('/api/homeworks', homeworksRoutes);

export default app;