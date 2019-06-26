import logger from './logger/index';

export default {
    isEmptyObject(obj) {
        // 空数组返回 true
        if (Object.prototype.toString.call(obj) === '[object Array]') {
            return !obj.length;
        }
        if (Object.prototype.toString.call(obj) === '[object Object]') {
            for (let t in obj) {
                return false;
            }
            return true;
        }
        return !obj;
    },
    parseQueryString(url) {
        let regUrl = /\?([\w\W]+)$/,
            arrUrl = regUrl.exec(url),
            result = {};
        if (arrUrl && arrUrl[1]) {
            let paramString = arrUrl[1],
                params = paramString.split('&');
            for (let i = 0; i < params.length; i++) {
                let param = params[i].split('=');
                if (param.length > 2) {
                    param[1] += '=';
                }
                result[param[0]] = param[1];
            }
            return result;
        }
        return result;
    },
    serializeObject(obj) {
        if (Object.prototype.toString.call(obj) !== '[object Object]') return obj;
        let resultArray = [],
            separator = '&';
        for (let prop in obj) {
            if (Object.prototype.toString.call(obj[prop]) === '[object Array]') {
                let toPush = [];
                for (let i = 0; i < obj[prop].length; i++) {
                    toPush.push(prop + '=' + obj[prop][i]);
                }
                resultArray.push(toPush.join(separator));
            } else {
                resultArray.push(prop + '=' + obj[prop]);
            }
        }
        return resultArray.join(separator);
    },
    log(content) {
        logger.info(`${content}`);
    }
};
