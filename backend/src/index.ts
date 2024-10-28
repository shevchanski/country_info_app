import express, { Response, Request } from "express";
import dotenv from "dotenv";
import APP_CONFIG from "./config/app.config";
import CountryRouter from "./api/country/country.router";

dotenv.config();

const app = express();

app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong");
});

app.use("/countries", CountryRouter);

app.listen(APP_CONFIG.PORT, () => {
  console.info(`Host: http://localhost:${APP_CONFIG.PORT}`);
});
