
function Vue(options) {
    this_init(options)
}
Vue.prototype._init = function(options){
    // Vue初始化  this.$options 表示Vue中的参数
    let vm = this;
    vm.$options = options;
    // Mvvm 原理

}

export default Vue
