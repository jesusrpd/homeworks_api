import {Router} from 'express';
import * as controllers from '../controllers/user.controller';
const route = Router();

//Routes for user creation and login
route.post('/signup', controllers.signup);

route.post('/login');