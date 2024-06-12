import express from "express";
import dotenv from "dotenv";
import * as fs from "node:fs";
import * as path from "node:path";
import * as https from "node:https";
import { TodoData } from "./src/todo/todo.data.js";
import { todoRouter } from "./src/todo/todo.router.js";
import cors from 'cors';

dotenv.config();

// 앱을 실행시키면 Todo 배열 초기화
TodoData.initialize();

const app = express();
const port = process.env.PORT || 3000;

// HTTPS 옵션 설정
const options = {
    key: fs.readFileSync(path.join(process.cwd(), 'resource/cert/privkey.pem')),
    cert: fs.readFileSync(path.join(process.cwd(), 'resource/cert/fullchain.pem')),
};

// 미들웨어 설정
app.use(cors());
app.use(express.json());

// 기본 라우트 설정
app.get("/", (req, res) => res.send("Hello Node.js"));

// Todo 라우트 설정
app.use("/todos", todoRouter);

// HTTPS 서버 시작
https.createServer(options, app).listen(port, () => {
    console.log(`${port}번에서 대기중`);
});

// HTTP 서버 테스트 (필요시 사용)
/*
app.listen(port, () => {
    console.log(`HTTP 서버가 ${port}번에서 대기중`);
});
*/
