"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { LogIn, User, Lock } from "lucide-react";

const logoToyota =
  "https://upload.wikimedia.org/wikipedia/commons/7/78/Toyota_Logo.svg";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulação de login (troque por sua API depois)
    setTimeout(() => {
      if (username === "admin" && password === "123") {
        // Salva no localStorage (ou use cookies/JWT)
        localStorage.setItem("user", JSON.stringify({ name: username }));
        router.push("/dashboard"); // ou /home
      } else {
        alert("Usuário ou senha incorretos!");
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen  from-gray-50 to-gray-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Cabeçalho com logo */}
        <div className=" from-red-600 to-red-700 p-10 text-center">
          <Image
            src={logoToyota}
            alt="Toyota"
            width={120}
            height={60}
            className="mx-auto mb-4"
          />
          <h1 className="text-3xl font-bold text-white">Sistema Interno</h1>
          <p className="text-red-100 mt-2">Acesso restrito</p>
        </div>

        {/* Formulário */}
        <form onSubmit={handleLogin} className="p-10 space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <User size={18} />
              Usuário
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition"
                placeholder="Digite seu usuário"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <Lock size={18} />
              Senha
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition"
                placeholder="Digite sua senha"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-bold py-4 rounded-lg text-lg transition flex items-center justify-center gap-3 shadow-lg"
          >
            {loading ? (
              "Entrando..."
            ) : (
              <>
                <LogIn size={22} />
                Entrar no Sistema
              </>
            )}
          </button>

          <p className="text-center text-sm text-gray-500 mt-6">
            Dica: use <strong>admin</strong> / <strong>123</strong>
          </p>
        </form>
      </div>
    </div>
  );
}