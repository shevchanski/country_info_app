import axios from "axios";
import { IAvailableCountry } from "../../types/types";

class CountryService {
  static readonly API_URL?: string = process.env.NAGER_API_URL;

  static async getAllCountries(): Promise<IAvailableCountry[]> {
    if (!this.API_URL) {
      throw new Error("API_URL is undefined");
    }

    const response = await axios.get<IAvailableCountry[]>(
      `${this.API_URL}/AvailableCountries`,
    );

    return response.data;
  }
}

export default CountryService;
