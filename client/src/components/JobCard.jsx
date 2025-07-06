import React from "react";
import { FiUser, FiMapPin, FiBriefcase } from "react-icons/fi";
import moment from "moment";
import "../styles/JobCard.css";

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <div className="job-card-header">
        <img
          src={`/assets/${job.company.toLowerCase()}.jpeg`}
          alt={`${job.company} logo`}
          className="job-logo"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/assets/default.jpeg";
          }}
        />
        <span className="job-time">{moment(job.createdAt).fromNow()}</span>
      </div>

      <h3 className="job-title">{job.title}</h3>

      <div className="job-info">
        <span><FiUser /> 1–3 yr Exp</span>
        <span><FiMapPin /> {job.location}</span>
        <span><FiBriefcase /> {job.minSalary / 100000}–{job.maxSalary / 100000} LPA</span>
      </div>

      <ul className="job-description">
        <li>{job.description?.slice(0, 50) || "A user-friendly interface lets you browse stunning photos and videos"}</li>
        <li>{job.description?.slice(51, 150) || "Filter destinations based on interests and travel style, and create personalized"}</li>
      </ul>

      <button className="apply-btn">Apply Now</button>
    </div>
  );
};

export default JobCard;
