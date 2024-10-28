import express, { Response, Request } from "express";
import dotenv from "dotenv";
import APP_CONFIG from "./config/app.config";

dotenv.config();

const app = express();

app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong");
});

app.listen(APP_CONFIG.PORT, () => {
  console.info(`Host: http://localhost:${APP_CONFIG.PORT}`);
});
