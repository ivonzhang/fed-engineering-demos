const Koa = require("koa");
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
const { logger }= require('./middleware/log');

dotenv.config({ path: './config/.env.local' });
const PORT = process.env.PORT;

const app = new Koa();

app.use(logger);

app.use(async (ctx) => {
  if (ctx.request.url === "/") {
    // 在服务端不会这么用，一般用中间件去处理
    const indexContent = await fs.promises.readFile(path.resolve(__dirname, "./index.html"));
    ctx.response.body = indexContent;
    ctx.response.set("Content-Type", "text/html");
  }
  if (ctx.request.url === "/main.js") {
    const mainJsContent = await fs.promises.readFile(path.resolve(__dirname, "./main.js"));
    ctx.response.body = mainJsContent;
    ctx.response.set("Content-Type", "text/javascript");
  }
});


app.listen(PORT, () => console.log("listen on " + PORT));
