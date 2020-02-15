//  主要是劫持用户调用的 push  pop shift unshift reverse sort splice (原数组会发生变化)
import { observe } from "./index";

let oldArrayProtoMethods = Array.prototype;
export let arrayMethods = Object.create(oldArrayProtoMethods);
let methods = ["push", "pop", "shift", "unshift", "reverse", "sort", "splice"];
methods.forEach(method => {
  arrayMethods[method] = function(...args) {
    let inserted;
    switch (method) {
      case "push":
      case "unshift":
        inserted = args;
        break;
      case "splice":
        inserted = args.slice(2); //获取splice新增那个一项
      default:
        break;
    }
    if (inserted) observerArray(inserted);
    return oldArrayProtoMethods[method].apply(this, args);
  };
});
export function observerArray(inserted) {
  // 要对数组中的每一项进行观测
  for (let i = 0; i < inserted.length; i++) {
    observe(inserted[i]);
  }
}
