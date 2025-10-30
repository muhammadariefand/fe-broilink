import React from "react";
import './ProfileOwner.css'

export default function ProfileOwner() {
  return (
    <OwnerLayout>
      <h1 className="text-2xl font-bold mb-6">Profil Saya</h1>

      <div className="flex flex-col items-center">
        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4 text-5xl">
          👤
        </div>
        <button className="border px-4 py-1 rounded-md mb-6 hover:bg-gray-100">
          Ubah Foto Profil
        </button>

        <form className="w-96 space-y-4">
          <div>
            <label className="block text-gray-600 mb-1">Nama Lengkap</label>
            <input
              type="text"
              value="Budi"
              readOnly
              className="w-full border rounded-md px-3 py-2 bg-gray-100 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Nomor WhatsApp</label>
            <input
              type="text"
              value="+62 812-1234-9876"
              readOnly
              className="w-full border rounded-md px-3 py-2 focus:outline-none"
            />
          </div>
        </form>
      </div>
    </OwnerLayout>
  );
}
