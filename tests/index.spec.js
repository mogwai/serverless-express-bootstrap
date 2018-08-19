const { test } = require("ava");
const { app } = require("../src/index");
const { request } = require("chai").use(require("chai-http"));

test("We recieve the correct message", async t => {
  let res = await request(app).get("/").send();
  t.is(res.body.message, "HEY!");
  t.pass()
});
