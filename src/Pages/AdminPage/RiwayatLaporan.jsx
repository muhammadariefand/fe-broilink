import React, { useState } from 'react';
import './RiwayatLaporan.css';

const RiwayatLaporan = () => {
  const [sortOrder, setSortOrder] = useState('Terbaru');
  const [currentPage, setCurrentPage] = useState(1);

  const reports = [
    {
      no: 1,
      username: 'Guest',
      role: '-',
      whatsapp: '081234568',
      datetime: '25/09/25 10:01',
      type: '-',
      status: 'Menunggu Diproses'
    },
    {
      no: 2,
      username: 'Guest',
      role: '-',
      whatsapp: '081234569',
      datetime: '25/09/25 10:00',
      type: '-',
      status: 'Menunggu Diproses'
    },
    {
      no: 3,
      username: 'Guest',
      role: '-',
      whatsapp: '081234560',
      datetime: '25/09/25 09:30',
      type: '-',
      status: 'Menunggu Diproses'
    },
    {
      no: 4,
      username: 'ibnu123',
      role: 'Owner',
      whatsapp: '081234561',
      datetime: '25/09/25 05:30',
      type: 'Penambahan Peternak',
      status: 'Menunggu Diproses'
    },
    {
      no: 5,
      username: 'Guest',
      role: '-',
      whatsapp: '081234562',
      datetime: '24/09/25 14:30',
      type: '-',
      status: 'Sedang Diproses'
    },
    {
      no: 6,
      username: 'Umi',
      role: 'Owner',
      whatsapp: '081234563',
      datetime: '24/09/25 13:30',
      type: 'Penambahan Kandang',
      status: 'Selesai'
    }
  ];

  return (
    <div className="riwayat-container">
      <div className="riwayat-header">
        <h1>Riwayat Laporan & Permintaan</h1>
        <p className="riwayat-subtitle">Log semua permintaan yang dikirimkan oleh pengguna sistem</p>
      </div>

      <div className="riwayat-card">
        {/* Sort Control */}
        <div className="sort-control">
          <label>Urutkan:</label>
          <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option>Terbaru</option>
            <option>Terlama</option>
          </select>
        </div>

        {/* Reports Table */}
        <div className="table-wrapper">
          <table className="reports-table">
            <thead>
              <tr>
                <th>NO</th>
                <th>USERNAME</th>
                <th>ROLE</th>
                <th>NOMOR WHATSAPP</th>
                <th>WAKTU PERMINTAAN</th>
                <th>JENIS PERMINTAAN</th>
                <th>STATUS PERMINTAAN</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.no}>
                  <td className="td-center">{report.no}</td>
                  <td className="td-username">{report.username}</td>
                  <td>{report.role}</td>
                  <td>{report.whatsapp}</td>
                  <td>{report.datetime}</td>
                  <td>{report.type}</td>
                  <td>
                    <div className="status-dropdown">
                      <select 
                        className={`status-select ${
                          report.status === 'Selesai' ? 'status-completed' :
                          report.status === 'Sedang Diproses' ? 'status-processing' :
                          'status-pending'
                        }`}
                        value={report.status}
                      >
                        <option>Menunggu Diproses</option>
                        <option>Sedang Diproses</option>
                        <option>Selesai</option>
                      </select>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="pagination-riwayat">
          <button className="page-btn-riwayat" onClick={() => setCurrentPage(1)}>1</button>
          <button className="page-btn-riwayat active-riwayat">2</button>
          <button className="page-btn-riwayat page-next-riwayat">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M6 4l4 4-4 4"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RiwayatLaporan;