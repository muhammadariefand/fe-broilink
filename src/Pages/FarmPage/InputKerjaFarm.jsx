import React, { useState } from 'react';
import './InputKerjaFarm.css';

const InputHasilKerja = () => {
  const [formData, setFormData] = useState({
    laporanPakan: '',
    laporanMinum: '',
    laporanSampling: '',
    tingkatKematian: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Data berhasil dikirim!');
  };

  return (
    <div className="input-hasil-container">
      <div className="input-hasil-header">
        <h1>Input Hasil Kerja Harian</h1>
        <p className="input-subtitle">Laporkan aktivitas harian Anda</p>
      </div>

      <div className="form-card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="laporanPakan">Laporan Pakan Harian</label>
            <small className="input-helper">Jumlah (dalam kg)</small>
            <div className="input-wrapper">
              <input
                type="number"
                id="laporanPakan"
                name="laporanPakan"
                placeholder="0"
                value={formData.laporanPakan}
                onChange={handleChange}
                required
              />
              <span className="input-unit">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2L3 5v6c0 5.25 3.75 10.15 7 11 3.25-.85 7-5.75 7-11V5l-7-3zm0 2.5l5 2.14V11c0 3.77-2.56 7.38-5 8.5-2.44-1.12-5-4.73-5-8.5V6.64l5-2.14z"/>
                  <circle cx="10" cy="10" r="3"/>
                </svg>
              </span>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="laporanMinum">Laporan Minum Harian</label>
            <small className="input-helper">Jumlah (dalam liter)</small>
            <div className="input-wrapper">
              <input
                type="number"
                id="laporanMinum"
                name="laporanMinum"
                placeholder="0"
                value={formData.laporanMinum}
                onChange={handleChange}
                required
              />
              <span className="input-unit">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2L3 5v6c0 5.25 3.75 10.15 7 11 3.25-.85 7-5.75 7-11V5l-7-3zm0 2.5l5 2.14V11c0 3.77-2.56 7.38-5 8.5-2.44-1.12-5-4.73-5-8.5V6.64l5-2.14z"/>
                  <circle cx="10" cy="10" r="3"/>
                </svg>
              </span>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="laporanSampling">Laporan Sampling Bobot</label>
            <small className="input-helper">Bobot Rata-rata (kg/ekor)</small>
            <div className="input-wrapper">
              <input
                type="number"
                step="0.01"
                id="laporanSampling"
                name="laporanSampling"
                placeholder="0"
                value={formData.laporanSampling}
                onChange={handleChange}
                required
              />
              <span className="input-unit">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2L3 5v6c0 5.25 3.75 10.15 7 11 3.25-.85 7-5.75 7-11V5l-7-3zm0 2.5l5 2.14V11c0 3.77-2.56 7.38-5 8.5-2.44-1.12-5-4.73-5-8.5V6.64l5-2.14z"/>
                  <circle cx="10" cy="10" r="3"/>
                </svg>
              </span>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="tingkatKematian">Tingkat Kematian</label>
            <small className="input-helper">Jumlah (ekor)</small>
            <div className="input-wrapper">
              <input
                type="number"
                id="tingkatKematian"
                name="tingkatKematian"
                placeholder="0"
                value={formData.tingkatKematian}
                onChange={handleChange}
                required
              />
              <span className="input-unit">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2L3 5v6c0 5.25 3.75 10.15 7 11 3.25-.85 7-5.75 7-11V5l-7-3zm0 2.5l5 2.14V11c0 3.77-2.56 7.38-5 8.5-2.44-1.12-5-4.73-5-8.5V6.64l5-2.14z"/>
                  <circle cx="10" cy="10" r="3"/>
                </svg>
              </span>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-submit">
              Kirim
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputHasilKerja;