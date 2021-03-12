import './env';
// import express, { Request, Response, NextFunction } from "express";
import getConnection from './database/get-Connection';
// import  routes  from './routes';

import express, { Request, Response, NextFunction } from 'express';
import routes from './routes';

const app = express();

const PORT: number | undefined = Number(process.env.PORT);

if (!PORT) {
  //!! PORT가 undefined 일수도 있으므로 에러 처리를 해야 밑에서 에러안남
  throw new Error('Missing');
}

getConnection();

app.use('/', routes);

app.use('/dd', (req: express.Request, res: express.Response, next) => {
  res.send('hello');
});

app.listen(PORT, () => console.log(`${PORT}포트 서버 대기 중!`));
