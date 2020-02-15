//  主要是劫持用户调用的 push  pop shift unshift reverse sort splice (原数组会发生变化)
let oldArrayProtoMethods = Array.prototype;
export let arrayMethods = Object.create(oldArrayProtoMethods);
let methods = ["push", "pop", "shift", "unshift", "reverse", "sort", "splice"];
methods.forEach(methods=>{
    arrayMethods[methods] = function (...arg) {
        return oldArrayProtoMethods[methods].apply(this, arg)
    }
})
