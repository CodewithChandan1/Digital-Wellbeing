import { BarChart, Clock, Activity } from "lucide-react";
import { ScreenTimeData } from "../types";

interface Props {
  data: ScreenTimeData[];
  todayMinutes: number;
}

export function ScreenTimeChart({ data, todayMinutes }: Props) {
  const categories = ["productive", "social", "entertainment", "other"];
  const maxHeight = 150;

  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <Clock className="w-5 h-5 text-indigo-600" />
        <h2 className="text-xl font-semibold">Screen Time Overview</h2>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
        <div className="text-center">
          <p className="text-3xl font-bold text-indigo-600">
            {Math.floor(todayMinutes / 60)}h {todayMinutes % 60}m
          </p>
          <p className="text-sm text-gray-600">Today's Usage</p>
        </div>
        <div className="flex gap-4 sm:gap-6">
          {categories.map((category) => (
            <div key={category} className="text-center">
              <div className="w-3 h-16 sm:h-20 bg-gray-100 rounded-full relative overflow-hidden">
                <div
                  className={`absolute bottom-0 w-full ${
                    category === "productive"
                      ? "bg-green-400"
                      : category === "social"
                      ? "bg-blue-400"
                      : category === "entertainment"
                      ? "bg-purple-400"
                      : "bg-gray-400"
                  }`}
                  style={{
                    height: `${
                      (data
                        .filter((d) => d.category === category)
                        .reduce((acc, curr) => acc + curr.minutes, 0) /
                        1440) *
                      maxHeight
                    }px`,
                  }}
                />
              </div>
              <p className="text-xs text-gray-600 mt-2 capitalize">
                {category}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-600">
        <p>Last 7 Days</p>
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4" />
          <p>
            Daily Average:{" "}
            {Math.round(
              data.reduce((acc, curr) => acc + curr.minutes, 0) / 7 / 60
            )}
            h
          </p>
        </div>
      </div>
    </div>
  );
}
