import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import CombinedSearchFilter from "../components/CombinedSearchFilter";
import JobCard from "../components/JobCard";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  // Filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [salaryRange, setSalaryRange] = useState(null); // Start with no salary filter
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");

  // Fetch all jobs on mount
  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const token = localStorage.getItem("token") || "";
      const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/jobs/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setJobs(res.data || []);
      setFilteredJobs(res.data || []);
    } catch (err) {
      console.error("Failed to fetch jobs", err);
    }
  };

  // Apply filters whenever any filter changes
  useEffect(() => {
    let updated = [...jobs];

    // Search filter
    if (searchQuery.trim()) {
      updated = updated.filter((job) =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Salary filter (only if user has chosen)
    if (salaryRange && salaryRange.length === 2) {
      const [min, max] = salaryRange;
      updated = updated.filter(
        (job) => job.minSalary <= max && job.maxSalary >= min
      );
    }

    // Location filter
    if (location) {
      updated = updated.filter((job) => job.location === location);
    }

    // Job type filter
    if (jobType) {
      updated = updated.filter((job) => job.jobType === jobType);
    }

    setFilteredJobs(updated);
  }, [jobs, searchQuery, salaryRange, location, jobType]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      try {
        const token = localStorage.getItem("token") || "";
        await axios.delete(`http://localhost:5000/api/jobs/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setJobs((prev) => prev.filter((job) => job._id !== id));
      } catch (err) {
        console.error("Failed to delete job", err);
        alert("Error deleting job");
      }
    }
  };

  return (
    <div className="dashboard-container">
      <Navbar />

      <CombinedSearchFilter
        onSearch={setSearchQuery}
        onFilter={setSalaryRange}
        onLocationChange={setLocation}
        onJobTypeChange={setJobType}
      />

      <div className="job-cards">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <JobCard key={job._id} job={job} onDelete={handleDelete} />
          ))
        ) : (
          <p className="no-jobs">No matching jobs found.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
