const router = require("koa-router")();
const query = require("../controller");

router.post("/api/add", async ctx => {
  let { remark, type, sum } = ctx.request.body;
  let create_time = new Date().toLocaleDateString();
  console.log(create_time)
  let results = await query(
    'insert into work_list (remark,type,sum,create_time) values (?,?,?,?)',
    [remark, type, sum, create_time]
  );
  if (results) {
    ctx.body = {
      code: 1,
      msg: "数据添加成功"
    };
  } else {
    ctx.body = {
      code: 0,
      msg: "数据添加失败"
    };
  }
});
router.post("/api/edit", async ctx => {
  let { id, remark, type, sum } = ctx.request.body;
  let create_time = new Date().getTime();
  if (id && remark && type && rank) {
    try {
      await query(
        "update work_list set work_list.remark=?,work_list.type=?,work_list.sum=?,work_list.create_time=? where id=?",
        [id, remark, type, sum, create_time]
      );
      ctx.body = {
        code: 1,
        msg: "数据修改成功"
      };
    } catch (e) {
      ctx.body = {
        code: 0,
        msg: e.message
      };
    }
  } else {
    ctx.body = {
      code: 2,
      msg: "参数不完整"
    };
  }
});
router.get("/api/delete", async ctx => {
  let { id } = ctx.query;
  try {
    await query("delete from work_list where id=?", [id]);
    ctx.body = {
      code: 1,
      msg: "数据删除成功"
    };
  } catch (e) {
    ctx.body = {
      code: 0,
      msg: e.message
    };
  }
});
router.get("/api/all", async ctx => {
  let { pagenum = 1, limit = 2 } = ctx.query;
  let startIndex = (pagenum - 1) * limit;
  let data = await query(
    `select * from work_list limit ${startIndex},${limit}`
  );
  let count = await query("select count(*) from work_list");
  console.log(count);
  let total = Math.ceil(count[0]["count(*)"]);
  if (data.length) {
    ctx.body = {
      code: 1,
      data,
      total
    };
  } else {
    ctx.body = {
      code: 0,
      msg: "暂无数据"
    };
  }
});
router.get("/api/sreach", async ctx => {
  let { key } = ctx.query;
  try {
    let data = await query(
      `select * from work_list where type like '%${key}%'`
    );
    ctx.body = {
      code: 0,
      data
    };
  } catch (e) {
    ctx.body = {
      code: 1,
      msg: e.message
    };
  }
});
router.get("/api/ranks", async ctx => {
  //注意在排序时候表里面不能有rank的键名,目前就rank不能进行排序
  try {
    let data = await query("select * from work_list order by sum asc");
    ctx.body = {
      code: 1,
      msg: "排序成功",
      data
    };
  } catch (e) {
    ctx.body = {
      code: 0,
      msg: e.message
    };
  }
});
module.exports = router;
