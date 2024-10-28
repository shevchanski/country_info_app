import cors from "cors";
import "dotenv/config";
import express, { Request, Response } from "express";

import CountryRouter from "./api/country/country.router";
import APP_CONFIG from "./config/app.config";
import apiErrorHandler from "./errors/apiErrorHandler";

const app = express();

// global middlewares
app.use(express.json()); // mdlwr which parses json
app.use(cors());

app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong");
});

// routers
app.use("/countries", CountryRouter);

// error handlers
app.use(apiErrorHandler);

app.listen(APP_CONFIG.PORT, () => {
  console.info(`Host: http://localhost:${APP_CONFIG.PORT}`);
});
