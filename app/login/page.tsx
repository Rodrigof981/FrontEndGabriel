"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { LogIn, User, Lock, Mail } from "lucide-react"; 

const logoToyota =
  "https://upload.wikimedia.org/wikipedia/commons/7/78/Toyota_Logo.svg";

// Dados para a simulação de autenticação
const VALID_EMAIL = "admin@toyota.com";
const VALID_PASSWORD = "123";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Função para simular a chamada de API e a verificação no back-end
  const simulateLoginAPI = (email: string, password: string): Promise<{ token: string }> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === VALID_EMAIL && password === VALID_PASSWORD) {
          // Resolve com um token fictício em caso de sucesso
          resolve({ token: "fake-jwt-token-12345" });
        } else {
          // Rejeita com um objeto de erro em caso de falha
          reject(new Error("Credenciais inválidas. Verifique seu e-mail e senha."));
        }
      }, 1500); // Atraso de 1.5 segundo para simular o carregamento
    });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Chama a função que simula a requisição ao servidor
      const data = await simulateLoginAPI(email, password);

      // Simulação de sucesso: salva o token e redireciona
      localStorage.setItem("authToken", data.token); 
      router.push("/dashboard"); 

    } catch (err) {
      // Simulação de falha: captura o erro e exibe a mensagem
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Ocorreu um erro desconhecido durante o login.");
      }
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen from-gray-50 to-gray-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-lg overflow-hidden">
        
        {/* Cabeçalho com logo */}
        <div className="bg-white shadow-sm p-10 text-center">
          <Image
            src={logoToyota}
            alt="Toyota"
            width={120}
            height={60}
            className="mx-auto mb-4"
          />
         
        </div>

        {/* Formulário */}
        <form onSubmit={handleLogin} className="p-10 space-y-6">
          
          {/* Campo de Email */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <Mail size={18} />
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition"
                placeholder="Digite seu email"
                required
              />
            </div>
          </div>

          {/* Campo de Senha */}
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
          
          {/* Mensagem de Erro (se houver) */}
          {error && (
            <div className="p-3 text-sm font-medium text-red-700 bg-red-100 border border-red-300 rounded-lg text-center">
              {error}
            </div>
          )}

          {/* Botão de Login */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-bold py-4 rounded-lg text-lg transition flex items-center justify-center gap-3 shadow-lg"
          >
            {loading ? (
              // Simples indicador de loading no botão
              <span className="animate-pulse">Verificando...</span> 
            ) : (
              <>
                <LogIn size={22} />
                Entrar no Sistema
              </>
            )}
          </button>

          <p className="text-center text-sm text-gray-500 mt-6">
            Dica: use <strong>{VALID_EMAIL}</strong> / <strong>{VALID_PASSWORD}</strong>
          </p>
        </form>
      </div>
    </div>
  );
}