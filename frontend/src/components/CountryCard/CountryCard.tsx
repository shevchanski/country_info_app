import { Link } from "react-router-dom";
import { ICountry } from "../../types/types";

type Props = {
  data: ICountry;
};

export default function CountryCard({ data }: Props) {
  const { name, countryCode } = data;

  return (
    <Link
      to={`/countries/${countryCode}`}
      className="flex justify-between p-5  border-gray-200 rounded-lg border-2 hover:scale-105 duration-75"
    >
      <h4 className="text-sm font-semibold leading-6 text-gray-900">{name}</h4>
      <p className="text-sm leading-6 text-gray-900">{countryCode}</p>
    </Link>
  );
}
