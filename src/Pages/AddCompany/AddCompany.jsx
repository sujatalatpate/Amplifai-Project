import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AddCompany.module.css";

const AddCompany = () => {
  const [formData, setFormData] = useState({
    name: "",
    ceo: "",
    revenue: "",
    profit: "",
    ebitda: "",
    margin: "",
    insights: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing companies
    const storedCompanies = JSON.parse(localStorage.getItem("companies")) || [];
    const newCompany = {
    id: storedCompanies.length + 1, 
    ...formData,
  };

    // Add new company
    storedCompanies.push(formData);

    // Save back to localStorage
    localStorage.setItem("companies", JSON.stringify(storedCompanies));

    // Redirect to companies list
    navigate("/companies");
  };

  return (
    <div className={styles.addCompany}>
      <h2>Add New Company</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        
        <div className={styles.formGroup}>
          <label>Company Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter company name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>CEO / Key Person</label>
          <input
            type="text"
            name="ceo"
            placeholder="Enter CEO/Key Person"
            value={formData.ceo}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Revenue</label>
          <input
            type="text"
            name="revenue"
            placeholder="Enter revenue (e.g. €245M)"
            value={formData.revenue}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Profit</label>
          <input
            type="text"
            name="profit"
            placeholder="Enter profit (e.g. +€35M)"
            value={formData.profit}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label>EBITDA</label>
          <input
            type="text"
            name="ebitda"
            placeholder="Enter EBITDA (e.g. +€25M)"
            value={formData.ebitda}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Gross Margin (%)</label>
          <input
            type="text"
            name="margin"
            placeholder="Enter gross margin (e.g. 28.5%)"
            value={formData.margin}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Key Insights</label>
          <input
            type="text"
            name="insights"
            placeholder="Enter key insights (e.g. Strong Growth)"
            value={formData.insights}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className={styles.submitBtn}>Add Company</button>
      </form>
    </div>
  );
};

export default AddCompany;
