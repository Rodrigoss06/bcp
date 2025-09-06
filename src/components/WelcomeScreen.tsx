import { Button } from "./ui/button";
import mascotImage from 'figma:asset/516eee74fb5fab5174ceba8e74ce9b83cc56736e.png';
import logo from "../assets/logo.png"; // importa tu logo

interface WelcomeScreenProps {
  onCreateAccount: () => void;
  onSignIn: () => void;
}

export function WelcomeScreen({ onCreateAccount, onSignIn }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-8">
      {/* Encabezado con logo + slogan */}
      <div className="mb-12 text-center">
        <img 
          src={logo} 
          alt="KRESE Logo" 
          className="w-64 mx-auto mb-4 object-contain" // tamaño aumentado
        />
        <p className="text-2xl text-gray-700 font-serif italic">
          Crece formal, crece seguro
        </p>
      </div>

      {/* Mascota sin fondo */}
      <div className="mb-12 text-center">
        <img 
          src={mascotImage} 
          alt="KRESE Mascot" 
          className="w-48 h-48 mx-auto mb-4 object-contain"
        />
        <p className="text-gray-700 font-medium">¡Tu asesor empresarial!</p>
      </div>

      {/* Botones */}
      <div className="w-full max-w-sm space-y-4">
        <Button 
          onClick={onCreateAccount}
          className="w-full bg-primary hover:bg-primary/90 text-white py-6 rounded-xl border border-black"
        >
          Crear cuenta
        </Button>
        
        <Button 
          onClick={onSignIn}
          variant="outline"
          className="w-full py-6 rounded-xl border-2 border-black text-black hover:bg-gray-50"
        >
          Iniciar sesión
        </Button>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          Especialmente diseñada para MYPEs en Perú
        </p>
      </div>
    </div>
  );
}
