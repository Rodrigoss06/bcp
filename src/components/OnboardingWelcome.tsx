import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Lightbulb, TrendingUp, Target, CheckCircle, ArrowRight } from "lucide-react";
import mascotImage from 'figma:asset/516eee74fb5fab5174ceba8e74ce9b83cc56736e.png';

interface OnboardingWelcomeProps {
  isNewUser: boolean;
  onContinue: () => void;
}

export function OnboardingWelcome({ isNewUser, onContinue }: OnboardingWelcomeProps) {
  if (!isNewUser) return null;

  return (
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-sm p-6 bg-white border border-black">
        <div className="text-center mb-6">
          <img 
            src={mascotImage} 
            alt="KRESE Welcome" 
            className="w-20 h-20 mx-auto mb-4 object-contain"
          />
          <h2 className="text-xl font-bold mb-2">¡Bienvenida, Saulo! 🎉</h2>
          <p className="text-gray-600 text-sm">
            Tu cuenta ha sido creada exitosamente. ¡Soy tu asesor personal y te ayudaré a hacer crecer tu negocio paso a paso!
          </p>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center space-x-3 p-3 bg-primary/5 rounded-lg">
            <CheckCircle className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm font-medium">Perfil configurado</p>
              <p className="text-xs text-gray-600">Restaurante • Sin RUC</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 p-3 bg-secondary/5 rounded-lg">
            <Target className="w-5 h-5 text-secondary" />
            <div>
              <p className="text-sm font-medium">Meta definida</p>
              <p className="text-xs text-gray-600">Formalizar mi negocio</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 p-3 bg-amber-50 rounded-lg">
            <Lightbulb className="w-5 h-5 text-amber-600" />
            <div>
              <p className="text-sm font-medium">Ruta personalizada</p>
              <p className="text-xs text-gray-600">4 pasos recomendados por IA</p>
            </div>
          </div>
        </div>

        <Badge className="w-full justify-center mb-4 bg-gradient-to-r from-primary to-secondary text-white py-2">
          🏆 ¡Obtuviste tu primera medalla: "Nuevo Emprendedor"!
        </Badge>

        <Button 
          onClick={onContinue}
          className="w-full bg-primary hover:bg-primary/90 text-white"
        >
          Comenzar mi ruta
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </Card>
    </div>
  );
}