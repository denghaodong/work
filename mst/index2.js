// let start = 1;
// let arr=[]
// function name(sum) {
//   if (sum < 2) {
//     console.log("这个数不符合要求");
//   } else {
//     for (let i = 1; i < sum; i++) {
//         start++;
//       if (sum % start == i) {
        
//       }else if(sum%start==0){
          
//           for(let i=start;i>0;i--){
//               arr.push(i)
//           }
//       }
//     }
//   }
// }
// name(6)
// console.log(arr)

// const koa=require('koa');
// const app=new koa();

// app.use(async (ctx,next)=>{
//   let startTime=new Date().getTime()
//   console.log('第一层开始')
//   await next()
//   console.log('第一层结束')
//   let endTime=new Date().getTime()
//   let time=endTime-startTime
//   console.log(time)
// })
// app.use(async (ctx,next)=>{
//   console.log('第二层开始')
//   await next()
//   console.log('第二层结束')
// })
// function delay(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       resolve()
//     }, 2000);
//   })
// }
// app.use(async (ctx,next)=>{
//   console.log('第三层开始')
//   await delay()
//   await next()
//   console.log('第三层结束')
// })

// app.listen(process.env.PORT||7001,()=>{
//   console.log('服务启动成功')
// })



