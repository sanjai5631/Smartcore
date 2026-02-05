const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const contactRoutes = require("./routes/contactRoutes");
const serviceEnquiryRoutes = require("./routes/serviceEnquiryRoutes");



// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/service-enquiry", serviceEnquiryRoutes);

app.use("/api/service-enquiry", (req, res, next) => {
  console.log("Service enquiry route hit");
  next();
});

// DB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Backend running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
