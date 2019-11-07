/*
*发布订阅者模式的实现原理,通过封装$bus来实现vue中的非父子之间的通信
*先把$bus绑定到vue的原型上,然后再要传值的组件中调用$emit,在接收值的组件中调用$on
$emit,$on中有两个参数,第一个参数是事件名,第二个参数是你要传的事件
 */

class EventBus{
    constructor(){
        this.events={}
    }
    $on(eventName,callback){
        if(this.events[eventName]){ //判断是否有这个事件名
            this.events[eventName]=[callback]   //如果有就通过这个事件名来找到对应的事件并调用
        }else{// 如果没有这个事件名
            this.events[eventName].push(callback)// 添加这个事件
        }
    }
    $emit(eventName,...arg){  //...arg是事件名所有的事件(一个伪数组)
        this.events[eventName].forEach(item=>{ //循环这个数组来找到相应的事件并调用事件
            item(...arg)
        })
    }
}
export default EventBus