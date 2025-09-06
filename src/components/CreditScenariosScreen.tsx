import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import mascotImage from 'figma:asset/516eee74fb5fab5174ceba8e74ce9b83cc56736e.png';
import { ArrowLeft, Building, Smartphone, CreditCard, TrendingUp, Star } from "lucide-react";

interface CreditScenariosScreenProps {
  onBack: () => void;
}

export function CreditScenariosScreen({ onBack }: CreditScenariosScreenProps) {
  const creditOptions = [
    {
      type: "Banco",
      name: "BCP - Crédito MYPE",
      icon: Building,
      amount: "S/ 50,000",
      interestRate: "18.5%",
      term: "24 meses",
      monthlyPayment: "S/ 2,450",
      requirements: ["RUC vigente", "6 meses de antigüedad", "Ingresos S/ 3,000"],
      benefits: ["Sin comisiones", "Período de gracia", "Asesoría gratuita"],
      score: 4.2,
      featured: false
    },
    {
      type: "Fintech",
      name: "Konfío",
      icon: Smartphone,
      amount: "S/ 30,000", 
      interestRate: "22.8%",
      term: "18 meses",
      monthlyPayment: "S/ 2,100",
      requirements: ["RUC vigente", "3 meses ventas", "Cuenta bancaria"],
      benefits: ["Aprobación 24hrs", "100% digital", "Flexible"],
      score: 4.5,
      featured: true
    },
    {
      type: "Programa Gov.",
      name: "COFIDE - Reactiva Perú",
      icon: CreditCard,
      amount: "S/ 75,000",
      interestRate: "8.5%",
      term: "36 meses",
      monthlyPayment: "S/ 2,380",
      requirements: ["MYPE formal", "Al día con SUNAT", "Sin mora"],
      benefits: ["Tasa preferencial", "Período gracia 6m", "Garantía estatal"],
      score: 4.7,
      featured: true
    },
    {
      type: "Banco",
      name: "BBVA - Capital Trabajo",
      icon: Building,
      amount: "S/ 40,000",
      interestRate: "19.2%",
      term: "20 meses", 
      monthlyPayment: "S/ 2,380",
      requirements: ["RUC 12 meses", "Estados financieros", "Garantías"],
      benefits: ["Cuenta gratis", "Seguro vida", "Banca móvil"],
      score: 4.1,
      featured: false
    },
    {
      type: "Fintech",
      name: "Prestamype",
      icon: Smartphone,
      amount: "S/ 20,000",
      interestRate: "24.5%",
      term: "12 meses",
      monthlyPayment: "S/ 1,950",
      requirements: ["RUC vigente", "Ventas mínimas", "Scoring"],
      benefits: ["Proceso rápido", "Sin garantías", "Renovable"],
      score: 3.9,
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center p-4 border-b border-black/10">
        <Button variant="ghost" size="sm" onClick={onBack} className="mr-3 p-2">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h1 className="text-lg font-bold">Escenarios de Crédito</h1>
          <p className="text-sm text-gray-600">Compara y elige la mejor opción</p>
        </div>
      </div>

      {/* Filter Banner */}
      <div className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-black/10">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-medium">Basado en tu perfil</h2>
          <Badge variant="outline" className="border-primary text-primary">
            Restaurante • RUC vigente
          </Badge>
        </div>
        <p className="text-sm text-gray-600">
          Estas opciones están pre-aprobadas según tu información y scoring crediticio
        </p>
      </div>

      <div className="p-4 space-y-4">
        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <Card className="p-3 text-center border border-black/10">
            <TrendingUp className="w-5 h-5 text-primary mx-auto mb-1" />
            <p className="text-sm font-medium">Tasa desde</p>
            <p className="text-lg font-bold text-primary">8.5%</p>
          </Card>
          <Card className="p-3 text-center border border-black/10">
            <CreditCard className="w-5 h-5 text-secondary mx-auto mb-1" />
            <p className="text-sm font-medium">Monto máx.</p>
            <p className="text-lg font-bold text-secondary">S/ 75,000</p>
          </Card>
          <Card className="p-3 text-center border border-black/10">
            <Star className="w-5 h-5 text-yellow-500 mx-auto mb-1" />
            <p className="text-sm font-medium">Aprobación</p>
            <p className="text-lg font-bold text-yellow-600">24h</p>
          </Card>
        </div>

        {/* Credit Options */}
        <div className="space-y-4">
          {creditOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <Card 
                key={index} 
                className={`p-4 border ${
                  option.featured ? "border-primary bg-primary/5" : "border-black/10"
                }`}
              >
                {option.featured && (
                  <Badge className="mb-3 bg-primary text-white">
                    ⭐ Recomendado para ti
                  </Badge>
                )}
                
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-medium">{option.name}</h3>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600">{option.score}</span>
                        </div>
                      </div>
                      <Badge variant="outline" className="mt-1 text-xs">
                        {option.type}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Key Info */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-2xl font-bold text-primary">{option.amount}</p>
                    <p className="text-sm text-gray-600">Monto disponible</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-secondary">{option.interestRate}</p>
                    <p className="text-sm text-gray-600">TEA anual</p>
                  </div>
                </div>

                {/* Payment Info */}
                <div className="flex items-center justify-between py-3 bg-gray-50 rounded-lg px-3 mb-4">
                  <div>
                    <p className="font-medium">{option.monthlyPayment}</p>
                    <p className="text-sm text-gray-600">Cuota mensual</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{option.term}</p>
                    <p className="text-sm text-gray-600">Plazo</p>
                  </div>
                </div>

                {/* Requirements & Benefits */}
                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-sm font-medium mb-2">Requisitos:</p>
                    <div className="flex flex-wrap gap-1">
                      {option.requirements.map((req, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {req}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">Beneficios:</p>
                    <div className="flex flex-wrap gap-1">
                      {option.benefits.map((benefit, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs bg-green-100 text-green-800">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <Button 
                  className={`w-full ${
                    option.featured 
                      ? "bg-primary hover:bg-primary/90 text-white" 
                      : "bg-secondary hover:bg-secondary/90 text-white"
                  }`}
                >
                  {option.featured ? "Solicitar ahora" : "Más información"}
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Footer Info */}
        <Card className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 mt-6">
          <div className="flex items-start space-x-3">
            <img 
              src={mascotImage} 
              alt="KRESE AI Advisor" 
              className="w-12 h-12 object-contain bg-white/50 rounded-full p-2 flex-shrink-0"
            />
            <div>
              <h4 className="font-medium text-gray-900 mb-1">
                💡 Consejo de tu asesor IA
              </h4>
              <p className="text-sm text-gray-700">
                Considera el programa COFIDE para tasas más bajas. Si necesitas liquidez rápida, 
                Konfío es tu mejor opción con aprobación en 24 horas.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}