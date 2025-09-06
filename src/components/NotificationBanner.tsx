import { useState } from "react";
import { Alert, AlertDescription } from "./ui/alert";
import { Button } from "./ui/button";
import { X, Bell, Clock, DollarSign, BookOpen } from "lucide-react";

export function NotificationBanner() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "tramite",
      title: "Licencia de funcionamiento",
      message: "Tu solicitud está siendo revisada. Tiempo estimado: 3-5 días hábiles.",
      action: "Ver estado",
      icon: Clock,
      color: "primary"
    },
    {
      id: 2,
      type: "credito",
      title: "Nueva opción de crédito",
      message: "COFIDE tiene una nueva línea con tasa 8.5% para restaurantes.",
      action: "Ver ofertas",
      icon: DollarSign,
      color: "secondary"
    }
  ]);

  const dismissNotification = (id: number) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  if (notifications.length === 0) return null;

  return (
    <div className="space-y-2 p-4 pt-0">
      {notifications.map((notification) => {
        const Icon = notification.icon;
        return (
          <Alert key={notification.id} className={`border-l-4 ${
            notification.color === "primary" ? "border-l-primary bg-primary/5" : "border-l-secondary bg-secondary/5"
          }`}>
            <div className="flex items-start space-x-3">
              <Icon className={`w-5 h-5 mt-0.5 ${
                notification.color === "primary" ? "text-primary" : "text-secondary"
              }`} />
              <div className="flex-1">
                <h4 className="font-medium text-sm">{notification.title}</h4>
                <AlertDescription className="text-sm text-gray-600">
                  {notification.message}
                </AlertDescription>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="mt-2 text-xs h-7"
                >
                  {notification.action}
                </Button>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => dismissNotification(notification.id)}
                className="p-1 h-auto"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </Alert>
        );
      })}
    </div>
  );
}