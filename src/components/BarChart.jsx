function BarChart() {
  return (
    <>
      <div className="bar-chart">
        <div className="bar-chart__line"></div>
        <div className="bar-chart__left-box">
          <div className="bar-chart__numbers">
            <span>4,325</span>
            <span className="bar-chart__numbers--center">4,153</span>
            <span>3,982</span>
          </div>
          <div className="bar-chart__bar">日</div>
        </div>
        <div className="bar-chart__right-box">
          <div className="bar-chart__bar">月</div>
          <div className="bar-chart__numbers">
            <span>5,124</span>
            <span className="bar-chart__numbers--center">4,388</span>
            <span>3,652</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default BarChart;
