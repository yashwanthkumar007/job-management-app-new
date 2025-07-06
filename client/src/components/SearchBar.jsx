import React from "react";
import { FiSearch, FiMapPin, FiUser } from "react-icons/fi";
import "../styles/SearchBar.css";

const SearchBar = ({ onSearch }) => {
  return (
    <div className="search-inline-container">
      {/* Search Input */}
      <div className="search-inline-item">
        <FiSearch className="search-inline-icon" />
        <input
          type="text"
          placeholder="Search By Job Title, Role"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      <div className="vertical-divider"></div>

      {/* Location Dropdown */}
      <div className="search-inline-item">
        <FiMapPin className="search-inline-icon" />
        <select>
          <option>Preferred Location</option>
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

      <div className="vertical-divider"></div>

      {/* Job Type Dropdown */}
      <div className="search-inline-item">
        <FiUser className="search-inline-icon" />
        <select>
          <option>Job type</option>
          <option>Full Time</option>
          <option>Part Time</option>
          <option>Internship</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
