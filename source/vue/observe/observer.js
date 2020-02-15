import { observe } from "./index";
import {arrayMethods} from "./arrary";


export function defineReactive(data, key, value) {
  // 如果value依然是对象就需要递归
  observe(value);
  Object.defineProperty(data, key, {
    get() {
      console.log("获取数据");
      return value;
    },
    set(newValue) {
      console.log("设置数据");
      if (newValue === value) return;
      value = newValue;
    }
  });
}

export default class Observer {
  constructor(data) {
    //data 就是我们刚刚定义的vm._data
    console.log("observe", data);
      Array.isArray(data)?data.__proto__ = arrayMethods:this.walk(data);
  }
  walk(data) {
    let keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let value = data[keys[i]];
      defineReactive(data, key, value);
    }
  }
}
