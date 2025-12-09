"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { LogOut, Menu } from "lucide-react";
import { useState } from "react";

const logoToyota = "https://upload.wikimedia.org/wikipedia/commons/7/78/Toyota_Logo.svg";

const iconStyle = {
  size: 22,
  color: "#ea2a2a",
  strokeWidth: 2,
};

export default function Navbar() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
        
        {/* Logo à esquerda */}
        <div className="flex items-center">
          <Image src={logoToyota} alt="Toyota" width={90} height={45} />
        </div>

        {/* Título CENTRALIZADO */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <h1 className="text-2xl font-bold text-gray-800 whitespace-nowrap">
            Sistema Toyota
          </h1>
        </div>

        {/* Botão Sair à direita (Desktop) */}
        <div className="hidden md:flex items-center">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition font-semibold shadow-md"
          >
            <LogOut size={iconStyle.size} />
            Sair
          </button>
        </div>

        {/* Botão Mobile */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-700"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-6">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-3 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold"
          >
            <LogOut size={22} />
            Sair do Sistema
          </button>
        </div>
      )}
    </nav>
  );
}