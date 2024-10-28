import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CountryCard from "../../components/CountryCard/CountryCard";
import CountryService from "../../services/country.service";
import { ICountryInfo } from "../../types/types";
import PopulationChart from "../../components/PopulationChart/PopulationChart";

type Params = {
  countryCode: string;
};

export default function CountryInfoPage() {
  const { countryCode } = useParams<Params>();
  const [country, setCountry] = useState<ICountryInfo | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = async (countryCode: string) => {
    try {
      const response = await CountryService.fetchCountryData(countryCode);
      setCountry(response);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    if (countryCode) {
      fetchData(countryCode);
    }
  }, [countryCode]);

  return (
    <>
      <div className="p-5 flex justify-center ">
        {!isLoading && country ? (
          <div className="w-full ">
            <h1 className="text-3xl">
              {country.officialName}
              <img src={country.flag_url} className="h-8 inline ml-2 border" />
            </h1>
            <div className="flex gap-12 flex-col lg:flex-row">
              <p className=" text-sm mt-2 ">
                <h3 className="text-xl ">Borders:</h3>
                <div className="flex flex-col gap-y-3 mt-5">
                  {country.borders.map((border, i) => (
                    <CountryCard
                      key={i}
                      data={{
                        name: border.officialName,
                        countryCode: border.countryCode,
                      }}
                    />
                  ))}
                </div>
              </p>
              <PopulationChart
                data={country.population_data}
                className="basis-3/6 "
              />
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
}
