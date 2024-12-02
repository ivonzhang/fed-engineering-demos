// 回调、同步
// const { readFile } = require('node:fs');

// readFile('src/1.js', { encoding: 'utf-8' }, (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// const fs = require("node:fs");
// import fs from 'node:fs';

// const data = fs.readFileSync('src/1.js', { encoding: "utf-8" });
// console.log(data);

// 如果使用 ES module的方式的话，需要在package.json中添加"type": "module"，方可如此使用
// import { readFile } from 'node:fs/promises';
const { readFile } = require('node:fs/promises');

// try {
//   readFile('src/1.js', { encoding: 'utf-8' }).then(data => {
//     console.log(data);
//   });
// } catch (error) {
//   console.log(error);
// }

// async & await
async function getFileContent() {
  try {
    const data = await readFile('src/1.js', { encoding: "utf-8" });
    console.log(data);
  } catch (err) {
    console.error(err);
    // throw err;
  }
}

getFileContent();
