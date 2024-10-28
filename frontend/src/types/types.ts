export interface ICountry {
  countryCode: string;
  name: string;
}

export interface CountriesResponse {
  countries: ICountry[];
}

interface PopulationData {
  year: number;
  value: number;
}

interface Country {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: Country[];
}

export interface ICountryInfo extends Country {
  population_data: PopulationData[];
  flag_url: string;
}

export interface CountryDataResponse {
  country_info: ICountryInfo;
}
