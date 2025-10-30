import React from "react";
import { Routes, Route } from "react-router-dom"; 
import LandingPage from "./Pages/LandingPage/LandingPage";
import Login from "./components/Login";

// OWNER
import DashboardOwner from "./Pages/OwnerPage/DashboardOwner";
import Monitoring from "./Pages/OwnerPage/Monitoring";
import DiagramAnalisis from "./Pages/OwnerPage/DiagramAnalisis";
import ProfileOwner from "./Pages/OwnerPage/ProfileOwner";

// FARM
import DashboardFarm from "./Pages/FarmPage/DashboardFarm";
import InputKerjaFarm from "./Pages/FarmPage/InputKerjaFarm";
import ProfilFarm from "./Pages/FarmPage/ProfileFarm";

// ADMIN
import DashboardAdmin from "./Pages/AdminPage/DashboardAdmin";
import ManajemenPengguna from "./Pages/AdminPage/ManajemenPengguna";
import KonfigurasiKandang from "./Pages/AdminPage/KonfigurasiKandang";
import RiwayatLaporan from "./Pages/AdminPage/RiwayatLaporan";


function App() {
  return (
    <> 
      <Routes>
        {/* LANDING PAGE & LOGIN PAGE*/}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />

        {/* OWNER PAGE*/}
          <Route path="dashboard-owner" element={<DashboardOwner/>}/>
          <Route path="monitoring" element={<Monitoring/>}/>
          <Route path="diagram-analisis" element={<DiagramAnalisis/>}/>
          <Route path="profile-owner" element={<ProfileOwner/>} />

        {/* FARM PAGE */}
          <Route path="dashboard-farm" element={<DashboardFarm/>}/>
          <Route path="input-kerja-farm" element={<InputKerjaFarm/>}/>
          <Route path="profile-farm" element={<ProfilFarm/>}/>

        {/* ADMIN PAGE */}
          <Route path="dashboard-admin" element={<DashboardAdmin/>}/>
          <Route path="manajemen-pengguna" element={<ManajemenPengguna/>}/>
          <Route path="konfigurasi-kandang" element={<KonfigurasiKandang/>}/>
          <Route path="riwayat-laporan" element={<RiwayatLaporan/>}/>
      </Routes>
    </>
  );
}

export default App;