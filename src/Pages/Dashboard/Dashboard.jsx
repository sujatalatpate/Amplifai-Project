import React from "react";
import styles from "./Dashboard.module.css";
import { Line, Bar } from "react-chartjs-2";
import { stats, entities, barOptions, barData, lineOptions, lineData } from "../../Data/DashboardData";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <h4>Dashboard</h4>
        <select className={styles.dropdown}>
          <option>FY (2024-2025)</option>
        </select>
      </div>

      <div className={styles.statsGrid}>
        {stats.map((s, i) => (
          <div key={i} className={styles.statCard}>
            <div className={styles.statTitle}>{s.title}</div>
            <div className={styles.statValue}>{s.value}</div>
            <div
              className={`${styles.statChange} ${
                s.change.startsWith("+") ? styles.positive : styles.negative
              }`}
            >
              {s.change}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.chartsGrid}>
        <div className={styles.chartCard}>
          <h4>Revenue & Profit Trend</h4>
          <Line data={lineData} options={lineOptions} />
        </div>

        <div className={styles.chartCard}>
          <h6>Margin Trends (Last 6 Months)</h6>
          <Bar data={barData} options={barOptions} />
        </div>
      </div>
      <div className={styles.tableCard}>
  <h4>Entity-wise Performance</h4>
  <table className={styles.table}>
    <thead>
      <tr>
        <th>Company Name</th>
        <th>Revenue</th>
        <th>Net Profit</th>
        <th>EBITDA</th>
        <th>Cash Flow (EM)</th>
        <th>WC Cycle (Days)</th>
        <th>Change</th>
      </tr>
    </thead>
    <tbody>
      {entities.map((e, i) => (
        <tr key={i}>
          <td>{e.company}</td>
          <td>{e.revenue}</td>
          <td>{e.netProfit}</td>
          <td>{e.ebitda}</td>
          <td>{e.cashFlow}</td>
          <td>{e.wcCycle}</td>
          <td
            className={
              e.change.startsWith("+") ? styles.positive : styles.negative
            }
          >
            {e.change}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </div>
  );
};

export default Dashboard;
