// In insuranceRoutes.js

const express = require('express');
const router = express.Router();
const Insurance = require('../models/insurance'); // Correct path to your insurance model

// POST route to add a new insurance plan
router.post('/add', async (req, res) => {
  try {
    const { name, description, price, coverage, duration } = req.body;
    
    // Create a new insurance plan
    const newPlan = new Insurance({
      name,
      description,
      price,
      coverage,
      duration,
    });

    // Save the insurance plan to the database
    await newPlan.save();

    res.json({ success: true, message: 'Insurance plan added successfully', plan: newPlan });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error adding insurance plan', error });
  }
});

module.exports = router;

