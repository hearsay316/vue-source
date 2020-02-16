
let id = 0;



export default class Watcher{
    /**
     * @param {*} vm 当前组件实例
     * @param {*} exprOrFn 用户传入参数
     * @param {*} cb回调函数
     * @param {*} opts
     */
    constructor(vm, exprOrFn, cb=()=>{} , opts={}){
        this.vm = vm;
        this.exprOrFn = exprOrFn;
        if(typeof exprOrFn ==='function'){
            this.getter = exprOrFn;
        }
        this.cb = cb;
        this.opts = opts;
        this.id = id++;
        this.get();
    }
    get(){
        this.getter()
    }
}
