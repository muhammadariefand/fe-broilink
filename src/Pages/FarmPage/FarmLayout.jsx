import React from "react";
import NavbarFarm from '../../components/NavbarFarm';
import SidebarFarm from "../../components/SidebarFarm";
import { Outlet } from "react-router-dom";

export default function FarmLayout() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <SidebarFarm />

      {/* Bagian kanan (navbar + konten) */}
      <div className="ml-56 flex-1 flex flex-col min-h-screen bg-gray-50">
        {/* Navbar */}
        <NavbarFarm />

        {/* Konten halaman */}
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
