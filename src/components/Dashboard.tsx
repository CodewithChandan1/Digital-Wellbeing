import { ScreenTimeChart } from "./ScreenTimeChart";
import { MindfulBreaks } from "./MindfulBreaks";
import type { ScreenTimeData, Break } from "../types";

interface DashboardProps {
  screenTimeData: ScreenTimeData[];
  todayMinutes: number;
  breaks: Break[];
  onCompleteBreak: (id: string) => void;
}

export function Dashboard({
  screenTimeData,
  todayMinutes,
  breaks,
  onCompleteBreak,
}: DashboardProps) {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <ScreenTimeChart data={screenTimeData} todayMinutes={todayMinutes} />
        <MindfulBreaks breaks={breaks} onCompleteBreak={onCompleteBreak} />
      </div>
    </main>
  );
}
