import React, { useState, useEffect } from "react";
import styles from "./CompanyList.module.css";

const Companies = () => {
  const [companies, setCompanies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const storedCompanies = JSON.parse(localStorage.getItem("companies")) || [];
    setCompanies(storedCompanies);
  }, []);

  const filtered = companies.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>List of Companies</h3>
        <div className={styles.actions}>
          <button className={styles.exportBtn}>Export</button>
          <button
            className={styles.addBtn}
            onClick={() => (window.location.href = "/add-company")}
          >
            + Add Company
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <input
        type="text"
        className={styles.search}
        placeholder="Search Companies"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Table */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>CEO/Key Person</th>
            <th>Revenue</th>
            <th>Profit</th>
            <th>EBITDA</th>
            <th>Gross Margin</th>
            <th>Key Insights</th>
          </tr>
        </thead>
        <tbody>
          {filtered.length > 0 ? (
            filtered.map((c, index) => (
              <tr key={index}>
                <td>{c.name}</td>
                <td>{c.ceo}</td>
                <td>{c.revenue}</td>
                <td>{c.profit}</td>
                <td>{c.ebitda}</td>
                <td>{c.margin}</td>
                <td>{c.insights}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className={styles.noData}>
                No companies found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Companies;
