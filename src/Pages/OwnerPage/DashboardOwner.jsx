import React, { useState } from 'react';
import './DashboardOwner.css';

const Dashboard = () => {
  const [selectedFilter, setSelectedFilter] = useState('Mortalitas');

  const activities = [
    {
      time: '18.30',
      activity: 'Update Indikator',
      detail: 'Kelembapan: 70%',
      status: 'Normal'
    },
    {
      time: '17.56',
      activity: 'Laporan Minum',
      detail: 'oleh Budi',
      status: 'Info'
    },
    {
      time: '12.45',
      activity: 'Laporan Pakan',
      detail: 'oleh Budi',
      status: 'Info'
    },
    {
      time: '08.00',
      activity: 'Update Indikator',
      detail: 'Suhu: 35°C',
      status: 'Waspada'
    },
    {
      time: '07.30',
      activity: 'Update Indikator',
      detail: 'Suhu: 35,1°C',
      status: 'Bahaya'
    }
  ];

  const chartData = [
    { time: '00:00', value: 4 },
    { time: '06:00', value: 4 },
    { time: '12:00', value: 4 },
    { time: '18:00', value: 4 }
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <div className="logo-icon">
            {/* <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect x="8" y="8" width="10" height="10" fill="#000" rx="2"/>
              <rect x="22" y="8" width="10" height="10" fill="#000" rx="2"/>
              <rect x="8" y="22" width="10" height="10" fill="#000" rx="2"/>
              <rect x="22" y="22" width="10" height="10" fill="#000" rx="2"/>
            </svg> */}
          </div>
          <span className="logo-text">Broilink</span>
        </div>

        <nav className="nav-menu">
          <div className="nav-item active">
            {/* <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 3h6v6H3V3zm0 8h6v6H3v-6zm8-8h6v6h-6V3zm0 8h6v6h-6v-6z"/>
            </svg> */}
            <span>Dashboard</span>
          </div>
          <div className="nav-item">
            {/* <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <rect x="2" y="3" width="16" height="14" rx="2" stroke="currentColor" fill="none"/>
              <line x1="2" y1="7" x2="18" y2="7" stroke="currentColor"/>
            </svg> */}
            <span>Monitoring</span>
          </div>
          <div className="nav-item">
            {/* <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 10l8-8 8 8M4 8v9h4v-5h4v5h4V8"/>
            </svg> */}
            <span>Diagram Analisis</span>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header className="header">
          <div className="header-right">
            <div className="profile-info">
              <div className="user-name">Ahmad Dhani</div>
              <div className="user-email">ahmaddhani@gmail.com</div>
            </div>
            <div className="user-avatar">
              <svg width="32" height="32" viewBox="0 0 32 32">
                <circle cx="16" cy="16" r="16" fill="#e0e0e0"/>
                <path d="M16 16a5 5 0 100-10 5 5 0 000 10zM8 26a8 8 0 0116 0" fill="#999"/>
              </svg>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="dashboard-content">
          <div className="dashboard-header">
            <div>
              <h1>Dashboard Owner</h1>
              <p className="subtitle">Pantau kondisi semua kandang dan aktivitas peternakan Anda</p>
            </div>
            <button className="btn-primary">
              <span className="plus-icon">+</span>
              Pengajuan Permintaan
            </button>
          </div>

          {/* Cards Grid */}
          <div className="cards-grid">
            {/* Kondisi Kandang Card */}
            <div className="card">
              <h2 className="card-title">Kondisi Kandang</h2>
              <div className="kandang-status">
                <div className="status-icon">
                  <svg width="60" height="60" viewBox="0 0 60 60">
                    <circle cx="30" cy="30" r="30" fill="#FFD700"/>
                    <path d="M30 15l5 10h10l-8 8 3 10-10-6-10 6 3-10-8-8h10z" fill="#FFF"/>
                  </svg>
                </div>
                <h3 className="kandang-name">Kandang A</h3>
                <p className="kandang-condition">Waspada</p>
                <p className="kandang-temp">35°C</p>
              </div>
            </div>

            {/* Analisis Laporan Card */}
            <div className="card">
              <div className="card-header-row">
                <h2 className="card-title">Analisis Laporan (Terbaru)</h2>
                <select 
                  className="filter-select"
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                >
                  <option>Mortalitas</option>
                  <option>Bobot</option>
                  <option>Pakan</option>              
                  <option></option>
                </select>
              </div>
              <div className="chart-container">
                <div className="chart-y-axis">
                  <span>6</span>
                  <span>4</span>
                  <span>2</span>
                  <span>0</span>
                </div>
                <div className="chart-bars">
                  {chartData.map((data, index) => (
                    <div key={index} className="bar-group">
                      <div className="bar" style={{ height: `${(data.value / 6) * 100}%` }}></div>
                      <span className="bar-label">{data.time}</span>
                    </div>
                  ))}
                </div>
                <div className="chart-x-label">Jam</div>
                <div className="chart-y-label">Ekor</div>
              </div>
            </div>
          </div>

          {/* Activities Table */}
          <div className="card activities-card">
            <h2 className="card-title">Aktivitas Peternakan</h2>
            <table className="activities-table">
              <thead>
                <tr>
                  <th>Waktu</th>
                  <th>Aktivitas</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {activities.map((activity, index) => (
                  <tr key={index}>
                    <td className="time-cell">{activity.time}</td>
                    <td>
                      <div className="activity-cell">
                        <span className="activity-name">{activity.activity}</span>
                        <span className="activity-detail">{activity.detail}</span>
                      </div>
                    </td>
                    <td>
                      <span className={`status-badge status-${activity.status.toLowerCase()}`}>
                        {activity.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;