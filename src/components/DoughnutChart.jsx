import PropTypes from "prop-types";
import { Chart as ChartJS, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement);

const options = { cutout: "80%", radius: "85%" };

function DoughnutChart({ textLeft, textCenter, textRight, color1, color2 }) {
  const data = {
    labels: ["轉帳", "投資"],
    datasets: [
      {
        label: "",
        data: [95, 5],
        backgroundColor: [color1, color2],
        borderColor: [color1, color2],
      },
    ],
  };

  return (
    <>
      <div className="doughnut-chart-wrapper">
        <div className="doughnut-chart-wrapper__left-text">{textLeft}</div>
        <div className="doughnut-chart-wrapper__center-text">{textCenter}</div>
        <div className="doughnut-chart-wrapper__right-text">{textRight}</div>
        <Doughnut options={options} data={data}></Doughnut>
      </div>
    </>
  );
}

DoughnutChart.propTypes = {
  textLeft: PropTypes.string,
  textCenter: PropTypes.string,
  textRight: PropTypes.string,
  color1: PropTypes.string,
  color2: PropTypes.string,
};

export default DoughnutChart;
