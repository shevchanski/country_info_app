import axios from "axios";
import {
  CountriesNowResponse,
  FlagResponse,
  IAvailableCountry,
  ICountryInfo,
  NagerCountryInfo,
  PopulationResponse,
} from "../../types/types";

class CountryService {
  static readonly NAGER_URL?: string = process.env.NAGER_API_URL;
  static readonly POPUL_URL: string =
    "https://countriesnow.space/api/v0.1/countries/";

  static async getAllCountries(): Promise<IAvailableCountry[]> {
    if (!this.NAGER_URL) {
      throw new Error("API_URL is undefined");
    }

    const response = await axios.get<IAvailableCountry[]>(
      `${this.NAGER_URL}/AvailableCountries`,
    );

    return response.data;
  }

  static async getCountryInfo(countryCode: string): Promise<ICountryInfo> {
    if (!this.NAGER_URL) {
      throw new Error("API_URL is undefined");
    }

    const { data: countryData } = await axios.get<NagerCountryInfo>(
      `${this.NAGER_URL}/CountryInfo/${countryCode}`,
    );

    const populDataPromise = axios.post<
      CountriesNowResponse<PopulationResponse>
    >(`${this.POPUL_URL}/population`, {
      country: countryData.commonName,
    });

    const countryFlagPromise = axios.post<CountriesNowResponse<FlagResponse>>(
      `${this.POPUL_URL}/flag/images`,
      {
        country: countryData.commonName,
      },
    );

    const [populData, flagData] = await Promise.all([
      populDataPromise,
      countryFlagPromise,
    ]);

    return {
      list_of_borders: countryData.borders,
      population_data: populData.data.data.populationCounts,
      flag_url: flagData.data.data.flag,
    };
  }
}

export default CountryService;
