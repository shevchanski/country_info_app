import { Request, Response } from "express";
import RES_STATUS from "../../config/status.config";
import CountryService from "./country.service";

class CountryController {
  static async getAllCountries(req: Request, res: Response) {
    const countries = await CountryService.getAllCountries();

    res.status(RES_STATUS.OK).json({ countries: countries });
  }
}

export default CountryController;
