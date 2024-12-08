// var { readFile } = require("node:fs/promises");
// var { resolve } = require("node:path");

// // demo1: 文件读取
// async function readPkg() {
//   try {
//     const pth = resolve(__dirname,'./package.json');
//     const res = await readFile(pth, {
//       encoding: "utf-8",
//     });
//     console.log(JSON.parse(res));
//   } catch (error) {
//     console.error(error);
//   }
// }

// readPkg();

// demo2: 文件写入
const fs = require("fs");
fs.writeFile('./1.txt', '异步写入：hello world!', (err) => {
  if (err) {
    console.error('写入失败');
  } else {
    console.log("写入成功")
  }
});

// fs.writeFileSync('./1.txt', "同步写入: hello world!!");
// fs.appendFileSync('./1.txt', '\n666')

// const ws = fs.createWriteStream('./1.txt');
// ws.write("\n1");
// ws.write("\n2");
// ws.write("\n3");
// ws.close();
