const path = require('path');

// 结果：Windows下是反斜杠 \ ，linux下是正斜杠 /
console.log(path.sep);

console.log(path.resolve(__dirname, '1.txt')); // 结果：/Users/zf-mac/Documents/projects/fed-engineering-demos/nodejs-demo/1.txt

const pathName = '/Users/zf-mac/Documents/projects/fed-engineering-demos/nodejs-demo/1.txt';

console.log(path.basename(pathName)); // 1.txt
console.log(path.basename(pathName, '.txt')); // 第二个参数表示去掉后缀，结果是1

console.log(path.dirname(pathName)); // 结果：/Users/zf-mac/Documents/projects/fed-engineering-demos/nodejs-demo

console.log(path.extname(pathName)); // .txt

console.log(path.join('/Users/zf-mac/Documents/projects/fed-engineering-demos/nodejs-demo', '1.txt')); // 结果：/Users/zf-mac/Documents/projects/fed-engineering-demos/nodejs-demo/1.txt

console.log(path.parse(pathName));
// {
//   root: '/',
//   dir: '/Users/zf-mac/Documents/projects/fed-engineering-demos/nodejs-demo',
//   base: '1.txt',
//   ext: '.txt',
//   name: '1'
// }