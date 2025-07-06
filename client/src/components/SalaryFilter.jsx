import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "../styles/SalaryFilter.css";

const SalaryFilter = ({ onFilter }) => {
  const [range, setRange] = useState([50000, 80000]);

  const handleChange = (newRange) => {
    setRange(newRange);
    onFilter(newRange);
  };

  return (
    <div className="salary-filter-container">
      <div className="salary-range-font-align">
        <label className="salary-label">Salary Per Month</label>
        <div className="salary-range-text">
          ₹{range[0] / 1000}k - ₹{range[1] / 1000}k
        </div>
      </div>

      <div className="salary-range-slider">
        <Slider
          range
          min={50000}
          max={100000}
          step={5000}
          value={range}
          onChange={handleChange}
          trackStyle={[{ backgroundColor: "#333", height: 4 }]}
          handleStyle={[
            { borderColor: "#333", height: 16, width: 16, marginTop: -6, backgroundColor: "#333" },
            { borderColor: "#333", height: 16, width: 16, marginTop: -6, backgroundColor: "#333" },
          ]}
          railStyle={{ backgroundColor: "#ddd", height: 4 }}
        />
      </div>
    </div>
  );
};

export default SalaryFilter;
