import { useEffect, useState } from "react";

import { ICountry } from "../../types/types";
import CountryService from "../../services/country.service";
import CountryCard from "../../components/CountryCard/CountryCard";

export default function CountriesPage() {
  const [countries, setCoutries] = useState<ICountry[]>([]);

  const fetchData = async () => {
    try {
      const response = await CountryService.fetchAllCountries();

      setCoutries(response);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="grid grid-cols-10 gap-2 p-2 shadow-gray-400">
        {countries.map((country, i) => (
          <CountryCard key={i} data={country} />
        ))}
      </div>
    </>
  );
}
