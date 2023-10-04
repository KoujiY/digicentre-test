import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler);

const labels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const options = { responsive: true };

const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "",
      data: [78, 95, 21, 36, 0, 70, 51, 75, 45, 88, 80, 37],
      borderColor: "rgb(218, 154, 0)",
      backgroundColor: "rgba(218, 154, 0, 0.1)",
    },
  ],
};

function LineChart1() {
  return (
    <>
      <div className="line-chart1-wrapper">
        <Line options={options} data={data}></Line>
      </div>
    </>
  );
}

export default LineChart1;
