import BarChart from "./components/BarChart";
import LineChart1 from "./components/LineChart1";
import LineChart2 from "./components/LineChart2";
import DoughnutChart from "./components/DoughnutChart";
import "./App.css";

const doughnut1Data = {
  textLeft: "投資",
  textCenter: "交易失敗",
  textRight: "轉帳",
  color1: "#009CED",
  color2: "#DA9A00",
};

const doughnut2Data = {
  textLeft: "投資",
  textCenter: "超時交易",
  textRight: "信用卡",
  color1: "#009E9C",
  color2: "#009CED",
};

function App() {
  return (
    <>
      <div className="chart-card">
        <div className="chart-card__content">
          <div className="chart-card__left-box">
            <h2>線上人數</h2>
            <h1>
              4,325<span>人</span>
            </h1>
            <p>Average</p>
            <h1>
              4,153<span>人</span>
            </h1>
          </div>
          <BarChart></BarChart>
        </div>
      </div>
      <div className="chart-card">
        <div className="chart-card__content">
          <div className="chart-card__left-box">
            <h2>交易筆數</h2>
            <h1>
              287,389<span>筆</span>
            </h1>
            <p>當月平均</p>
            <h1>
              177,652<span>筆</span>
            </h1>
          </div>
          <LineChart1></LineChart1>
        </div>
      </div>
      <div className="chart-card">
        <div className="chart-card__content chart-card__content--two-subtitle">
          <div className="chart-card__left-box">
            <h2>回應時間</h2>
            <p>Max</p>
            <h1>
              12.2<span>ms</span>
            </h1>
            <p>Average</p>
            <h1>
              5.1<span>ms</span>
            </h1>
          </div>
          <LineChart2></LineChart2>
        </div>
      </div>
      <div className="chart-card">
        <div className="chart-card__content chart-card__content--three-column">
          <div className="chart-card__left-box">
            <h2>{doughnut1Data.textCenter}</h2>
            <h1>
              3,823<span>筆</span>
            </h1>
            <DoughnutChart {...doughnut1Data}></DoughnutChart>
          </div>
          <div className="chart-card__button-box">
            <div className="chart-card__button">%</div>
            <div className="chart-card__button">Time</div>
          </div>
          <div className="chart-card__left-box">
            <h2>{doughnut2Data.textCenter}</h2>
            <h1>
              2,432<span>筆</span>
            </h1>
            <DoughnutChart {...doughnut2Data}></DoughnutChart>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
