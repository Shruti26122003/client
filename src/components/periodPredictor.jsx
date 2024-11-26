import { useState } from 'react';
import axios from 'axios';
import "/src/styles/periodPerdictor.css";

const PeriodPredictor = () => {
  const [lastPeriodDate, setLastPeriodDate] = useState('');
  const [cycleLength, setCycleLength] = useState(28); 
  const [nextPeriodDate, setNextPeriodDate] = useState('');

  const handleSavePeriod = async () => {
    const userId = 'user123'; 
    try {
      const response = await axios.post('http://localhost:5000/api/save-period', {
        userId,
        lastPeriodDate,
        cycleLength,
      });
      console.log(response.data.message);
    } catch (error) {
      console.error('Error saving period data:', error);
    }
  };

  const handlePredictNextPeriod = async () => {
    const userId = 'user123'; 
    try {
      const response = await axios.post('http://localhost:5000/api/predict-next-period', {
        userId,
      });
      setNextPeriodDate(new Date(response.data.nextPeriodDate).toDateString());
    } catch (error) {
      console.error('Error predicting next period:', error);
    }
  };

  return (
    <div className="period-predictor">
      <div className="period-predictor-header">
        <img src="src/assets/period-predictor.jpg" alt="Period Tracker" className="period-predictor-image" />
        <h3>Track Your Periods</h3>
      </div>

      <div>
        <label>
          Last Period Date:
          <input
            type="date"
            value={lastPeriodDate}
            onChange={(e) => setLastPeriodDate(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          Cycle Length (Days):
          <input
            type="number"
            value={cycleLength}
            onChange={(e) => setCycleLength(Number(e.target.value))}
          />
        </label>
      </div>

      <button onClick={handleSavePeriod}>Save Period Data</button>

      <hr />

      <button onClick={handlePredictNextPeriod}>Predict Next Period</button>

      {nextPeriodDate && <p>Next Period is predicted on: {nextPeriodDate}</p>}
    </div>
  );
};

export default PeriodPredictor;
