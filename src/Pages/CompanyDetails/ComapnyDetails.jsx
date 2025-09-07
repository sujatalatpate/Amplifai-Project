import React, { useEffect, useState } from "react";
import styles from "./CompanyDetails.module.css";
import { useParams, useNavigate } from "react-router-dom";

const CompanyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    const companies = JSON.parse(localStorage.getItem("companies") || "[]");
    const found = companies.find((c) => String(c.id) === String(id));
    setCompany(found || null);
  }, [id]);

  if (!company) {
    return (
      <div className={styles.companyDetails}>
        <h2>Company Details</h2>
        <p>Company not found.</p>
        <button className={styles.backButton} onClick={() => navigate("/companies")}>
          Back
        </button>
      </div>
    );
  }

  return (
    <div className={styles.companyDetails}>
      <h2>Company Details</h2>
      <div className={styles.card}>
        <div className={styles.cardBody}>
          <h3 className={styles.cardTitle}>{company.name}</h3>
          <p className={styles.cardText}>
            {company.description || "No description provided."}
          </p>
        </div>
        <ul className={styles.list}>
          <li><b>Industry:</b> {company.industry}</li>
          <li><b>Employees:</b> {company.employees}</li>
        </ul>
      </div>
    </div>
  );
};

export default CompanyDetails;
