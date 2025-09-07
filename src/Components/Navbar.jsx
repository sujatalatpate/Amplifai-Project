import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css"; // custom CSS

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const stored = localStorage.getItem("user");
  const user = stored ? JSON.parse(stored) : null;

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <aside className={styles.sidebar}>
      {/* Navigation Links */}
      <ul className={styles.navLinks}>
        <li>
           <div className={styles.logo}>
        <Link to="/dashboard">
        <img
          src={require("../assets/amplifai_no_logo.jpeg")}
          alt="Amplifai Logo"
        />
        </Link>
      </div>
        </li>
        <li>
          <Link
            to="/dashboard"
            className={location.pathname === "/dashboard" ? styles.active : ""}
          >
            <i className="bi bi-house"></i>
          </Link>
        </li>
        <li>
          <Link
            to="/companies"
            className={location.pathname === "/companies" ? styles.active : ""}
          >
            <i className="bi bi-building"></i>
          </Link>
        </li>
        <li>
          <Link
            to="/add-company"
            className={
              location.pathname === "/add-company" ? styles.active : ""
            }
          >
            <i className="bi bi-plus-circle"></i>
          </Link>
        </li>
      </ul>

      {/* Bottom Section */}
      <div className={styles.bottom}>
        {user ? (
          <button onClick={handleLogout} className={styles.logoutBtn}>
            <i className="bi bi-box-arrow-right"></i>
          </button>
        ) : (
          <Link to="/login" className={styles.loginBtn}>
            <i className="bi bi-box-arrow-in-right"></i>
          </Link>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
