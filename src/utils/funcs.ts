
export function deepClone(obj: any) {
    if (typeof obj !== 'object' || obj === null || obj instanceof RegExp || obj instanceof Date) {
        // 如果不是对象、数组、日期或正则表达式，返回原始类型值
        return obj;
    }

    const isArray = Array.isArray(obj); // 判断是否为数组
    const cloneObj = isArray ? [] : {}; // 根据原始对象的类型创建目标对象

    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) { // 检查对象自身是否包含该属性
            cloneObj[key] = deepClone(obj[key]); // 递归调用 deepClone() 方法，复制原始对象的属性值到目标对象中
        }
    }

    // 取消 proxy
    return new Proxy(cloneObj, {});
}