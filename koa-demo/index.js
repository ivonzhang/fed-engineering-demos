const Koa = require("koa");
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
const { logger }= require('./src/middleware/log');
const errorHandler = require('./src/middleware/error-handler');

dotenv.config({ path: './config/.env.local' });
const PORT = process.env.PORT;

const app = new Koa();

app.use(logger);
app.use(errorHandler);

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
  if (ctx.request.url === '/error') {
    ctx.throw(500); 
  }
});

// error 事件的监听
// demo: http://localhost:5174/error
app.on('error', (err, ctx) => {
  console.error('server error', err);
});

app.listen(PORT, () => console.log("listen on " + PORT));
