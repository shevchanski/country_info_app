import { Request, Response, Router } from "express";

const CountryRouter = Router();

// get all countries
CountryRouter.get("/", (req: Request, res: Response) => {
  res.status(200).send("All Countries");
});

export default CountryRouter;
