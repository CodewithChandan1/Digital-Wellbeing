import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { useScreenTime } from "./hooks/useScreenTime";
import { useMindfulBreaks } from "./hooks/useMindfulBreaks";

export default function App() {
  const { screenTimeData, todayMinutes } = useScreenTime();
  const { breaks, handleCompleteBreak } = useMindfulBreaks();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Dashboard
        screenTimeData={screenTimeData}
        todayMinutes={todayMinutes}
        breaks={breaks}
        onCompleteBreak={handleCompleteBreak}
      />
    </div>
  );
}
