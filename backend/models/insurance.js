const mongoose = require("mongoose");

// Define the schema for the insurance model
const insuranceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  coverage: { type: String, required: true },
  duration: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Create a model using the schema
const Insurance = mongoose.model("Insurance", insuranceSchema);

module.exports = Insurance;
