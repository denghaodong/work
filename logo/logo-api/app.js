const koa=require('koa');
const app=new koa();
const static=require('koa-static');
const path=require('path');
const router=require('./router');
const bodyparser=require('koa-bodyparser');
app.use(static(path.join(process.cwd(),'public')));
app.use(bodyparser());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(process.env.PORT||7001,()=>{
    console.log('服务启动成功')
})