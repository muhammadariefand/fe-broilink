import React, { useState } from 'react';
import './ManajemenPengguna.css';

const ManajemenPengguna = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const users = [
    {
      username: 'Budi',
      role: 'Peternak',
      status: 'Aktif',
      joinDate: '2025-09-20',
      lastLogin: '2025-09-28',
      email: 'budibudi@gmail.com'
    },
    {
      username: 'Ahmad Dhani',
      role: 'Owner',
      status: 'Aktif',
      joinDate: '2025-09-20',
      lastLogin: '2025-09-27',
      email: 'ahmaddhani@gmail.com'
    },
    {
      username: 'Sari',
      role: 'Owner',
      status: 'Nonaktif',
      joinDate: '2025-08-20',
      lastLogin: '-',
      email: 'sari@gmail.com'
    }
  ];

  const handleAddUser = () => {
    console.log('Add new user');
    alert('Form tambah user akan dibuka');
  };

  return (
    <div className="manajemen-container">
      <div className="manajemen-header">
        <h1>Manajemen Pengguna</h1>
      </div>

      {/* Stats Cards */}
      <div className="stats-cards-manajemen">
        <div className="stat-card-manajemen">
          <h3>Total Pengguna</h3>
          <div className="stat-number">7</div>
        </div>
        <div className="stat-card-manajemen">
          <h3>Total Pengguna Owner</h3>
          <div className="stat-number">5</div>
        </div>
        <div className="stat-card-manajemen">
          <h3>Total Pengguna Peternak</h3>
          <div className="stat-number">2</div>
        </div>
      </div>

      {/* User List Section */}
      <div className="user-list-section">
        <div className="list-header">
          <h2>Daftar Pengguna (5)</h2>
        </div>

        <div className="list-controls">
          <div className="search-box">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <circle cx="8" cy="8" r="6" stroke="currentColor" fill="none" strokeWidth="2"/>
              <line x1="12" y1="12" x2="18" y2="18" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <input
              type="text"
              placeholder="Masukkan nama atau email pengguna..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="btn-add-user" onClick={handleAddUser}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <circle cx="10" cy="7" r="3"/>
              <path d="M4 18c0-3.3 2.7-6 6-6s6 2.7 6 6"/>
              <line x1="16" y1="4" x2="16" y2="10" stroke="currentColor" strokeWidth="2"/>
              <line x1="13" y1="7" x2="19" y2="7" stroke="currentColor" strokeWidth="2"/>
            </svg>
            Tambahkan Akun
          </button>
        </div>

        {/* User Table */}
        <div className="table-container">
          <table className="user-table">
            <thead>
              <tr>
                <th>USERNAME</th>
                <th>ROLE</th>
                <th>STATUS</th>
                <th>TANGGAL BERGABUNG</th>
                <th>LOGIN TERAKHIR</th>
                <th>EMAIL</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td className="username-cell">{user.username}</td>
                  <td>{user.role}</td>
                  <td>
                    <span className={`status-badge ${user.status === 'Aktif' ? 'status-active' : 'status-inactive'}`}>
                      {user.status}
                    </span>
                  </td>
                  <td>{user.joinDate}</td>
                  <td>{user.lastLogin}</td>
                  <td>{user.email}</td>
                  <td>
                    <div className="action-buttons">
                      <button className="btn-action btn-add" title="Tambah">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                          <line x1="9" y1="3" x2="9" y2="15" stroke="currentColor" strokeWidth="2"/>
                          <line x1="3" y1="9" x2="15" y2="9" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </button>
                      <button className="btn-action btn-settings" title="Settings">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                          <circle cx="9" cy="9" r="2"/>
                          <path d="M9 1v2m0 12v2M3.93 3.93l1.41 1.41m8.49 8.49l1.41 1.41M1 9h2m12 0h2M3.93 14.07l1.41-1.41m8.49-8.49l1.41-1.41"/>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button className="page-btn" onClick={() => setCurrentPage(1)}>1</button>
          <button className="page-btn active">2</button>
          <button className="page-btn page-next">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M6 4l4 4-4 4"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManajemenPengguna;