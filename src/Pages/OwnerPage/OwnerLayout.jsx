import React from "react";
import Navbar from '../../components/NavbarOwner';
import DashboardOwner from "./DashboardOwner";
import Monitoring from "./Monitoring";
import DiagramAnalisis from "./DiagramAnalisis";
import ProfileOwner from "./ProfileOwner";


export default function OwnerLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar di kiri */}

      {/* Bagian utama di kanan */}
      <div className="flex-1 flex flex-col">
        {/* Navbar di atas */}
        <Navbar name="Budi" email="budibudi@gmail.com" />

        {/* Konten halaman (dinamis) */}
        <main className="flex-1 p-8 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
