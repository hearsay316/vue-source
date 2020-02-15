import Vue from "vue"

let vm = new Vue({
    el:"#app",
    data:{
        a:1,
        B:2,
        D:[]
    },
    computed:{

    },
    watch:{}
})
window.vm = vm
console.log(vm)
