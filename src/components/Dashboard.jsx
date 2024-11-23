import { useState } from 'react';
import axios from 'axios';
import { FaWeightHanging, FaWater, FaCalendarAlt, FaSmile, FaHandHoldingHeart, FaPaperPlane } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '/src/styles/Dashboard.css';

const Dashboard = () => {
  const [cycleLength, setCycleLength] = useState('');
  const [mood, setMood] = useState('');
  const [weight, setWeight] = useState('');
  const [water, setWater] = useState('');
  const [expertTips, setExpertTips] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const navigate = useNavigate(); // For navigation

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/submit', {
        cycleLength,
        mood,
        weight,
        water,
        expertTips,
      });

      setMessage(response.data.message);
      setMessageType(response.data.success ? 'success' : 'error');

      // If submission is successful, redirect to /message
      if (response.data.success) {
        navigate('/message'); // Direct navigation to the message page
      }
    } catch (error) {
      console.error('Error occurred:', error);
      setMessage('Error submitting data: ' + error.message);
      setMessageType('error');
    }
  };

  return (
    <div className="dashboard-page">
      {/* Message Box */}
      {message && (
        <div className={`message-box ${messageType}`}>
          <p>{message}</p>
        </div>
      )}

      <div className="dashboard-container">
        <h1>Track Your Cycle</h1>
        <form className="dashboard-form" onSubmit={handleSubmit}>
          <div className="dashboard-section">
            <FaCalendarAlt className="dashboard-icon" />
            <label htmlFor="cycleLength">Cycle Length (days):</label>
            <input
              type="number"
              id="cycleLength"
              value={cycleLength}
              onChange={(e) => setCycleLength(e.target.value)}
              placeholder="Enter cycle length"
            />
          </div>

          <div className="dashboard-section">
            <FaSmile className="dashboard-icon" />
            <label htmlFor="mood">Mood:</label>
            <input
              type="text"
              id="mood"
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              placeholder="Enter your mood"
            />
          </div>

          <div className="dashboard-section">
            <FaWeightHanging className="dashboard-icon" />
            <label htmlFor="weight">Weight (kg):</label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter weight"
            />
          </div>

          <div className="dashboard-section">
            <FaWater className="dashboard-icon" />
            <label htmlFor="water">Water Consumption (ml):</label>
            <input
              type="number"
              id="water"
              value={water}
              onChange={(e) => setWater(e.target.value)}
              placeholder="Enter water consumption"
            />
          </div>

          <div className="dashboard-section">
            <FaHandHoldingHeart className="dashboard-icon" />
            <label htmlFor="expertTips">Expert Tips:</label>
            <textarea
              id="expertTips"
              value={expertTips}
              onChange={(e) => setExpertTips(e.target.value)}
              placeholder="Enter expert tips"
            />
          </div>

          <button type="submit">
            <FaPaperPlane className="icon" /> Submit Data
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
