import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Insurance = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:4000/insurance-plans') // Backend API endpoint
      .then((response) => {
        setPlans(response.data);
      })
      .catch((error) => {
        console.error('Error fetching insurance plans:', error);
      });
  }, []);

  return (
    <div className="insurance-page">
      <h1>Insurance Plans</h1>
      <div className="insurance-plans">
        {plans.length > 0 ? (
          plans.map((plan) => (
            <div key={plan._id} className="insurance-plan">
              <h3>{plan.name}</h3>
              <p>{plan.description}</p>
              <p>Price: {plan.price}</p>
              <button>Buy Now</button>
            </div>
          ))
        ) : (
          <p>No insurance plans available.</p>
        )}
      </div>
    </div>
  );
};

export default Insurance;
