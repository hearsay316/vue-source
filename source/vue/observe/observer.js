import { observe } from "./index";
import { arrayMethods, observerArray } from "./arrary";
import Dep from "./dep";

export function defineReactive(data, key, value) {
  // 如果value依然是对象就需要递归
  observe(value);
  let dep = Dep(); //dep里可以收集依赖 收集的依赖是watcher
  Object.defineProperty(data, key, {
    get() {
      console.log("获取数据");
      if (Dep.target) {
        dep.addSup(Dep.target);
      }
      return value;
    },
    set(newValue) {
      console.log("设置数据");
      if (newValue === value) return;
      value = newValue;
      dep.notify();
    }
  });
}

export default class Observer {
  constructor(data) {
    //data 就是我们刚刚定义的vm._data
    console.log("observe", data);
    if (Array.isArray(data)) {
      data.__proto__ = arrayMethods;
      observerArray(data); // 观测数据中的每一项
    } else {
      this.walk(data);
    }
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
