import Observer from "./observer";

export function initState(vm) {
  //  做不同的初始化工作
  let opts = vm.$options;
  if (opts.data) {
    initData(vm); //初始化数据
  }
  if (opts.computed) {
    initComputed(vm); // 初始化 计算属性
  }
  if (opts.watch) {
    initWatch(vm); // 初始化 观察者
  }
}
export function observe(data) {
  if (typeof data !== "object" || data == null) {
    return;
  }
  return new Observer(data);
}
function proxy(vm, source, key) {
  //代理数据 vm.XX = vm._data.XX
  Object.defineProperty(vm, key, {
    get() {
      return vm[source][key];
    },
    set(newValue) {
      vm[source][key] = newValue;
    }
  });
}
function initData(vm) {
  // 讲用户插入的数据通过object.defineProperty重新定义
  let data = vm.$options.data;
  data = vm._data = typeof data === "function" ? data.call(vm) : data || {};
  for (let key in data) {
    proxy(vm, "_data", key);
  }
  observe(vm._data);
}
function initComputed(opts) {}
function initWatch(opts) {}
