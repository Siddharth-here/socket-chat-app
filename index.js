import http from "node:http";
import { Server } from "socket.io";
import express from "express";
import path from "node:path";

async function main() {
  const server = http.createServer();
  const io = new Server();
  const app = express();

  app.use(express.static(path.resolve("./public")));

  io.attach(server);

  server.listen(9000, () => {
    console.log("Http server is running on PORT 9000");
  });
}
main();
