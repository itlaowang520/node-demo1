import Router from 'koa-router';
import * as monitorControllers from '../../../controllers/monitor';

const router = new Router();

router
    .get('/list', monitorControllers.getList)
    .post('/add', monitorControllers.addItem)
    .get('/getInfoById', monitorControllers.getItem)
    .post('/update', monitorControllers.updateItem)
    .post('/del', monitorControllers.delItem);
export default router;
