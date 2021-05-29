import {Router} from 'express';
import * as controllers from '../controllers/user.controller';
import middlewares from '../middlewares';
const route = Router();

//Routes for user creation and login
route.post('/signup', middlewares.userExist, controllers.signup);

route.post('/login', controllers.login);

route.post('/username', middlewares.verifyToken, controllers.usernameChange);

export default route;