// import express from "express";
// import dotenv from "dotenv";
// import * as fs from "node:fs";
// import * as path from "node:path";
// import * as https from "node:https";
// import {TodoData} from "/src/todo/todo.data.js";
// import {todoRouter} from "/src/todo/todo.router.js";
// import cors from 'cors';
//
// dotenv.config();
//
// // 앱을 실행시키면 Todo 배열 초기화
// TodoData.initialize();
//
//
// const app = new express();
// const options = {
//     key: fs.readFileSync(path.join(process.cwd(),'/resource/cert/privkey.pem')),
//     cert:fs.readFileSync(path.join(process.cwd(),'/resource/cert/fullchain.pem')),
// };
//
// const port = process.env.PORT || 3000;
//
// // JSON 형식으로 파싱해 줘야하기 때문에 미들웨어를 사용하여 하니 JSON이 사용 가능해짐
// app.use(cors());
// app.use(express.json());
//
// app.get("/", (req, res) => res.send("Hello Node.js"));
// app.use("/todos",todoRouter);
//
// https
//     .createServer(options,app)
//     .listen(port, () => {
//         console.log(`${port}번에서 대기중`);
//     });
//
//
//
