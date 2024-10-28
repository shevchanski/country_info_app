import axios from "axios";
import { CountriesResponse, ICountry } from "../types/types";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

const CountryService = {
  async fetchAllCountries(): Promise<ICountry[]> {
    const response = await api.get<CountriesResponse>("/countries");

    return response.data.countries;
  },
};

export default CountryService;
