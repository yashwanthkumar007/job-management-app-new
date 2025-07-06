import React, { useState } from "react";
import { FiSearch, FiMapPin, FiUser } from "react-icons/fi";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "../styles/SearchBar.css";
import "../styles/SalaryFilter.css";

const CombinedSearchFilter = ({
  onSearch,
  onFilter,
  onLocationChange,
  onJobTypeChange
}) => {
  const [range, setRange] = useState([50000, 80000]);

  const handleChange = (newRange) => {
    setRange(newRange);
    onFilter(newRange);
  };

  return (
    <div
      className="combined-inline-container"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        maxWidth: "1400px",
        paddingLeft: "50px",
        marginTop: "10px"
      }}
    >
      {/* Search Input */}
      <div
        className="search-inline-item"
        style={{ display: "flex", alignItems: "center" }}
      >
        <FiSearch className="search-inline-icon" />
        <input
          type="text"
          placeholder="Search By Job Title, Role"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      <div
        className="vertical-divider"
        style={{ height: "24px", borderLeft: "1px solid #ccc" }}
      ></div>

      {/* Location Dropdown */}
      <div
        className="search-inline-item"
        style={{ display: "flex", alignItems: "center" }}
      >
        <FiMapPin className="search-inline-icon" />
        <select onChange={(e) => onLocationChange(e.target.value)}>
          <option value="">Preferred Location</option>
          <option>Mumbai</option>
          <option>Delhi</option>
          <option>Bengaluru</option>
          <option>Hyderabad</option>
          <option>Chennai</option>
          <option>Pune</option>
          <option>Kolkata</option>
          <option>Gurgaon</option>
          <option>Noida</option>
          <option>Ahmedabad</option>
          <option>Jaipur</option>
          <option>Chandigarh</option>
          <option>Kochi</option>
          <option>Indore</option>
          <option>Bhubaneswar</option>
          <option>Lucknow</option>
          <option>Surat</option>
          <option>Vadodara</option>
          <option>Coimbatore</option>
          <option>Nagpur</option>
          <option>Thiruvananthapuram</option>
          <option>Mysuru</option>
          <option>Mangalore</option>
          <option>Vishakhapatnam</option>
          <option>Patna</option>
          <option>Bhopal</option>
          <option>Rajkot</option>
          <option>Madurai</option>
          <option>Ludhiana</option>
          <option>Jamshedpur</option>
          <option>Kanpur</option>
          <option>Guwahati</option>
          <option>Varanasi</option>
          <option>Ranchi</option>
          <option>Dehradun</option>
          <option>Amritsar</option>
          <option>Agra</option>
          <option>Faridabad</option>
          <option>Ghaziabad</option>
          <option>Aurangabad</option>
          <option>Vijayawada</option>
          <option>Salem</option>
          <option>Tiruchirappalli</option>
          <option>Udaipur</option>
          <option>Gwalior</option>
          <option>Meerut</option>
          <option>Nashik</option>
          <option>Hubli</option>
          <option>Jodhpur</option>
        </select>
      </div>

      <div
        className="vertical-divider"
        style={{ height: "24px", borderLeft: "1px solid #ccc" }}
      ></div>

      {/* Job Type Dropdown */}
      <div
        className="search-inline-item"
        style={{ display: "flex", alignItems: "center" }}
      >
        <FiUser className="search-inline-icon" />
        <select onChange={(e) => onJobTypeChange(e.target.value)}>
          <option value="">Job type</option>
          <option>Full Time</option>
          <option>Part Time</option>
          <option>Internship</option>
        </select>
      </div>

      <div
        className="vertical-divider"
        style={{ height: "24px", borderLeft: "1px solid #ccc" }}
      ></div>

      {/* Salary Filter */}
      <div
        className="salary-filter-container"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <div
          className="salary-range-font-align"
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <label className="salary-label">Salary Per Month</label>
          <div className="salary-range-text">
            ₹{range[0] / 1000}k - ₹{range[1] / 1000}k
          </div>
        </div>
        <div className="salary-range-slider" style={{ width: "200px" }}>
          <Slider
            range
            min={50000}
            max={100000}
            step={5000}
            value={range}
            onChange={handleChange}
            trackStyle={[{ backgroundColor: "#333", height: 4 }]}
            handleStyle={[
              {
                borderColor: "#333",
                height: 16,
                width: 16,
                marginTop: -6,
                backgroundColor: "#333"
              },
              {
                borderColor: "#333",
                height: 16,
                width: 16,
                marginTop: -6,
                backgroundColor: "#333"
              }
            ]}
            railStyle={{ backgroundColor: "#ddd", height: 4 }}
          />
        </div>
      </div>
    </div>
  );
};


export default CombinedSearchFilter;
