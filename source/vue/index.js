import { initState } from "./observe/index.js";
import Watcher from "./observe/watcher";
import { compiler } from "./util";

function Vue(options) {
  this._init(options);
}
Vue.prototype._init = function(options) {
  // Vue初始化  this.$options 表示Vue中的参数
  let vm = this;
  vm.$options = options;
  // Mvvm 原理  拦截数组 和对象
  initState(vm); // data  computed watch
  console.log(vm, vm.el);
  if (vm.$options.el) {
    console.log(vm.el);
    vm.$mount();
  }
};
function query(el) {
  if (typeof el === "string") {
    return document.querySelector(el);
  }
  return el;
}
// 渲染页面
Vue.prototype.$mount = function() {
  let vm = this;
  let el = vm.$options.el; //获取元素
  el = vm.$el = query(el); // 获取当前挂在的事件
  // 渲染页面 是通过 watcher来渲染的
  //vue  2.0是组件级别更新
  // 更新组件  渲染组件的逻辑
  let updateComponent = () => {
    console.log("执行了");
    vm._update(); // 组件更新
  };
  new Watcher(vm, updateComponent); //渲染watcher
  //  只要他更改了 ,就要重新渲染组件
};

Vue.prototype._update = function() {
  // 用用户传入的数据更新dom
  let vm = this;
  let el = vm.$el;
  console.log(el);
  // 要循环内容把页面的内容换成我们的数据
  let node = document.createDocumentFragment(); // 常见内存 dom
  let firstChild;
  while ((firstChild = el.firstChild)) {
    node.appendChild(firstChild);
  }
  console.log(node);
  compiler(node, vm);
  el.appendChild(node);
};
export default Vue;
