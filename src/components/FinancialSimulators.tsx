import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import mascotImage from 'figma:asset/516eee74fb5fab5174ceba8e74ce9b83cc56736e.png';
import { ArrowLeft, Calculator, TrendingUp, DollarSign, Calendar, PieChart } from "lucide-react";

interface FinancialSimulatorsProps {
  onBack: () => void;
}

export function FinancialSimulators({ onBack }: FinancialSimulatorsProps) {
  const [activeSimulator, setActiveSimulator] = useState<string | null>(null);
  const [loanAmount, setLoanAmount] = useState("50000");
  const [interestRate, setInterestRate] = useState("18.5");
  const [loanTerm, setLoanTerm] = useState("24");

  const simulators = [
    {
      id: "loan",
      title: "Simulador de Crédito",
      description: "Calcula cuotas y costos totales",
      icon: Calculator,
      color: "primary"
    },
    {
      id: "revenue",
      title: "Proyección de Ventas",
      description: "Estima ingresos futuros",
      icon: TrendingUp,
      color: "secondary"
    },
    {
      id: "tax",
      title: "Calculadora de Impuestos",
      description: "IGV, IR y otros impuestos",
      icon: DollarSign,
      color: "amber"
    },
    {
      id: "cash-flow",
      title: "Flujo de Caja",
      description: "Proyecta ingresos y gastos",
      icon: PieChart,
      color: "green"
    }
  ];

  const calculateLoan = () => {
    const principal = parseFloat(loanAmount);
    const monthlyRate = parseFloat(interestRate) / 100 / 12;
    const numPayments = parseInt(loanTerm);
    
    const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                          (Math.pow(1 + monthlyRate, numPayments) - 1);
    
    const totalAmount = monthlyPayment * numPayments;
    const totalInterest = totalAmount - principal;
    
    return {
      monthlyPayment: monthlyPayment.toFixed(2),
      totalAmount: totalAmount.toFixed(2),
      totalInterest: totalInterest.toFixed(2)
    };
  };

  if (activeSimulator === null) {
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="flex items-center p-4 border-b border-black/10">
          <Button variant="ghost" size="sm" onClick={onBack} className="mr-3 p-2">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-lg font-bold">Simuladores Financieros</h1>
            <p className="text-sm text-gray-600">Herramientas para planificar tu negocio</p>
          </div>
        </div>

        <div className="p-4 space-y-4">
          <div className="grid grid-cols-1 gap-4">
            {simulators.map((simulator) => {
              const Icon = simulator.icon;
              return (
                <Card 
                  key={simulator.id}
                  className="p-4 border border-black/10 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => setActiveSimulator(simulator.id)}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      simulator.color === "primary" ? "bg-primary/20" :
                      simulator.color === "secondary" ? "bg-secondary/20" :
                      simulator.color === "amber" ? "bg-amber-100" :
                      "bg-green-100"
                    }`}>
                      <Icon className={`w-6 h-6 ${
                        simulator.color === "primary" ? "text-primary" :
                        simulator.color === "secondary" ? "text-secondary" :
                        simulator.color === "amber" ? "text-amber-600" :
                        "text-green-600"
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{simulator.title}</h3>
                      <p className="text-sm text-gray-600">{simulator.description}</p>
                    </div>
                    <Button size="sm" variant="outline" className="text-xs">
                      Usar
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Quick tip */}
          <Card className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
            <div className="flex items-start space-x-3">
              <img 
                src={mascotImage} 
                alt="KRESE Financial Advisor" 
                className="w-12 h-12 object-contain bg-white/50 rounded-full p-2 flex-shrink-0"
              />
              <div>
                <h4 className="font-medium text-gray-900 mb-1">
                  💡 Consejo financiero
                </h4>
                <p className="text-sm text-gray-700">
                  Usa estos simuladores para comparar escenarios antes de tomar decisiones financieras importantes para tu negocio.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  // Loan Calculator
  if (activeSimulator === "loan") {
    const loanResults = calculateLoan();
    
    return (
      <div className="min-h-screen bg-white">
        <div className="flex items-center p-4 border-b border-black/10">
          <Button variant="ghost" size="sm" onClick={() => setActiveSimulator(null)} className="mr-3 p-2">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-lg font-bold">Simulador de Crédito</h1>
            <p className="text-sm text-gray-600">Calcula tu cuota mensual</p>
          </div>
        </div>

        <div className="p-4 space-y-4">
          <Card className="p-4 border border-black/10">
            <h3 className="font-medium mb-4">Datos del crédito</h3>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="amount">Monto del crédito (S/)</Label>
                <Input
                  id="amount"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  className="mt-1 border-black/20"
                  placeholder="50000"
                />
              </div>
              
              <div>
                <Label htmlFor="rate">Tasa de interés anual (%)</Label>
                <Input
                  id="rate"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  className="mt-1 border-black/20"
                  placeholder="18.5"
                />
              </div>
              
              <div>
                <Label htmlFor="term">Plazo (meses)</Label>
                <Select value={loanTerm} onValueChange={setLoanTerm}>
                  <SelectTrigger className="border-black/20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="12">12 meses</SelectItem>
                    <SelectItem value="18">18 meses</SelectItem>
                    <SelectItem value="24">24 meses</SelectItem>
                    <SelectItem value="36">36 meses</SelectItem>
                    <SelectItem value="48">48 meses</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>

          <Card className="p-4 border border-primary/20 bg-primary/5">
            <h3 className="font-medium mb-4">Resultados</h3>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                <span className="font-medium">Cuota mensual:</span>
                <span className="text-xl font-bold text-primary">S/ {loanResults.monthlyPayment}</span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                <span className="font-medium">Total a pagar:</span>
                <span className="text-lg font-bold text-secondary">S/ {loanResults.totalAmount}</span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                <span className="font-medium">Total intereses:</span>
                <span className="text-lg font-bold text-amber-600">S/ {loanResults.totalInterest}</span>
              </div>
            </div>

            <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-800">
                <strong>Recomendación:</strong> Esta cuota representa el{" "}
                {((parseFloat(loanResults.monthlyPayment) / 4000) * 100).toFixed(1)}% de ingresos estimados. 
                Se recomienda que no exceda el 30%.
              </p>
            </div>
          </Card>

          <Button className="w-full bg-primary hover:bg-primary/90 text-white">
            Buscar créditos con estas condiciones
          </Button>
        </div>
      </div>
    );
  }

  // Placeholder for other simulators
  return (
    <div className="min-h-screen bg-white">
      <div className="flex items-center p-4 border-b border-black/10">
        <Button variant="ghost" size="sm" onClick={() => setActiveSimulator(null)} className="mr-3 p-2">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h1 className="text-lg font-bold">Simulador</h1>
          <p className="text-sm text-gray-600">Próximamente disponible</p>
        </div>
      </div>

      <div className="p-4">
        <Card className="p-8 text-center border border-black/10">
          <img 
            src={mascotImage} 
            alt="KRESE Coming Soon" 
            className="w-20 h-20 mx-auto mb-4 object-contain opacity-75"
          />
          <h3 className="font-medium mb-2">Próximamente</h3>
          <p className="text-sm text-gray-600 mb-4">
            ¡Estoy trabajando en este simulador para ti! Estará disponible muy pronto.
          </p>
          <Button variant="outline" onClick={() => setActiveSimulator(null)}>
            Volver a simuladores
          </Button>
        </Card>
      </div>
    </div>
  );
}