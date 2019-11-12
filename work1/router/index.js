const router = require("koa-router")();
const query = require("../controller");

router.post("/api/add", async ctx => {
  let { remark, type, rank, create_time } = ctx.request.body;
  let results = await query(
    "insert into work_list (remark, type, rank,create_time ) values (?,?,?,?)",
    [remark, type, rank, create_time]
  );
  if (results.length) {
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
  let { id, remark, type, rank, create_time } = ctx.request.body;
  if (id && remark && type && rank && create_time) {
    try {
      await query(
        "update work_list set work_list.remark=?,work_list.type=?,work_list.rank=?,work_list.create_time=? where id=?",
        [id, remark, type, rank, create_time]
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
  try {
    let data = await query("select * from work_list");
    ctx.body = {
      code: 0,
      msg: "请求数据成功"
    };
  } catch (e) {
    ctx.body = {
      code: 1,
      msg: e.message
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

module.exports = router;
