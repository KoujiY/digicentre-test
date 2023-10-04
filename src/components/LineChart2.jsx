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
      data: [75, 2, 70, 52, 59, 41, 55, 80, 94, 0, 28, 56],
      borderColor: "rgb(218, 154, 0)",
      backgroundColor: "rgba(218, 154, 0, 0.1)",
    },
    {
      fill: true,
      label: "",
      data: [60, 96, 56, 30, 43, 50, 10, 72, 75, 82, 56, 53],
      borderColor: "rgb(16, 169, 183)",
      backgroundColor: "rgba(16, 169, 183, 0.1)",
    },
  ],
};

function LineChart2() {
  return (
    <>
      <div className="line-chart2-wrapper">
        <div className="bar-chart__line"></div>
        <Line options={options} data={data}></Line>
      </div>
    </>
  );
}

export default LineChart2;
