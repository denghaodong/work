#### vue组件通信

父 --->  子  父组件通过动态属性传递  子组件通过props接收

子级直接使用父级的数据   $parent.xxx

子 --->  父  通过自定义事件 @事件名=函数   $emit('事件名',参数1，....)

父级直接使用子级的数据  $children[x].xx  $refs.xxx

非父子

Vue.prototype.$bus = new Vue()  发布订阅模式

vuex

#### 发布订阅模式的实现原理

```
class EventBus{
    constructor(){
        this.events = {};
    }

    $on(eventName,callback){
        if(!this.events[eventName]){
            this.events[eventName] = [callback];
        }else{
            this.events[eventName].push(callback);
        }  
    }

    $emit(eventName,...arg){
        this.events[eventName].forEach(item => {
            item(...arg);
        })
    }
} 

export default EventBus

```

#### vue操作dom的方法

1.ref 

ref作用在标签

作用在组件上

2.event事件对象

3.指令

#### v-model 双向绑定的实现原理：  v-bind:value  input事件








