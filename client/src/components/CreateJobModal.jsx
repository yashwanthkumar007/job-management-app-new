import React, { useState, useRef } from "react";
import axios from "axios";
import "../styles/CreateJobModal.css";

const CreateJobModal = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const dateInputRef = useRef(null);

  const handleSubmit = async () => {
    // Basic validation
    if (
      !title ||
      !company ||
      !location ||
      !jobType ||
      !minSalary ||
      !maxSalary ||
      !deadline ||
      !description
    ) {
      alert("Please fill in all fields.");
      return;
    }

    const parsedMinSalary = parseInt(minSalary.replace(/,/g, ""));
    const parsedMaxSalary = parseInt(maxSalary.replace(/,/g, ""));

    if (isNaN(parsedMinSalary) || isNaN(parsedMaxSalary)) {
      alert("Salary must be a valid number.");
      return;
    }

    const data = {
      title,
      company,
      location,
      jobType,
      minSalary: parsedMinSalary,
      maxSalary: parsedMaxSalary,
      description,
      deadline,
    };

    try {
      const token = localStorage.getItem("token");
      await axios.post("http://localhost:5000/api/jobs/create", data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      onClose();
    } catch (err) {
      console.error(err);
      alert(
        "Failed to publish job: " +
          (err.response?.data?.error || err.message)
      );
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Create Job Opening</h2>

        <div className="modal-grid">
          <div className="modal-group">
            <label>Job Title</label>
            <input
              type="text"
              placeholder="Full Stack Developer"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="modal-group">
            <label>Company Name</label>
            <input
              type="text"
              placeholder="Amazon, Swiggy, Tesla"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>

          <div className="modal-group">
            <label>Location</label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">Preferred Location</option>
              <option>Mumbai</option>
              <option>Delhi</option>
              <option>Bengaluru</option>
              <option>Hyderabad</option>
              <option>Chennai</option>
              <option>Pune</option>
              <option>Kolkata</option>
              {/* (More options as needed) */}
            </select>
          </div>

          <div className="modal-group">
            <label>Job Type</label>
            <select
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
            >
              <option value="">Job Type</option>
              <option>Internship</option>
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Contract</option>
            </select>
          </div>

          <div className="modal-group salary-group">
            <label>Salary Range</label>
            <div className="salary-inputs">
              <input
                type="text"
                placeholder="₹0"
                value={minSalary}
                onChange={(e) => setMinSalary(e.target.value)}
              />
              <input
                type="text"
                placeholder="₹12,00,000"
                value={maxSalary}
                onChange={(e) => setMaxSalary(e.target.value)}
              />
            </div>
          </div>

          <div className="modal-group">
            <label>Application Deadline</label>
            <div className="deadline-input">
              <input
                ref={dateInputRef}
                type="date"
                value={deadline}
                min={new Date().toISOString().split("T")[0]}
                onChange={(e) => setDeadline(e.target.value)}
              />
            </div>
          </div>

          <div className="modal-group full-width">
            <label>Job Description</label>
            <textarea
              placeholder="Please share a description to let the candidate know about the role."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
        </div>

        <div className="modal-actions">
          <button className="btn-draft">Save Draft</button>
          <button className="btn-publish" onClick={handleSubmit}>
            Publish ➤
          </button>
        </div>
      </div>
      <div className="modal-backdrop" onClick={onClose}></div>
    </div>
  );
};

export default CreateJobModal;
