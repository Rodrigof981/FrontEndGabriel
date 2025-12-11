"use client"; 

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Mail, Lock, LogIn } from "lucide-react";


const logoToyota = "https://upload.wikimedia.org/wikipedia/commons/7/78/Toyota_Logo.svg";

export default function LoginPage() {
  const router = useRouter();

  // 1. Gerenciamento de Estado para os inputs (Critério I.I.)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(""); // Limpa erros anteriores

    // 2. Lógica de Autenticação Simples (simulação)
    const ADMIN_EMAIL = "admin@toyota.com";
    const ADMIN_PASSWORD = "123";

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      // 3. Armazenamento e Redirecionamento (Critério I.II.)
      
      // Armazena um token ou informação de que o usuário está logado
      localStorage.setItem("user", JSON.stringify({ email: ADMIN_EMAIL, isAuthenticated: true }));
      
      // Redireciona para o Dashboard
      router.push("/dashboard");

    } else {
      setError("Email ou senha inválidos. Tente novamente.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      
      {/* Container do Formulário */}
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl">
        
        {/* Cabeçalho */}
        <div className="flex flex-col items-center mb-10">
          <Image src={logoToyota} alt="Toyota" width={120} height={60} />
          <h2 className="mt-6 text-xl font-semibold text-gray-800">
            Acesso ao Sistema
          </h2>
        </div>

        {/* Formulário */}
        <form onSubmit={handleLogin} className="space-y-6">
          
          {/* Campo Email */}
          <div>
            <label className="text-sm font-medium text-gray-700 sr-only">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="admin@toyota.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
              />
            </div>
          </div>

          {/* Campo Senha */}
          <div>
            <label className="text-sm font-medium text-gray-700 sr-only">Senha</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
              />
            </div>
          </div>

          {/* Mensagem de Erro (Renderização Condicional Implícita) */}
          {error && (
            <p className="text-sm font-medium text-center text-red-600">
              {error}
            </p>
          )}

          {/* Botão de Login */}
          <div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition duration-200 shadow-lg shadow-red-500/50"
            >
              <LogIn size={20} />
              Entrar no Sistema
            </button>
          </div>
        </form>

        {/* Dica */}
        <p className="mt-8 text-center text-sm text-gray-500">
          Dica: use <strong>admin@toyota.com</strong> / <strong>123</strong>
        </p>

      </div>
    </div>
  );
}