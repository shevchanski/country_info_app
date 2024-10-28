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
      className="flex justify-between p-5 gap-2 shadow-md rounded-lg max-w-xs items-start border border-gray-200 transform transition-transform hover:scale-105"
    >
      <h4 className="text-sm font-semibold leading-6 text-gray-900">{name}</h4>
      <p className="text-sm leading-6 text-gray-900">{countryCode}</p>
    </Link>
  );
}
