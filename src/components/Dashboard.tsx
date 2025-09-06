import { useState } from "react";
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { NotificationBanner } from "./NotificationBanner";
import { OnboardingWelcome } from "./OnboardingWelcome";
import mascotImage from 'figma:asset/516eee74fb5fab5174ceba8e74ce9b83cc56736e.png';
import { 
  Route, 
  BookOpen, 
  Users, 
  User, 
  CheckCircle, 
  Clock,
  TrendingUp,
  Target,
  Lightbulb,
  ArrowRight,
  AlertCircle,
  Calendar,
  Award,
  MessageSquare,
  Video,
  FileText,
  Calculator,
  CreditCard,
  Trophy,
  Star,
  Bot
} from "lucide-react";

interface DashboardProps {
  onNavigateToCreditScenarios: () => void;
  onNavigateToSimulators: () => void;
  isNewUser?: boolean;
}

export function Dashboard({ onNavigateToCreditScenarios, onNavigateToSimulators, isNewUser = false }: DashboardProps) {
  const [activeTab, setActiveTab] = useState("ruta");
  const [showOnboarding, setShowOnboarding] = useState(isNewUser);

  const navItems = [
    { id: "ruta", label: "Ruta", icon: Route },
    { id: "cursos", label: "Cursos", icon: BookOpen },
    { id: "comunidad", label: "Comunidad", icon: Users },
    { id: "perfil", label: "Perfil", icon: User }
  ];

  const routeSteps = [
    { 
      id: 1, 
      title: "Obtener RUC", 
      status: "completed", 
      description: "Registra tu negocio ante SUNAT",
      estimatedTime: "1-2 días",
      completedDate: "15 Nov 2024",
      nextActions: []
    },
    { 
      id: 2, 
      title: "Licencia de Funcionamiento", 
      status: "in-progress", 
      description: "Solicita tu licencia municipal",
      estimatedTime: "7-15 días",
      progress: 45,
      nextActions: ["Entregar documentos adicionales", "Inspección técnica programada"],
      deadline: "28 Nov 2024"
    },
    { 
      id: 3, 
      title: "Registro Sanitario", 
      status: "pending", 
      description: "Para negocios de alimentos",
      estimatedTime: "5-10 días",
      requirements: ["Licencia de funcionamiento", "Certificado HACCP", "Análisis de agua"]
    },
    { 
      id: 4, 
      title: "Libro de Planillas", 
      status: "pending", 
      description: "Si vas a contratar empleados",
      estimatedTime: "1 día",
      requirements: ["RUC vigente", "Trabajadores contratados"]
    }
  ];

  const courses = [
    {
      title: "Facturación Electrónica Básica",
      duration: "45 min",
      level: "Básico",
      progress: 0,
      category: "Facturación",
      recommended: true,
      type: "microcurso",
      modules: 4,
      certificate: true
    },
    {
      title: "Marketing Digital para Restaurantes",
      duration: "2 horas",
      level: "Intermedio",
      progress: 45,
      category: "Marketing",
      recommended: true,
      type: "curso",
      modules: 8,
      certificate: true
    },
    {
      title: "Impuestos para MYPEs",
      duration: "1 hora",
      level: "Básico",
      progress: 0,
      category: "Tributario",
      recommended: false,
      type: "microcurso",
      modules: 3,
      certificate: true
    },
    {
      title: "Gestión Financiera",
      duration: "3 horas", 
      level: "Intermedio",
      progress: 0,
      category: "Finanzas",
      recommended: false,
      type: "curso",
      modules: 12,
      certificate: true
    },
    {
      title: "Formalización de Negocios",
      duration: "1.5 horas",
      level: "Básico", 
      progress: 100,
      category: "Legal",
      recommended: false,
      type: "curso",
      modules: 6,
      certificate: true
    }
  ];

  const achievements = [
    { id: 1, title: "Primer RUC", icon: "🏆", earned: true, date: "15 Nov 2024" },
    { id: 2, title: "Primer Curso", icon: "📚", earned: true, date: "20 Nov 2024" },
    { id: 3, title: "Formalización", icon: "✅", earned: false, progress: 50 },
    { id: 4, title: "Mentor", icon: "🎯", earned: false, progress: 0 },
  ];

  return (
    <div className="h-screen bg-white flex flex-col relative overflow-hidden">
      {/* Header Banner - Fixed */}
      <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white flex-shrink-0">
        <div className="mb-4">
          <h1 className="text-xl font-bold mb-1">¡Hola, Saulo!</h1>
          <p className="text-primary-foreground/80">Tu progreso esta semana</p>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm">Progreso general</span>
            <span className="text-sm font-medium">35%</span>
          </div>
          <Progress value={35} className="h-2 bg-white/20" />
          
          <div className="flex items-center space-x-3 mt-4 p-3 bg-white/10 rounded-lg">
            <img 
              src={mascotImage} 
              alt="KRESE AI" 
              className="w-8 h-8 object-contain bg-white/20 rounded-full p-1 flex-shrink-0"
            />
            <p className="text-sm">
              <strong>Sugerencia IA:</strong> Completa tu licencia de funcionamiento para acelerar tu formalización
            </p>
          </div>

          {/* Achievement notification */}
          <div className="flex items-center space-x-2 p-2 bg-yellow-400/20 rounded-lg">
            <Trophy className="w-4 h-4 text-yellow-200" />
            <p className="text-sm">
              <strong>¡Nueva medalla!</strong> Completaste tu primer curso 🎉
            </p>
          </div>
        </div>
      </div>

      {/* Notifications - Fixed */}
      <div className="flex-shrink-0">
        <NotificationBanner />
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 pb-20">
        {activeTab === "ruta" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold">Mi Ruta de Formalización</h2>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="bg-secondary text-white">
                  1 de 4 completados
                </Badge>
                <Button size="sm" variant="outline" className="text-xs">
                  <Bot className="w-3 h-3 mr-1" />
                  Ayuda IA
                </Button>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-4 top-8 bottom-8 w-0.5 bg-gray-200"></div>
              
              <div className="space-y-6">
                {routeSteps.map((step, index) => (
                  <div key={step.id} className="relative">
                    <div className="flex items-start space-x-4">
                      <div className={`relative w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                        step.status === "completed" ? "bg-green-500 border-green-500" :
                        step.status === "in-progress" ? "bg-primary border-primary" : 
                        "bg-white border-gray-300"
                      }`}>
                        {step.status === "completed" ? (
                          <CheckCircle className="w-4 h-4 text-white" />
                        ) : step.status === "in-progress" ? (
                          <Clock className="w-4 h-4 text-white" />
                        ) : (
                          <span className="text-xs font-bold text-gray-400">{step.id}</span>
                        )}
                      </div>
                      
                      <Card className={`flex-1 p-4 border ${
                        step.status === "in-progress" ? "border-primary bg-primary/5" : "border-black/10"
                      }`}>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-medium text-black">{step.title}</h3>
                            <p className="text-sm text-gray-600 mt-1">{step.description}</p>
                            
                            {step.status === "completed" && step.completedDate && (
                              <p className="text-xs text-green-600 mt-2">
                                ✅ Completado el {step.completedDate}
                              </p>
                            )}
                            
                            {step.status === "in-progress" && (
                              <div className="mt-3">
                                <div className="flex items-center justify-between text-xs mb-1">
                                  <span>Progreso</span>
                                  <span>{step.progress}%</span>
                                </div>
                                <Progress value={step.progress || 0} className="h-1" />
                                
                                {step.deadline && (
                                  <div className="flex items-center mt-2 text-xs text-amber-600">
                                    <Calendar className="w-3 h-3 mr-1" />
                                    Fecha límite: {step.deadline}
                                  </div>
                                )}
                                
                                {step.nextActions && (
                                  <div className="mt-2">
                                    <p className="text-xs font-medium mb-1">Próximas acciones:</p>
                                    <ul className="text-xs text-gray-600 space-y-1">
                                      {step.nextActions.map((action, idx) => (
                                        <li key={idx}>• {action}</li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </div>
                            )}
                            
                            {step.status === "pending" && step.requirements && (
                              <div className="mt-2">
                                <p className="text-xs font-medium mb-1">Requisitos previos:</p>
                                <div className="flex flex-wrap gap-1">
                                  {step.requirements.map((req, idx) => (
                                    <Badge key={idx} variant="outline" className="text-xs">
                                      {req}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between mt-3">
                          <span className="text-xs text-gray-500">
                            ⏱️ {step.estimatedTime}
                          </span>
                          <div className="space-x-2">
                            {step.status === "in-progress" && (
                              <Button size="sm" className="bg-primary text-white text-xs">
                                Continuar
                              </Button>
                            )}
                            {step.status === "pending" && (
                              <Button size="sm" variant="outline" className="border-black/20 text-xs">
                                Iniciar
                              </Button>
                            )}
                            {step.status === "completed" && (
                              <Button size="sm" variant="outline" className="border-green-200 text-green-600 text-xs">
                                Ver certificado
                              </Button>
                            )}
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3 mt-6">
              <Card className="p-3 text-center border border-black/10">
                <TrendingUp className="w-5 h-5 text-primary mx-auto mb-1" />
                <p className="text-lg font-bold text-black">25%</p>
                <p className="text-xs text-gray-600">Completado</p>
              </Card>
              <Card className="p-3 text-center border border-black/10">
                <Target className="w-5 h-5 text-secondary mx-auto mb-1" />
                <p className="text-lg font-bold text-black">3</p>
                <p className="text-xs text-gray-600">Pendientes</p>
              </Card>
              <Card className="p-3 text-center border border-black/10">
                <Calendar className="w-5 h-5 text-amber-500 mx-auto mb-1" />
                <p className="text-lg font-bold text-black">7</p>
                <p className="text-xs text-gray-600">Días rest.</p>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "cursos" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold">Cursos y Microcursos</h2>
              <Badge variant="outline" className="text-xs">
                5 disponibles
              </Badge>
            </div>

            {/* Filter tabs */}
            <div className="flex space-x-2">
              <Button size="sm" variant="default" className="bg-primary text-white text-xs">
                Todos
              </Button>
              <Button size="sm" variant="outline" className="text-xs">
                Microcursos
              </Button>
              <Button size="sm" variant="outline" className="text-xs">
                Recomendados
              </Button>
            </div>
            
            <div className="space-y-4">
              {courses.map((course, index) => (
                <Card key={index} className={`p-4 border ${
                  course.recommended ? "border-primary bg-primary/5" : "border-black/10"
                }`}>
                  {course.recommended && (
                    <Badge className="mb-3 bg-primary text-white text-xs">
                      ⭐ Recomendado para ti
                    </Badge>
                  )}
                  
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-medium text-black">{course.title}</h3>
                        {course.type === "microcurso" && (
                          <Badge variant="secondary" className="text-xs bg-secondary/20 text-secondary">
                            Micro
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center space-x-3 mt-1">
                        <div className="flex items-center space-x-1 text-sm text-gray-600">
                          <Video className="w-3 h-3" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-sm text-gray-600">
                          <BookOpen className="w-3 h-3" />
                          <span>{course.modules} módulos</span>
                        </div>
                        {course.certificate && (
                          <div className="flex items-center space-x-1 text-sm text-gray-600">
                            <Award className="w-3 h-3" />
                            <span>Certificado</span>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center space-x-3 mt-2">
                        <Badge variant="outline" className="text-xs">
                          {course.level}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {course.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  {course.progress > 0 && (
                    <div className="mb-3">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span>Progreso</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                  )}
                  
                  <Button 
                    size="sm" 
                    className={`w-full ${
                      course.progress === 100 ? "bg-green-500 hover:bg-green-600" :
                      course.progress > 0 ? "bg-primary hover:bg-primary/90" : 
                      course.recommended ? "bg-primary hover:bg-primary/90" : "bg-secondary hover:bg-secondary/90"
                    } text-white`}
                  >
                    {course.progress === 100 ? (
                      <>
                        <Award className="w-4 h-4 mr-2" />
                        Ver certificado
                      </>
                    ) : course.progress > 0 ? (
                      <>
                        Continuar
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    ) : (
                      <>
                        {course.type === "microcurso" ? "Comenzar microcurso" : "Comenzar curso"}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </Card>
              ))}
            </div>

            {/* Course stats */}
            <Card className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
              <div className="flex items-center space-x-4">
                <div className="flex-1 text-center">
                  <p className="text-2xl font-bold text-primary">1</p>
                  <p className="text-sm text-gray-600">Completado</p>
                </div>
                <div className="flex-1 text-center">
                  <p className="text-2xl font-bold text-secondary">2</p>
                  <p className="text-sm text-gray-600">En progreso</p>
                </div>
                <div className="flex-1 text-center">
                  <p className="text-2xl font-bold text-amber-600">3h</p>
                  <p className="text-sm text-gray-600">Esta semana</p>
                </div>
              </div>
            </Card>
          </div>
        )}

        {activeTab === "comunidad" && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold">Comunidad KRESE</h2>

            {/* Category tabs */}
            <div className="flex space-x-2 overflow-x-auto pb-2">
              <Button size="sm" variant="default" className="bg-primary text-white text-xs whitespace-nowrap">
                Todo
              </Button>
              <Button size="sm" variant="outline" className="text-xs whitespace-nowrap">
                Trámites
              </Button>
              <Button size="sm" variant="outline" className="text-xs whitespace-nowrap">
                Finanzas
              </Button>
              <Button size="sm" variant="outline" className="text-xs whitespace-nowrap">
                Historias
              </Button>
              <Button size="sm" variant="outline" className="text-xs whitespace-nowrap">
                Marketing
              </Button>
            </div>
            
            <Card className="p-4 border border-black/10">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium">Próximos eventos</h3>
                <Badge variant="outline" className="text-xs">2 esta semana</Badge>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg border border-primary/20">
                  <div>
                    <p className="font-medium text-sm">Webinar: Tributación para MYPEs</p>
                    <p className="text-xs text-gray-600">Mañana 7:00 PM • 150 participantes</p>
                    <div className="flex items-center mt-1 space-x-1">
                      <Badge variant="outline" className="text-xs">Trámites</Badge>
                      <Badge variant="outline" className="text-xs">Gratis</Badge>
                    </div>
                  </div>
                  <Button size="sm" className="bg-primary text-white">Unirse</Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-secondary/5 rounded-lg border border-secondary/20">
                  <div>
                    <p className="font-medium text-sm">Networking: Restaurantes</p>
                    <p className="text-xs text-gray-600">Viernes 6:00 PM • 45 participantes</p>
                    <div className="flex items-center mt-1 space-x-1">
                      <Badge variant="outline" className="text-xs">Networking</Badge>
                      <Badge variant="outline" className="text-xs">Presencial</Badge>
                    </div>
                  </div>
                  <Button size="sm" className="bg-secondary text-white">Unirse</Button>
                </div>
              </div>
            </Card>

            <Card className="p-4 border border-black/10">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium">Conversaciones recientes</h3>
                <Button size="sm" variant="outline" className="text-xs">
                  <MessageSquare className="w-3 h-3 mr-1" />
                  Nueva pregunta
                </Button>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium">JL</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <p className="font-medium text-sm">Juan López</p>
                      <Badge variant="outline" className="text-xs">Trámites</Badge>
                    </div>
                    <p className="text-sm text-gray-700">¿Alguien sabe cuánto demora obtener la licencia de funcionamiento en Lima?</p>
                    <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                      <span>Hace 2 horas</span>
                      <span>👍 5</span>
                      <span>💬 8 respuestas</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                  <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium">AR</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <p className="font-medium text-sm">Ana Ruiz</p>
                      <Badge variant="outline" className="text-xs">Historias</Badge>
                    </div>
                    <p className="text-sm text-gray-700">Compartiendo mi experiencia con el registro sanitario para mi panadería 🍞</p>
                    <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                      <span>Hace 4 horas</span>
                      <span>👍 12</span>
                      <span>💬 3 respuestas</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                  <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium">CF</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <p className="font-medium text-sm">Carlos Flores</p>
                      <Badge variant="outline" className="text-xs">Finanzas</Badge>
                    </div>
                    <p className="text-sm text-gray-700">¿Recomendaciones para primer crédito MYPE? Mi negocio tiene 6 meses</p>
                    <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                      <span>Hace 6 horas</span>
                      <span>👍 8</span>
                      <span>💬 15 respuestas</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Community stats */}
            <div className="grid grid-cols-3 gap-3">
              <Card className="p-3 text-center border border-black/10">
                <Users className="w-5 h-5 text-primary mx-auto mb-1" />
                <p className="text-lg font-bold text-black">2.4k</p>
                <p className="text-xs text-gray-600">Miembros</p>
              </Card>
              <Card className="p-3 text-center border border-black/10">
                <MessageSquare className="w-5 h-5 text-secondary mx-auto mb-1" />
                <p className="text-lg font-bold text-black">156</p>
                <p className="text-xs text-gray-600">Activos hoy</p>
              </Card>
              <Card className="p-3 text-center border border-black/10">
                <Calendar className="w-5 h-5 text-amber-500 mx-auto mb-1" />
                <p className="text-lg font-bold text-black">3</p>
                <p className="text-xs text-gray-600">Eventos</p>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "perfil" && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold">Mi Perfil</h2>
            
            <Card className="p-4 border border-black/10">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-xl font-medium">M</span>
                </div>
                <div>
                  <h3 className="font-medium">Saulo Cano</h3>
                  <p className="text-sm text-gray-600">Restaurante "Sabor Casero"</p>
                  <Badge variant="outline" className="mt-1">
                    Restaurante / Comida
                  </Badge>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm font-medium">Meta principal</p>
                  <p className="text-sm text-gray-600">Formalizar mi negocio</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Estado de RUC</p>
                  <p className="text-sm text-green-600">✅ Obtenido</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Miembro desde</p>
                  <p className="text-sm text-gray-600">Nov 2024</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Nivel</p>
                  <p className="text-sm text-primary font-medium">Emprendedor</p>
                </div>
              </div>

              <div className="space-y-2">
                <Button 
                  onClick={onNavigateToCreditScenarios}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white"
                >
                  <CreditCard className="w-4 h-4 mr-2" />
                  Ver Escenarios de Crédito
                </Button>
                <Button 
                  onClick={onNavigateToSimulators}
                  variant="outline" 
                  className="w-full border-black/20"
                >
                  <Calculator className="w-4 h-4 mr-2" />
                  Simuladores Financieros
                </Button>
              </div>
            </Card>

            <Card className="p-4 border border-black/10">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium">Mis Certificados</h3>
                <Badge variant="outline" className="text-xs">1 obtenido</Badge>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="text-sm font-medium">Formalización de Negocios</p>
                      <p className="text-xs text-gray-600">Completado: 20 Nov 2024</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="text-xs">
                    <FileText className="w-3 h-3 mr-1" />
                    Descargar
                  </Button>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium text-gray-500">Marketing Digital</p>
                      <p className="text-xs text-gray-400">En progreso: 45%</p>
                    </div>
                  </div>
                  <Progress value={45} className="w-16 h-2" />
                </div>
              </div>
            </Card>

            <Card className="p-4 border border-black/10">
              <h3 className="font-medium mb-3">Mis Logros</h3>
              <div className="grid grid-cols-2 gap-3">
                {achievements.map((achievement) => (
                  <div 
                    key={achievement.id}
                    className={`text-center p-3 rounded-lg border ${
                      achievement.earned 
                        ? "bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200" 
                        : "bg-gray-50 border-gray-200"
                    }`}
                  >
                    <div className={`text-2xl mb-1 ${achievement.earned ? "" : "grayscale"}`}>
                      {achievement.icon}
                    </div>
                    <p className={`text-xs font-medium ${
                      achievement.earned ? "text-black" : "text-gray-500"
                    }`}>
                      {achievement.title}
                    </p>
                    {achievement.earned ? (
                      <p className="text-xs text-gray-600 mt-1">{achievement.date}</p>
                    ) : (
                      achievement.progress !== undefined && (
                        <div className="mt-2">
                          <Progress value={achievement.progress} className="h-1" />
                          <p className="text-xs text-gray-500 mt-1">{achievement.progress}%</p>
                        </div>
                      )
                    )}
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-4 border border-black/10">
              <h3 className="font-medium mb-3">Estadísticas</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">25%</p>
                  <p className="text-xs text-gray-600">Progreso total</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-secondary">1</p>
                  <p className="text-xs text-gray-600">Cursos completados</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-amber-600">2</p>
                  <p className="text-xs text-gray-600">Medallas ganadas</p>
                </div>
              </div>
            </Card>
          </div>
        )}
        </div>
      </div>

      {/* Fixed Bottom Navigation */}
      <div className="bg-white border-t border-black/10 p-4 flex-shrink-0">
        <div className="grid grid-cols-4 gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant={activeTab === item.id ? "default" : "ghost"}
                className={`flex flex-col items-center space-y-1 h-auto py-2 ${
                  activeTab === item.id 
                    ? "bg-primary text-white" 
                    : "text-gray-600 hover:text-primary"
                }`}
                onClick={() => setActiveTab(item.id)}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs">{item.label}</span>
              </Button>
            );
          })}
        </div>
      </div>

      {/* Onboarding overlay for new users */}
      <OnboardingWelcome 
        isNewUser={showOnboarding}
        onContinue={() => setShowOnboarding(false)}
      />
    </div>
  );
}