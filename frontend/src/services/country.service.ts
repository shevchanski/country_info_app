import axios from "axios";
import {
  CountriesResponse,
  CountryDataResponse,
  ICountry,
  ICountryInfo,
} from "../types/types";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

const CountryService = {
  async fetchAllCountries(): Promise<ICountry[]> {
    const response = await api.get<CountriesResponse>("/countries");

    return response.data.countries;
  },

  async fetchCountryData(countryCode: string): Promise<ICountryInfo> {
    const response = await api.get<CountryDataResponse>(
      `/countries/${countryCode}`,
    );

    return response.data.country_info;
  },
};

export default CountryService;
