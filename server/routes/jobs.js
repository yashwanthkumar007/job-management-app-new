const express = require("express");
const router = express.Router();
const Job = require("../models/job");

// Create a new job
router.post("/create", async (req, res) => {
  try {
    const {
      title,
      company,
      location,
      jobType,
      minSalary,
      maxSalary,
      deadline,
      description
    } = req.body;

    // Basic validation
    if (
      !title ||
      !company ||
      !location ||
      !jobType ||
      minSalary == null ||
      maxSalary == null ||
      !deadline ||
      !description
    ) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newJob = await Job.create({
      title,
      company,
      location,
      jobType,
      minSalary,
      maxSalary,
      deadline,
      description
    });

    res.status(201).json(newJob);
  } catch (err) {
    console.error("Error creating job:", err);
    res.status(500).json({
      error: "Failed to create job",
      details: err.message
    });
  }
});

// Get all jobs
router.get("/all", async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.json(jobs);
  } catch (err) {
    console.error("Error fetching jobs:", err);
    res.status(500).json({
      error: "Failed to fetch jobs",
      details: err.message
    });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);
    res.json({ message: "Job deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error deleting job" });
  }
});


module.exports = router;
