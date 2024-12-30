import { Activity, Eye } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Activity className="w-8 h-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">
              Digital Wellbeing
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-center sm:text-right">
              <p className="text-sm text-gray-600">Daily Goal</p>
              <p className="font-medium">6 hours max</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
              <Eye className="w-6 h-6 text-indigo-600" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
