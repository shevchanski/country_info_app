import { Router } from "express";
import CountryController from "./country.controller";

const CountryRouter = Router();

// GET requirests
// get all countries
CountryRouter.get("/", CountryController.getAllCountries);

CountryRouter.get("/:countryCode", CountryController.getCountryInfo);

export default CountryRouter;
