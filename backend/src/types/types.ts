export interface IAvailableCountry {
  countryCode: string;
  name: string;
}

export interface NagerCountryInfo {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: string[];
}

interface PopulationData {
  year: number;
  value: number;
}

export interface CountriesNowResponse<T> {
  error: boolean;
  msg: string;
  data: T;
}

export interface PopulationResponse {
  country: string;
  code: string;
  iso3: string;
  populationCounts: PopulationData[];
}

export interface FlagResponse {
  name: string;
  flag: string;
  iso2: string;
  iso3: string;
}

export interface ICountryInfo {
  list_of_borders: string[];
  population_data: PopulationData[];
  flag_url: string;
}
