import {Router} from 'express';
import * as controllers from '../controllers/user.controller';
import userExist from '../middlewares/userExist';
const route = Router();

//Routes for user creation and login
route.post('/signup', userExist, controllers.signup);

route.post('/login', controllers.login);

export default route;