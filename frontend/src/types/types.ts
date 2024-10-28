export interface ICountry {
  countryCode: string;
  name: string;
}

export interface CountriesResponse {
  countries: ICountry[];
}
