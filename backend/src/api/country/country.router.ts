import { Router } from "express";
import CountryController from "./country.controller";

const CountryRouter = Router();

// get all countries
CountryRouter.get("/", CountryController.getAllCountries);

export default CountryRouter;
