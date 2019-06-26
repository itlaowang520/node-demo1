// import { checkAuthorized } from '../../utils/user';
import Router from 'koa-router';
import itemRouter from './item';
const monitorRouter = new Router({
    prefix: '/monitor'
});
monitorRouter.use(async(context, next) => {
    // if (context.req.method.toLowerCase() !== 'get') {
    //     checkAuthorized(context);
    // }
    try {
        await next();
    } catch (e) {
        context.throw(e);
    }
});
monitorRouter.use(itemRouter.routes());
export default monitorRouter;
