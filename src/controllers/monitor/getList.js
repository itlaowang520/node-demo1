import MonitorModel from '../../models/monitor';
import qs from 'querystring';
import { pageFormatter } from '../../utils/utils';
import AppFunc from '../../utils/appFunc';
const url = require('url');

async function getMonitorListController(context, next) {
    let list = [],
        params = qs.parse(url.parse(context.request.url).query) || {}, // 分页参数
        { pageSize, pageNo } = params;

    try {
        list = await MonitorModel.getList();
    } catch (e) {
        e.message = '获取Monitor列表失败！';
        context.throw(e);
    }
    if (params.taskName) {
        // 高级查询
        list = list.filter((item) => {
            return item.taskName === params.taskName;
        });
    }

    let count = list.length;
    if (!AppFunc.isEmptyObject(params)) {
        list = pageFormatter(list, pageSize, pageNo);
    }

    context.body = {
        list,
        totalCount: count,
        pageNo: Number(pageNo),
        pageSize: Number(pageSize)
    };
    next();
}

export default getMonitorListController;
