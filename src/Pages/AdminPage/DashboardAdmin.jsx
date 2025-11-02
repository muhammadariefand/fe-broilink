import React from 'react';
import './DashboardAdmin.css';

const DashboardAdmin = () => {
  const recentRequests = [
    {
      name: 'Dibo',
      role: 'Owner',
      date: '15 Mei 2025, 08.24',
      type: 'Tambah Kandang'
    },
    {
      name: 'Obin',
      role: 'Owner',
      date: '15 Mei 2025, 08.25',
      type: 'Tambah Peternak'
    },
    {
      name: 'Guest',
      role: '-',
      date: '15 Mei 2025, 08.26',
      type: '-'
    }
  ];

  return (

    
    <div className="dashboard-admin-container">
      <div className="manajemen-header">
        <h1>Dashboard Admin</h1>
      </div>
      {/* Stats Cards */}
      <div className="stats-grid-admin">
        <div className="stat-card-admin">
          <h3 className="stat-label-admin">Total Pengguna Owner</h3>
          <div className="stat-value-admin">3</div>
        </div>

        <div className="stat-card-admin">
          <h3 className="stat-label-admin">Total Pengguna Peternak</h3>
          <div className="stat-value-admin">5</div>
        </div>

        <div className="stat-card-admin">
          <h3 className="stat-label-admin">Total Laporan Guest</h3>
          <div className="stat-value-admin">2</div>
        </div>
      </div>

      {/* Recent Requests */}
      <div className="requests-section-admin">
        <h2 className="section-title-admin">Permintaan Terbaru</h2>
        
        <div className="requests-grid-admin">
          {recentRequests.map((request, index) => (
            <div key={index} className="request-card-admin">
              <div className="request-header-admin">
                <div className="request-user-admin">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <circle cx="10" cy="7" r="3"/>
                    <path d="M4 18c0-3.3 2.7-6 6-6s6 2.7 6 6"/>
                  </svg>
                  <span className="request-name-admin">{request.name}</span>
                </div>
                <span className="request-role-admin">{request.role}</span>
              </div>
              
              <div className="request-date-admin">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <circle cx="8" cy="8" r="7" stroke="currentColor" fill="none"/>
                  <path d="M8 4v4l3 2"/>
                </svg>
                <span>{request.date}</span>
              </div>
              
              <div className="request-type-admin">{request.type}</div>
            </div>
          ))}
        </div>

        <div className="view-all-section-admin">
          <button className="btn-view-all-admin">Lihat Semua Laporan</button>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;