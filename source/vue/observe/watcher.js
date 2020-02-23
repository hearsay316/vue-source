import { popTarget, pushTarget } from "./dep";

let id = 0;

export default class Watcher {
  /**
   * @param {*} vm 当前组件实例
   * @param {*} exprOrFn 用户传入参数
   * @param {*} cb回调函数
   * @param {*} opts
   */
  constructor(vm, exprOrFn, cb = () => {}, opts = {}) {
    this.vm = vm;
    this.exprOrFn = exprOrFn;
    if (typeof exprOrFn === "function") {
      this.getter = exprOrFn;
    }
    this.cb = cb;
    this.opts = opts;
    this.id = id++;
    this.get();
  }
  get() {
    pushTarget(this); // 渲染watcher  dep.target = watcher msg 变化了重新执行
    this.getter(); // 让这个当前传入的函数重新执行
    popTarget();
  }
  update() {
    this.get();
  }
}
