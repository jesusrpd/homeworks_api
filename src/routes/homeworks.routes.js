import {Router} from 'express';
import * as controllers from '../controllers/homework.controller';
import middlewares from '../middlewares';
const route = Router();

//Routes fro create homeworks, delete and get
route.post('/', middlewares.verifyToken, controllers.homeworkCreate);

route.get('/', middlewares.verifyToken, controllers.homeworksGet);

route.delete('/:id', middlewares.verifyToken, controllers.homeworkDelete);

export default route;