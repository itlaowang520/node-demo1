import MonitorModel from '../../models/monitor';

async function getMonitorItemController(context, next) {
    let monitorId = context.request.query.monitorId;
    if (!monitorId) {
        context.throw(new Error('缺少monitorId'));
    }
    let monitor;
    try {
        monitor = await MonitorModel.getItemById(monitorId);
    } catch (e) {
        e.message = '获取monitor失败！';
        context.throw(e);
    }
    if (!monitor) {
        context.throw(new Error('找不到对应的monitor!'));
    }
    context.body = {
        ...monitor,
        code: 0,
    };
    next();
}

export default getMonitorItemController;
