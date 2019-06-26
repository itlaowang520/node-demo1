import MonitorModel from '../../models/monitor';
import AppFunc from '../../utils/appFunc';

async function addMonitorItemController(context, next) {
    if (AppFunc.isEmptyObject(context.request.body)) {
        context.throw('添加Monitor失败，参数信息为空！');
    }
    if (!context.request.body.taskName) {
        context.throw('添加Monitor失败，taskName为空！');
    }
    if (!context.request.body.uptime) {
        context.throw('添加Monitor失败，uptime为空！');
    }
    if (!context.request.body.memberNum) {
        context.throw('添加Monitor失败，memberNum为空！');
    }
    if (!context.request.body.status || !context.request.body.status === 0) {
        context.throw('添加Monitor失败，status为空！');
    }
    let newDatas = context.request.body;
    try {
        await MonitorModel.addItem(newDatas);
    } catch (e) {
        e.message = '添加Monitor失败！';
        context.throw(e);
    }
    context.body = {
        code: 0,
        message: '添加成功'
    };
    next();
}

export default addMonitorItemController;
