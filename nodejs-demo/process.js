
// 打印当前nodejs执行的环境变量
// console.log(process.env);
// console.log(process.env.USER);

// console.log(process.cwd());
// console.log(process.argv);

console.log(process.version); // 输出 Node.js 的版本

// 方法返回当前进程的内存使用情况。
// const mem = process.memoryUsage();
// console.log(`RSS: ${mem.rss / 1024 / 1024} MB`);

// 进程标题
// console.log(process.title); // 输出 "node"
// process.title = 'My Custom Process';
// console.log(process.title); // 输出 "node"

// 假设运行命令为：pnpm run dev:process --name Kimi --age 25
const nameArg = process.argv[2];
const ageArg = process.argv[3];

console.log(`Name: ${nameArg}`);
console.log(`Age: ${ageArg}`);
