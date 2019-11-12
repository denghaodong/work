const router=require('koa-router')();
const query=require('../controller');

router.post('/api/add',async ctx=>{
    let {type,time,title,state,remark}=ctx.request.body;
    let results=await query('insert into list (type,time,title,state,remark) values (?,?,?,?,?)',[type,time,title,state,remark]);
    if(results.length){
        ctx.body={
            code:1,
            msg:'数据添加成功'
        }
    }else{
        ctx.body={
            code:0,
            msg:'数据添加失败'
        }
    }
})
router.post('/api/edit',async ctx=>{
    let {id,type,time,title,state,remark}=ctx.request.body;
    try {
        results=await query('update list set list.type=?,list.time=?,list.title=?,list.state=?,list.remark=? where id=?',[id,type,time,title,state,remark]);
        ctx.body={
            code:1,
            msg:'数据修改成功'
        }
    } catch (e) {
        ctx.body={
            code:0,
            msg:e.message
        }
    }
})
router.get('/api/delete',async ctx=>{
    let {id}=ctx.query;
    try {
       results=await query('delete * from list where id=?',[id])
       ctx.body={
           code:1,
           msg:'数据删除成功'
       } 
    } catch (e) {
        ctx.body={
            code:0,
            msg:e.message
        }
    }
})
router.get('/api/list',async ctx=>{
    let {pagenum,limit}=ctx.query;
    let startIndex=(pagenum-1)*limit;
    let results=await query(`select * from list limit ${startIndex},${limit}`)
    let count=await query('select count(*) from list');
    let total=Math.ceil(count.data[0]['count(*)']/limit);
    if(results.length){
        ctx.body={
            code:1,
            data:data.data,
            totle
        }
    }else{
        ctx.body={
            code:0,
            msg:'暂无数据'
        }
    }
})


module.exports=router;