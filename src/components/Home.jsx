// src/components/Home.js
import "/src/styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Period Tracker</h1>
      <p>
        Empowering women with insights, tools, and tips to track and manage
        menstrual health.
      </p>

      <div className="cta-container">
        <button className="cta-button">Start Tracking Your Cycle</button>
      </div>

      <section className="features">
        <h2>Key Features</h2>
        <div className="features-list">
          <div className="feature">
            <h3>Cycle Tracking</h3>
            <p>Track your menstrual cycle, symptoms, and health insights.</p>
          </div>
          <div className="feature">
            <h3>Expert Insights</h3>
            <p>Get expert tips on managing your health and wellness.</p>
          </div>
          <div className="feature">
            <h3>Doctor Appointments</h3>
            <p>Schedule doctor appointments and manage your health consultations.</p>
          </div>
        </div>
      </section>

      <section className="about">
        <h2>Why Period Tracker?</h2>
        <p>
          Our Period Tracker app helps you stay informed and in control of your
          menstrual health. By providing personalized insights, we empower you
          to make healthier choices and understand your body better.
        </p>
        <p>
          Whether you are looking to track your cycle for health reasons or just
          want to better understand your body, our app offers tools that support
          your journey.
        </p>
      </section>
    </div>
  );
};

export default Home;
