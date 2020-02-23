let id = 0;
class Dep {
  constructor() {
    this.id = id++;
    this.subs = [];
  }
  addSup(watcher) {
    //订阅 将调用addSup时候穿的函数 加入到 数组中
    this.subs.push(watcher);
  }
  notify() {
    this.subs.forEach(watcher => watcher.update());
  }
  depend() {
    if (Dep.target) {
    } // 为了防止直接调用depend方法
  }
}

let dep = new Dep();
dep.addSup({
  update() {
    console.log("1");
  }
});

dep.addSup({
  update() {
    console.log("2");
  }
});
dep.notify();
let stack = [];
// 用来保存当前的watcher
export function pushTarget(watcher) {
  Dep.target = watcher;
  stack.push(watcher);
}
export function popTarget() {
  stack.pop();
  Dep.target = stack[stack.length - 1];
}
export default Dep; // 用来收集依赖 收集一个一个的watcher
