export default class Observer {
    constructor(data){  //data 就是我们刚刚定义的vm._data
        console.log("observe",data)
        this.walk(data);
    }
    walk(data){

    }
}
