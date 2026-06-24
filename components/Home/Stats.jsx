"use client";

import { useEffect, useState } from "react";
import "./Stats.css";

export default function Stats() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalStories: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(`/api/stats`);
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error("Failed to load stats", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <section className="stats-section">
      <div className="container">
        <h2>Our Achievement</h2>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>{stats.totalUsers}</h3>
            <p>Total Views</p>
          </div>

          <div className="stat-card">
            <h3>{stats.totalStories}</h3>
            <p>Total Stories</p>
          </div>
        </div>
      </div>
    </section>
  );
}
