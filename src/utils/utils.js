/**
 * 列表分页参数
 * @param {array} list 全部数据的列表
 * @param {number} pageSize 每页条数
 * @param {number} pageNo 页码
 * @return {array} list 筛选之后的列表
 */
export const pageFormatter = (list, pageSize, pageNo) => {
    return list.slice((pageNo - 1) * pageSize, pageNo * pageSize);
};
