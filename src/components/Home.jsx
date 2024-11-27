import { useNavigate } from 'react-router-dom';
import '/src/styles/Home.css';

const Home = () => {
  const navigate = useNavigate();

  const navigateToDashboard = () => navigate('/dashboard');
  const navigateToDoctorAppointment = () => navigate('/doctorappointment');
  const navigateToArticlePage = () => navigate('/articles');

  return (
    <div className="home-container">
      <header>
        <h1>Period Tracker</h1>
        <p>
          Empowering women with insights, tools, and tips to manage menstrual health effectively.
        </p>
      </header>

      <div className="cta-container">
        <button className="cta-button" onClick={navigateToDashboard}>
          Start Tracking Your Cycle
        </button>
      </div>

      <section className="features">
        <h2>Key Features</h2>
        <div className="features-list">
          <div className="feature" onClick={navigateToDashboard}>
            <h3 className="clickable-heading">Cycle Tracking</h3>
            <p>Track your menstrual cycle, symptoms, and health insights.</p>
          </div>
          <div className="feature" onClick={navigateToArticlePage}>
            <h3 className="clickable-heading">Expert Insights</h3>
            <p>Access tips on managing your health and wellness.</p>
          </div>
          <div className="feature" onClick={navigateToDoctorAppointment}>
            <h3 className="clickable-heading">Doctor Appointments</h3>
            <p>Schedule and manage your health consultations.</p>
          </div>
        </div>
      </section>

      <section className="about">
        <h2>Why Period Tracker?</h2>
        <p>
          Our app offers tools to track your cycle, manage health, and gain personalized insights,
          empowering you to make informed decisions.
        </p>
      </section>
    </div>
  );
};

export default Home;
