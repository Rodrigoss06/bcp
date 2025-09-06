import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import mascotImage from 'figma:asset/516eee74fb5fab5174ceba8e74ce9b83cc56736e.png';

export function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content: "¡Hola! Soy tu asistente IA de KRESE. ¿En qué puedo ayudarte hoy?",
      timestamp: new Date()
    }
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        type: "user",
        content: message,
        timestamp: new Date()
      };
      
      setMessages([...messages, newMessage]);
      setMessage("");
      
      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          type: "bot",
          content: getBotResponse(message),
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const getBotResponse = (userMessage: string) => {
    const msg = userMessage.toLowerCase();
    
    if (msg.includes("ruc")) {
      return "Para obtener tu RUC, necesitas ir a SUNAT con tu DNI y llenar el formulario 2119. Te ayudo a preparar los documentos paso a paso. ¿Quieres que te guíe?";
    }
    if (msg.includes("licencia")) {
      return "La licencia de funcionamiento se tramita en tu municipalidad. Necesitarás tu RUC, declaración jurada y plano de ubicación. ¿Tu negocio es de bajo riesgo?";
    }
    if (msg.includes("credito") || msg.includes("prestamo")) {
      return "Te puedo ayudar a comparar opciones de crédito. ¿Qué monto necesitas y para qué lo vas a usar? También puedo mostrarte los escenarios financieros.";
    }
    if (msg.includes("curso")) {
      return "Tenemos microcursos de facturación, marketing digital e impuestos. Según tu perfil, te recomiendo empezar por marketing digital. ¿Te interesa?";
    }
    
    return "Entiendo tu consulta. Puedo ayudarte con trámites, cursos, financiamiento y más. ¿Podrías ser más específico sobre lo que necesitas?";
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-10 right-10 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary hover:scale-105 transition-transform text-white shadow-lg border-2 border-black/20 relative overflow-hidden"
        >
          <img 
            src={mascotImage} 
            alt="KRESE Assistant" 
            className="w-12 h-12 object-contain"
          />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-10 right-10 w-80 h-96 z-50">
      <Card className="h-full border border-black shadow-lg bg-white flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-primary to-secondary text-white rounded-t-lg border-b border-black">
          <div className="flex items-center space-x-3">
            <img 
              src={mascotImage} 
              alt="KRESE Assistant" 
              className="w-8 h-8 object-contain bg-white/20 rounded-full p-1"
            />
            <div>
              <span className="font-medium">Asistente KRESE</span>
              <p className="text-xs text-white/80">En línea</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="text-white hover:bg-white/20 p-1"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-xs p-3 rounded-lg text-sm ${
                msg.type === "user" 
                  ? "bg-primary text-white" 
                  : "bg-gray-100 text-black border border-gray-200"
              }`}>
                {msg.content}
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-black/10">
          <div className="flex space-x-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Escribe tu pregunta..."
              className="flex-1 border-black/20"
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <Button
              onClick={handleSendMessage}
              size="sm"
              className="bg-primary hover:bg-primary/90 text-white"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}