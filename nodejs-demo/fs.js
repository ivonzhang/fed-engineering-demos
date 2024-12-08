var { readFile } = require("node:fs/promises");
var { resolve } = require("node:path");

// demo1: 文件读取
async function readPkg() {
  try {
    const pth = resolve(__dirname,'./package.json');
    const res = await readFile(pth, {
      encoding: "utf-8",
    });
    console.log(JSON.parse(res));
  } catch (error) {
    console.error(error);
  }
}

readPkg();


