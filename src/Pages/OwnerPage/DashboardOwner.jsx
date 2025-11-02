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
    { time: '00:00' },
    { time: '12:00' },
    { time: '18:00' },
    { time: '06:00' },
  ];

  const handlePengajuan = () => {
    console.log('Pengajuan Permintaan');
    alert('Form pengajuan permintaan akan dibuka');
  };

  return (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <div>
          <h1>Dashboard Owner</h1>
          <p className="subtitle">Pantau kondisi semua kandang dan aktivitas peternakan Anda</p>
        </div>
        <button className="btn-primary" onClick={handlePengajuan}>
          <span className="plus-icon">+</span>
          Pengajuan Permintaan
        </button>
      </div>

      {/* Cards Grid */}
      <div className="cards-grid">
        {/* Kondisi Kandang Card */}
        <div className="card kondisi-card">
          <h2 className="card-title">Kondisi Kandang</h2>
          <div className="kandang-status">
            <div className="status-icon-warning">
              <svg width="80" height="80" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="40" fill="#FFD700"/>
                <path d="M40 18 L60 58 L20 58 Z" fill="#fff"/>
                <path d="M38 32 L42 32 L41.5 45 L38.5 45 Z" fill="#FFD700"/>
                <circle cx="40" cy="50" r="2.5" fill="#FFD700"/>
              </svg>
            </div>
            <h3 className="kandang-name">Kandang A</h3>
            <p className="kandang-condition">Waspada</p>
            <p className="kandang-temp">35°C</p>
          </div>
        </div>

        {/* Analisis Laporan Card */}
        <div className="card analisis-card">
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
              <option>Minum</option>
            </select>
          </div>
          <div className="chart-container">
            <div className="chart-y-axis">
              <span>6</span>
              <span>4</span>
              <span>2</span>
              <span>0</span>
            </div>
            <div className="chart-area">
              <div className="chart-bars">
                {chartData.map((data, index) => (
                  <div key={index} className="bar-group">
                    <div className="bar" style={{ height: `${(data.value / 6) * 100}%` }}>
                      <div className="bar-value">{data.value}</div>
                    </div>
                    <span className="bar-label">{data.time}</span>
                  </div>
                ))}
              </div>
              <div className="chart-x-label">Jam</div>
            </div>
            <div className="chart-y-label">Ekor</div>
          </div>
        </div>
      </div>

      {/* Aktovitas Peternakan */}
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
  );
};

export default Dashboard;