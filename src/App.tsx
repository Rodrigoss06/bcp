import { useState } from "react";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { RegistrationScreen } from "./components/RegistrationScreen";
import { Dashboard } from "./components/Dashboard";
import { CreditScenariosScreen } from "./components/CreditScenariosScreen";
import { FinancialSimulators } from "./components/FinancialSimulators";
import { ChatbotButton } from "./components/ChatbotButton";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<"welcome" | "registration" | "dashboard" | "credit-scenarios" | "simulators">("welcome");
  const [isReturningUser, setIsReturningUser] = useState(false);

  const handleCreateAccount = () => {
    setCurrentScreen("registration");
  };

  const handleSignIn = () => {
    // For prototype, go directly to dashboard (returning user)
    setIsReturningUser(true);
    setCurrentScreen("dashboard");
  };

  const handleBackToWelcome = () => {
    setCurrentScreen("welcome");
  };

  const handleRegistrationComplete = () => {
    setIsReturningUser(false); // New user
    setCurrentScreen("dashboard");
  };

  const handleNavigateToCreditScenarios = () => {
    setCurrentScreen("credit-scenarios");
  };

  const handleBackFromCreditScenarios = () => {
    setCurrentScreen("dashboard");
  };

  const handleNavigateToSimulators = () => {
    setCurrentScreen("simulators");
  };

  const handleBackFromSimulators = () => {
    setCurrentScreen("dashboard");
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen shadow-lg relative">
      {currentScreen === "welcome" && (
        <WelcomeScreen 
          onCreateAccount={handleCreateAccount}
          onSignIn={handleSignIn}
        />
      )}
      
      {currentScreen === "registration" && (
        <RegistrationScreen 
          onBack={handleBackToWelcome}
          onComplete={handleRegistrationComplete}
        />
      )}
      
      {currentScreen === "dashboard" && (
        <Dashboard 
          onNavigateToCreditScenarios={handleNavigateToCreditScenarios}
          onNavigateToSimulators={handleNavigateToSimulators}
          isNewUser={!isReturningUser}
        />
      )}

      {currentScreen === "credit-scenarios" && (
        <CreditScenariosScreen 
          onBack={handleBackFromCreditScenarios}
        />
      )}

      {currentScreen === "simulators" && (
        <FinancialSimulators 
          onBack={handleBackFromSimulators}
        />
      )}

      {/* Chatbot button - appears on all screens except welcome */}
      {currentScreen !== "welcome" && <ChatbotButton />}
    </div>
  );
}