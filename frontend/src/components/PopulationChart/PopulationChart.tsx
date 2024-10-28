import "chart.js/auto";
import { Line } from "react-chartjs-2";
import { PopulationData } from "../../types/types";

type Props = {
  data: PopulationData[];
  className?: string;
};

export default function PopulationChart({ data, className }: Props) {
  return (
    <div className={className}>
      <h4 className="text-lg">Population Chart</h4>

      <Line
        data={{
          labels: data.map((elem) => elem.year),
          datasets: [
            {
              data: data.map((elem) => elem.value),
              label: "Population",
            },
          ],
        }}
      />
    </div>
  );
}
