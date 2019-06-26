import MonitorModel from '../../models/monitor';

async function deleteItemController(context, next) {
    if (!context.request.body.monitorId) {
        context.throw(new Error('缺少monitorId'));
    }
    let deleteResult;
    try {
        deleteResult = await MonitorModel.deleteItemById(context.request.body.monitorId);
    } catch (e) {
        e.message = '删除monitor失败！';
        context.throw(e);
    }
    if (deleteResult.value) {
        context.body = {
            code: 0,
            message: '删除成功'
        };
    } else {
        context.throw(new Error('没有此monitor!'));
    }
    next();
}

export default deleteItemController;
