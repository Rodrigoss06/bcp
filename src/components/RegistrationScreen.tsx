import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import mascotImage from 'figma:asset/516eee74fb5fab5174ceba8e74ce9b83cc56736e.png';
import { ArrowLeft, Lightbulb } from "lucide-react";

interface RegistrationScreenProps {
  onBack: () => void;
  onComplete: () => void;
}

export function RegistrationScreen({ onBack, onComplete }: RegistrationScreenProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    hasRUC: "",
    businessType: "",
    goal: ""
  });

  const handleContinue = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      onBack();
    }
  };

  const businessTypes = [
    "Comercio / Tienda",
    "Restaurante / Comida",
    "Servicios / Consultoría", 
    "Manufactura / Producción",
    "Tecnología",
    "Otro"
  ];

  const goals = [
    "Formalizar mi negocio",
    "Obtener licencias y permisos",
    "Acceder a financiamiento",
    "Mejorar mis ventas",
    "Digitalizar mi negocio",
    "Crecer mi equipo"
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-black/10">
        <Button variant="ghost" size="sm" onClick={handleBack} className="p-2">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="flex space-x-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`w-8 h-1 rounded-full ${
                i <= step ? "bg-primary" : "bg-gray-200"
              }`}
            />
          ))}
        </div>
        <div className="w-9" /> {/* Spacer */}
      </div>

      <div className="flex-1 px-6 py-8">
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-black mb-2">
                ¡Bienvenido a KRESE!
              </h2>
              <p className="text-gray-600">
                Primero, cuéntanos un poco sobre ti
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Nombre completo</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="mt-1 border-black/20"
                  placeholder="Tu nombre completo"
                />
              </div>
              
              <div>
                <Label htmlFor="email">Correo electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="mt-1 border-black/20"
                  placeholder="tu@email.com"
                />
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-black mb-2">
                Sobre tu negocio
              </h2>
              <p className="text-gray-600">
                Esto nos ayudará a personalizar tu experiencia
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <Label className="text-base font-medium mb-3 block">
                  ¿Tu negocio tiene RUC?
                </Label>
                <RadioGroup
                  value={formData.hasRUC}
                  onValueChange={(value) => setFormData({...formData, hasRUC: value})}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="yes" id="ruc-yes" />
                    <Label htmlFor="ruc-yes" className="font-normal">Sí, tengo RUC</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="no" id="ruc-no" />
                    <Label htmlFor="ruc-no" className="font-normal">No, aún no tengo RUC</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="process" id="ruc-process" />
                    <Label htmlFor="ruc-process" className="font-normal">Estoy en proceso de obtenerlo</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="text-base font-medium mb-3 block">
                  ¿Qué tipo de negocio tienes?
                </Label>
                <div className="grid grid-cols-2 gap-2">
                  {businessTypes.map((type) => (
                    <Button
                      key={type}
                      variant={formData.businessType === type ? "default" : "outline"}
                      onClick={() => setFormData({...formData, businessType: type})}
                      className={`p-4 h-auto text-left border border-black/20 ${
                        formData.businessType === type 
                          ? "bg-primary text-white" 
                          : "bg-white text-black hover:bg-gray-50"
                      }`}
                    >
                      <span className="text-sm">{type}</span>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-black mb-2">
                ¿Cuál es tu meta principal?
              </h2>
              <p className="text-gray-600">
                Selecciona lo que más te interesa lograr
              </p>
            </div>

            <div className="space-y-3">
              {goals.map((goal) => (
                <Button
                  key={goal}
                  variant={formData.goal === goal ? "default" : "outline"}
                  onClick={() => setFormData({...formData, goal: goal})}
                  className={`w-full p-4 h-auto text-left justify-start border border-black/20 ${
                    formData.goal === goal 
                      ? "bg-primary text-white" 
                      : "bg-white text-black hover:bg-gray-50"
                  }`}
                >
                  {goal}
                </Button>
              ))}
            </div>

            {formData.goal && (
              <Card className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
                <div className="flex items-start space-x-3">
                  <img 
                    src={mascotImage} 
                    alt="KRESE AI Recommendation" 
                    className="w-10 h-10 object-contain bg-white/50 rounded-full p-1 flex-shrink-0 mt-1"
                  />
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">
                      💡 Recomendación personalizada
                    </h4>
                    <p className="text-sm text-gray-700">
                      {formData.goal === "Formalizar mi negocio" && 
                        "¡Excelente elección! Te recomendamos comenzar con la ruta de formalización: obtener RUC, elegir régimen tributario y registrar tu negocio."}
                      {formData.goal === "Obtener licencias y permisos" && 
                        "Perfecto. Te guiaremos paso a paso para obtener tu licencia de funcionamiento y otros permisos necesarios."}
                      {formData.goal === "Acceder a financiamiento" && 
                        "Te ayudaré a preparar tu documentación y conectarte con las mejores opciones de financiamiento para MYPEs."}
                      {formData.goal === "Mejorar mis ventas" && 
                        "Te enseñaré estrategias de marketing digital y gestión comercial específicas para tu tipo de negocio."}
                      {formData.goal === "Digitalizar mi negocio" && 
                        "Te acompañaré en la transformación digital: desde redes sociales hasta sistemas de gestión."}
                      {formData.goal === "Crecer mi equipo" && 
                        "Te orientaré sobre contratación legal, planillas y gestión de recursos humanos para MYPEs."}
                    </p>
                  </div>
                </div>
              </Card>
            )}
          </div>
        )}
      </div>

      {/* Bottom button */}
      <div className="p-6 border-t border-black/10">
        <Button 
          onClick={handleContinue}
          disabled={
            (step === 1 && (!formData.name || !formData.email)) ||
            (step === 2 && (!formData.hasRUC || !formData.businessType)) ||
            (step === 3 && !formData.goal)
          }
          className="w-full bg-primary hover:bg-primary/90 text-white py-6 rounded-xl border border-black"
        >
          {step === 3 ? "Completar registro" : "Continuar"}
        </Button>
      </div>
    </div>
  );
}