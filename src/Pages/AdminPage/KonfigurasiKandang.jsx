import React, { useState } from 'react';
import './KonfigurasiKandang.css';

const KonfigurasiKandang = () => {
  const [selectedOwner, setSelectedOwner] = useState('Santoso Toso');
  const [selectedKandang, setSelectedKandang] = useState('Kandang A');
  
  const [config, setConfig] = useState({
    suhuBawahNormal: '',
    suhuAtasNormal: '',
    suhuKritisRendah: '',
    suhuKritisTinggi: '',
    kelembapanBawahNormal: '',
    kelembapanAtasNormal: '',
    kelembapanKritisRendah: '',
    kelembapanKritisTinggi: '',
    amoniaMaksimalNormal: '',
    amoniaKritis: '',
    bobotMinimal: '',
    bobotTarget: '',
    pakanMinimum: '',
    minumMinimum: '',
    populasiAwal: '',
    bobotRataAwal: '',
    luasKandang: '',
    peternakPenanggung: ''
  });

  const handleChange = (e) => {
    setConfig({
      ...config,
      [e.target.name]: e.target.value
    });
  };

  const handleReset = () => {
    if (window.confirm('Reset semua konfigurasi ke default?')) {
      console.log('Reset to default');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Save configuration:', config);
    alert('Konfigurasi berhasil disimpan!');
  };

  return (
    <div className="konfigurasi-container">
      <div className="konfigurasi-header">
        <h1>Konfigurasi Kandang</h1>
      </div>

      <div className="konfigurasi-card">
        <div className="selector-row">
          <div className="selector-group">
            <label>Pilih Owner :</label>
            <select value={selectedOwner} onChange={(e) => setSelectedOwner(e.target.value)}>
              <option>Santoso Toso</option>
              <option>Ahmad Dhani</option>
              <option>Budi Santoso</option>
            </select>
          </div>

          <div className="selector-group">
            <label>Pilih Kandang :</label>
            <select value={selectedKandang} onChange={(e) => setSelectedKandang(e.target.value)}>
              <option>Kandang A</option>
              <option>Kandang B</option>
              <option>Kandang C</option>
            </select>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="config-grid">
            {/* Pengaturan Suhu */}
            <div className="config-section">
              <h3 className="config-section-title">Pengaturan Suhu (°C)</h3>
              <div className="config-row">
                <div className="config-field">
                  <label>Batas Bawah Normal</label>
                  <div className="input-with-arrow">
                    <input
                      type="number"
                      name="suhuBawahNormal"
                      value={config.suhuBawahNormal}
                      onChange={handleChange}
                      placeholder="0"
                    />
                    <div className="arrow-buttons">
                      <button type="button" className="arrow-up">▲</button>
                      <button type="button" className="arrow-down">▼</button>
                    </div>
                  </div>
                </div>
                <div className="config-field">
                  <label>Batas Atas Normal</label>
                  <div className="input-with-arrow">
                    <input
                      type="number"
                      name="suhuAtasNormal"
                      value={config.suhuAtasNormal}
                      onChange={handleChange}
                      placeholder="0"
                    />
                    <div className="arrow-buttons">
                      <button type="button" className="arrow-up">▲</button>
                      <button type="button" className="arrow-down">▼</button>
                    </div>
                  </div>
                </div>
                <div className="config-field">
                  <label>Batas Kritis Rendah</label>
                  <div className="input-with-arrow">
                    <input
                      type="number"
                      name="suhuKritisRendah"
                      value={config.suhuKritisRendah}
                      onChange={handleChange}
                      placeholder="0"
                    />
                    <div className="arrow-buttons">
                      <button type="button" className="arrow-up">▲</button>
                      <button type="button" className="arrow-down">▼</button>
                    </div>
                  </div>
                </div>
                <div className="config-field">
                  <label>Batas Kritis Tinggi</label>
                  <div className="input-with-arrow">
                    <input
                      type="number"
                      name="suhuKritisTinggi"
                      value={config.suhuKritisTinggi}
                      onChange={handleChange}
                      placeholder="0"
                    />
                    <div className="arrow-buttons">
                      <button type="button" className="arrow-up">▲</button>
                      <button type="button" className="arrow-down">▼</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pengaturan Kelembapan */}
            <div className="config-section">
              <h3 className="config-section-title">Pengaturan Kelembapan (%)</h3>
              <div className="config-row">
                <div className="config-field">
                  <label>Batas Bawah Normal</label>
                  <div className="input-with-arrow">
                    <input
                      type="number"
                      name="kelembapanBawahNormal"
                      value={config.kelembapanBawahNormal}
                      onChange={handleChange}
                      placeholder="0"
                    />
                    <div className="arrow-buttons">
                      <button type="button" className="arrow-up">▲</button>
                      <button type="button" className="arrow-down">▼</button>
                    </div>
                  </div>
                </div>
                <div className="config-field">
                  <label>Batas Atas Normal</label>
                  <div className="input-with-arrow">
                    <input
                      type="number"
                      name="kelembapanAtasNormal"
                      value={config.kelembapanAtasNormal}
                      onChange={handleChange}
                      placeholder="0"
                    />
                    <div className="arrow-buttons">
                      <button type="button" className="arrow-up">▲</button>
                      <button type="button" className="arrow-down">▼</button>
                    </div>
                  </div>
                </div>
                <div className="config-field">
                  <label>Batas Kritis Rendah</label>
                  <div className="input-with-arrow">
                    <input
                      type="number"
                      name="kelembapanKritisRendah"
                      value={config.kelembapanKritisRendah}
                      onChange={handleChange}
                      placeholder="0"
                    />
                    <div className="arrow-buttons">
                      <button type="button" className="arrow-up">▲</button>
                      <button type="button" className="arrow-down">▼</button>
                    </div>
                  </div>
                </div>
                <div className="config-field">
                  <label>Batas Kritis Tinggi</label>
                  <div className="input-with-arrow">
                    <input
                      type="number"
                      name="kelembapanKritisTinggi"
                      value={config.kelembapanKritisTinggi}
                      onChange={handleChange}
                      placeholder="0"
                    />
                    <div className="arrow-buttons">
                      <button type="button" className="arrow-up">▲</button>
                      <button type="button" className="arrow-down">▼</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="config-grid-2">
            {/* Pengaturan Amonia */}
            <div className="config-section">
              <h3 className="config-section-title">Pengaturan Kadar Amonia (ppm)</h3>
              <div className="config-row-2">
                <div className="config-field">
                  <label>Batas Maksimal Normal</label>
                  <div className="input-with-arrow">
                    <input
                      type="number"
                      name="amoniaMaksimalNormal"
                      value={config.amoniaMaksimalNormal}
                      onChange={handleChange}
                      placeholder="0"
                    />
                    <div className="arrow-buttons">
                      <button type="button" className="arrow-up">▲</button>
                      <button type="button" className="arrow-down">▼</button>
                    </div>
                  </div>
                </div>
                <div className="config-field">
                  <label>Batas Kritis</label>
                  <div className="input-with-arrow">
                    <input
                      type="number"
                      name="amoniaKritis"
                      value={config.amoniaKritis}
                      onChange={handleChange}
                      placeholder="0"
                    />
                    <div className="arrow-buttons">
                      <button type="button" className="arrow-up">▲</button>
                      <button type="button" className="arrow-down">▼</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pengaturan Bobot */}
            <div className="config-section">
              <h3 className="config-section-title">Pengaturan Bobot (gram)</h3>
              <div className="config-row-2">
                <div className="config-field">
                  <label>Pertumbuhan Minimal/Minggu</label>
                  <div className="input-with-arrow">
                    <input
                      type="number"
                      name="bobotMinimal"
                      value={config.bobotMinimal}
                      onChange={handleChange}
                      placeholder="0"
                    />
                    <div className="arrow-buttons">
                      <button type="button" className="arrow-up">▲</button>
                      <button type="button" className="arrow-down">▼</button>
                    </div>
                  </div>
                </div>
                <div className="config-field">
                  <label>Target Bobot Panen</label>
                  <div className="input-with-arrow">
                    <input
                      type="number"
                      name="bobotTarget"
                      value={config.bobotTarget}
                      onChange={handleChange}
                      placeholder="0"
                    />
                    <div className="arrow-buttons">
                      <button type="button" className="arrow-up">▲</button>
                      <button type="button" className="arrow-down">▼</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pengaturan Pakan */}
            <div className="config-section">
              <h3 className="config-section-title">Pengaturan Pakan (kg)</h3>
              <div className="config-field">
                <label>Batas Minimum Normal (gram)</label>
                <div className="input-with-arrow">
                  <input
                    type="number"
                    name="pakanMinimum"
                    value={config.pakanMinimum}
                    onChange={handleChange}
                    placeholder="0"
                  />
                  <div className="arrow-buttons">
                    <button type="button" className="arrow-up">▲</button>
                    <button type="button" className="arrow-down">▼</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Pengaturan Minum */}
            <div className="config-section">
              <h3 className="config-section-title">Pengaturan Minum (liter)</h3>
              <div className="config-field">
                <label>Batas Minimum Normal (liter)</label>
                <div className="input-with-arrow">
                  <input
                    type="number"
                    name="minumMinimum"
                    value={config.minumMinimum}
                    onChange={handleChange}
                    placeholder="0"
                  />
                  <div className="arrow-buttons">
                    <button type="button" className="arrow-up">▲</button>
                    <button type="button" className="arrow-down">▼</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Populasi Awal */}
            <div className="config-section">
              <h3 className="config-section-title">Populasi Awal (ekor)</h3>
              <div className="config-field">
                <label>Populasi Awal (ekor)</label>
                <div className="input-with-arrow">
                  <input
                    type="number"
                    name="populasiAwal"
                    value={config.populasiAwal}
                    onChange={handleChange}
                    placeholder="0"
                  />
                  <div className="arrow-buttons">
                    <button type="button" className="arrow-up">▲</button>
                    <button type="button" className="arrow-down">▼</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bobot Rata-rata Awal */}
            <div className="config-section">
              <h3 className="config-section-title">Bobot rata-rata awal (kg)</h3>
              <div className="config-field">
                <label>Bobot rata-rata awal (kg)</label>
                <div className="input-with-arrow">
                  <input
                    type="number"
                    step="0.01"
                    name="bobotRataAwal"
                    value={config.bobotRataAwal}
                    onChange={handleChange}
                    placeholder="0"
                  />
                  <div className="arrow-buttons">
                    <button type="button" className="arrow-up">▲</button>
                    <button type="button" className="arrow-down">▼</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Luas Kandang */}
            <div className="config-section">
              <h3 className="config-section-title">Luas Kandang (m²)</h3>
              <div className="config-field">
                <label>Luas Kandang (m²)</label>
                <div className="input-with-arrow">
                  <input
                    type="number"
                    name="luasKandang"
                    value={config.luasKandang}
                    onChange={handleChange}
                    placeholder="0"
                  />
                  <div className="arrow-buttons">
                    <button type="button" className="arrow-up">▲</button>
                    <button type="button" className="arrow-down">▼</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Peternak Penanggung Jawab */}
            <div className="config-section">
              <h3 className="config-section-title">Peternak Penanggung Jawab</h3>
              <div className="config-field">
                <input
                  type="text"
                  name="peternakPenanggung"
                  value={config.peternakPenanggung}
                  onChange={handleChange}
                  placeholder="Nama peternak"
                  className="input-text"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="form-actions-config">
            <button type="button" className="btn-reset" onClick={handleReset}>
              Reset ke Default
            </button>
            <button type="submit" className="btn-save-config">
              Simpan ke Konfigurasi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default KonfigurasiKandang;