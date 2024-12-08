const http = require("http");
const fs = require("fs");
const path = require("path");
const targetPath = "/docs";
const PORT = 9000;
const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://127.0.0.1:${PORT}`);
  const filePath = path.join(__dirname, targetPath) + url.pathname;
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end("Server Error");
      return;
    }
    res.setHeader("Content-Type", "text/html;charset=utf-8");
    res.end(data);
  });
});
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}...`);
});
