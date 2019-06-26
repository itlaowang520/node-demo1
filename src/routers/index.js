import controller from '../controllers';
import Router from 'koa-router';
import monitorRouter from './monitor';
const VERSION = 'v1';
const PROJECT = 'ks-server';

const router = new Router({
    prefix: `/api/${PROJECT}/${VERSION}`
});

router.get('/hello', controller);
router.use(monitorRouter.routes());
export default router;
