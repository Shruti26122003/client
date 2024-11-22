import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";

const App = () => {
  const location = useLocation(); // Get the current path dynamically

  useEffect(() => {
    // Add class to body for signup and login pages
    if (location.pathname === "/signup" || location.pathname === "/login") {
      document.body.classList.add("signup-login");
    } else {
      document.body.classList.remove("signup-login");
    }
  }, [location]); // Run on location change

  const isHomePage = location.pathname === "/"; // Check if the current path is the home page

  return (
    <>
      {isHomePage && <Navbar />} {/* Show Navbar only on the home page */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      {isHomePage && <Footer />} {/* Show Footer only on the home page */}
    </>
  );
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
