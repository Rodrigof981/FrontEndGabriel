import Navbar from "@/app/componentes/Navbar";
import AreaUtil from "@/app/componentes/AreaUtil";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <AreaUtil titulo="Dashboard">
        <div className="max-w-4xl mx-auto py-10 space-y-8">

          {/* Saudação */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Bem-vindo ao Sistema Toyota
            </h1>
            <p className="text-xl text-gray-600">
              Hoje é {new Date().toLocaleDateString("pt-BR", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          {/* Informações rápidas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                Vendas do Mês
              </h2>
              <p className="text-5xl font-bold text-red-600">428</p>
              <p className="text-gray-600 mt-2">Meta: 450 unidades</p>
              <p className="text-sm text-gray-500 mt-4">
                Faltam apenas <strong>22 vendas</strong> para bater a meta!
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                Líder do Mês
              </h2>
              <p className="text-3xl font-bold text-gray-800">Corolla Cross</p>
              <p className="text-5xl font-bold text-green-600 mt-4">87</p>
              <p className="text-gray-600">unidades vendidas</p>
            </div>
          </div>

          {/* Mensagem final */}
          <div className=" from-red-600 to-red-700 text-white rounded-2xl p-10 text-center">
            <p className="text-2xl font-bold">
              Vamos juntos bater mais um recorde este mês!
            </p>
            <p className="mt-4 text-lg opacity-90">
              Equipe Toyota Brasil
            </p>
          </div>

        </div>
      </AreaUtil>
    </div>
  );
}