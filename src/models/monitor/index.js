import { getCollection } from '../index';
import { ObjectId } from 'mongodb';

const collectionName = 'monitor';

/**
 * 获取monitorConfig列表
 * @return {Promise<monitorConfig[]>}
 */
const getList = async() => {
    return getCollection(collectionName)
        .find()
        .sort({ 'updateTime': -1 })
        .toArray();
};

/**
 * 添加单个Monitor
 * @param {Monitor} data 新Monitor数据
 * @return {Promise<*>}
 */
const addItem = async(data = {}) => {
    let newData = {
        ...data
    };
    newData.creatTime = new Date().getTime();
    newData.updateTime = new Date().getTime();
    return getCollection(collectionName)
        .insertOne(newData);
};

/**
 * 删除对应的monitor
 * @param param
 * @return {Promise<*>}
 */
const deleteItem = async(param = {}) => {
    return getCollection(collectionName)
        .findOneAndDelete(param);
};

const deleteItemById = async(id) => {
    return deleteItem({
        _id: ObjectId(id)
    });
};

/**
 * 根据id查询活动
 * @param {object} param 查询条件
 * @return {Promise<url>}
 */
const getItemById = async(id) => {
    return getCollection(collectionName)
        .findOne({
            _id: ObjectId(id)
        });
};

/**
 * 更新对应monitor
 * @param {object} param 查询条件
 * @param {monitor} newData 更新数据
 * @return {Promise<*>}
 */
const updateItem = async(param = {}, newData = {}) => {
    newData.updateTime = new Date().getTime();
    return getCollection(collectionName)
        .findOneAndUpdate(
            param,
            {
                $set: newData
            }
        );
};

const updateItemById = async(id, newData) => {
    return updateItem({
        _id: ObjectId(id)
    }, newData);
};

const MonitorConfigModel = {
    getList,
    addItem,
    deleteItemById,
    updateItemById,
    getItemById
};

export default MonitorConfigModel;
