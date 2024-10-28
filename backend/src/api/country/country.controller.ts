import { NextFunction, Request, Response } from "express";
import RES_STATUS from "../../config/status.config";
import CountryService from "./country.service";

class CountryController {
  static async getAllCountries(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const countries = await CountryService.getAllCountries();

      res.status(RES_STATUS.OK).json({ countries: countries });
    } catch (err) {
      next(err);
    }
  }
}

export default CountryController;
