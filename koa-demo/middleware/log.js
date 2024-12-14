
export const logger = async (ctx, next) => {
  // console.log('current request info', ctx.url, ctx.method, new Date());
  // 记录请求开始时间
  const start = new Date();

  // 等待下一个中间件执行
  await next(); // await 是必须的，否则会终端下一个中间件的执行

  // 计算响应时间
  const ms = new Date() - start;

  // 记录请求方法、URL 和响应时间
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
}
