/*
 * @Author: your name
 * @Date: 2020-06-25 10:15:22
 * @LastEditTime: 2020-06-25 10:32:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /factory_erp_backstage/src/utils/utils.ts
 */

// 获取删除数据
export const getDeletedData = (data: object, key: string, value: any) => {
  data = JSON.parse(JSON.stringify(data));
  // @ts-ignore
  return data.filter((item) => {
    return item[key] != value;
  });
};

// 获取修改数据
export const getEditedData = (data: object, key: string, newValue: any) => {
  data = JSON.parse(JSON.stringify(data));

  // @ts-ignore
  let i = data.findIndex((item) => {
    return item[key] == newValue[key];
  });

  // @ts-ignore
  data[i] = newValue;

  return data;
};

// 随机文件名
export const randomName = (dir: string, filename: string) => {
  let suffix = get_suffix(filename);
  let g_object_name = dir + random_string(10) + suffix;

  return g_object_name;

  function random_string(len: number) {
    len = len || 32;
    let chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678";
    let maxPos = chars.length;
    let pwd = "";
    for (let i = 0; i < len; i++) {
      pwd += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
  }

  function get_suffix(filename: string) {
    let pos = filename.lastIndexOf(".");
    let suffix = "";
    if (pos != -1) {
      suffix = filename.substring(pos);
    }
    return suffix;
  }
};

// 深拷贝
export const deepCopy = (data: any) => {
  return JSON.parse(JSON.stringify(data));
};
