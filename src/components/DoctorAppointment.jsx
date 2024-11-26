import axios from "axios";
import { useState } from "react";
import "/src/styles/DoctorAppointment.css";

const PeriodAppointment = () => {
  const symptoms = [
    "Heavy Bleeding",
    "Irregular Periods",
    "Severe Cramps",
    "Mood Swings",
    "Fatigue",
    "Headaches",
    "No Periods",
    "Other",
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    symptom: "",
    cycle: "",
    appointmentDate: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form data:", formData);
  
    try {
      const url = "http://localhost:5000/api/appointments";  
      console.log("Sending POST request to:", url);         
      const response = await axios.post(url, formData);
      
      // Response handling
      if (response.status === 201) {
        console.log("Appointment response:", response.data);
        setStatus("Appointment booked successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          symptom: "",
          cycle: "",
          appointmentDate: "",
          message: "",
        });
      } else {
        setStatus("Unexpected response. Please try again.");
      }
    } catch (error) {
      console.error("Error booking appointment:", error.response?.data || error.message);
      setStatus("Error booking appointment. Please try again later.");
    }
  };
  

  return (
    <div className="appointment-container">
      <h1>Book Your Period Health Appointment</h1>
      {status && <p className="status-message">{status}</p>}
      <div className="appointment-content">
        <div className="appointment-image">
          <img src="src/assets/DoctorAppointment.jpg" alt="Doctor Consultation" />
        </div>
        <form className="appointment-form" onSubmit={handleSubmit}>
          {/* Form Inputs */}
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="symptom">Select Symptoms</label>
            <select
              id="symptom"
              name="symptom"
              required
              value={formData.symptom}
              onChange={handleChange}
            >
              <option value="">Select a symptom</option>
              {symptoms.map((symptom, index) => (
                <option key={index} value={symptom}>
                  {symptom}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="cycle">Last Menstrual Cycle Date</label>
            <input
              type="date"
              id="cycle"
              name="cycle"
              required
              value={formData.cycle}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="appointmentDate">Preferred Appointment Date</label>
            <input
              type="date"
              id="appointmentDate"
              name="appointmentDate"
              required
              value={formData.appointmentDate}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Additional Message (Optional)</label>
            <textarea
              id="message"
              name="message"
              placeholder="Any additional symptoms or information"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="submit-btn">Book Appointment</button>
        </form>
      </div>
    </div>
  );
};

export default PeriodAppointment;
