import {initState} from "./observe/index.js";


function Vue(options) {
    this._init(options)
}
Vue.prototype._init = function(options){
    // Vue初始化  this.$options 表示Vue中的参数
    let vm = this;
    vm.$options = options;
    // Mvvm 原理
    initState(vm); // data  computed watch

}


export default Vue
