const express = require("express");
const router = express.Router();
const ServiceEnquiry = require("../models/ServiceEnquiry");

router.post("/", async (req, res) => {
  try {
    const enquiry = new ServiceEnquiry(req.body);
    await enquiry.save();

    res.status(201).json({
      message: "Service enquiry submitted successfully",
    });
  } catch (error) {
    console.error("Service enquiry error:", error);
    res.status(500).json({
      message: "Failed to submit service enquiry",
    });
  }
});

module.exports = router;

