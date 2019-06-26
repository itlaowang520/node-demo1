import appFunc from '../../utils/appFunc';
import MonitorModel from '../../models/monitor';

async function updateItemController(context, next) {
    if (appFunc.isEmptyObject(context.request.body)) {
        context.throw(new Error('更新monitor信息错误，monitor信息为空！'));
    }
    if (!context.request.body.monitorId) {
        context.throw(new Error('更新monitor信息错误，monitorId不能为空！'));
    }
    const { monitorId } = context.request.body;
    let monitor = await MonitorModel.getItemById(monitorId);
    if (monitor) {
        let newDatas = context.request.body;
        try {
            await MonitorModel.updateItemById(monitorId, newDatas);
        } catch (e) {
            e.message = 'monitor信息更新失败！';
            context.throw(e);
        }
        context.body = {
            code: 0,
            message: 'monitor信息更新成功!'
        };
    } else {
        context.throw(new Error('没有此monitor!'));
    }
    next();
}

export default updateItemController;
