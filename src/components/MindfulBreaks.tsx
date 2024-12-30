import { Brain, Check, Timer, Activity, Eye } from "lucide-react";
import { Break } from "../types";

interface Props {
  breaks: Break[];
  onCompleteBreak: (id: string) => void;
}

export function MindfulBreaks({ breaks, onCompleteBreak }: Props) {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <Brain className="w-5 h-5 text-indigo-600" />
        <h2 className="text-xl font-semibold">Mindful Breaks</h2>
      </div>

      <div className="space-y-4">
        {breaks.map((breakItem) => (
          <div
            key={breakItem.id}
            className={`flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-lg border gap-4 ${
              breakItem.completed
                ? "bg-green-50 border-green-200"
                : "bg-white border-gray-200"
            }`}
          >
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div
                className={`p-2 rounded-full ${
                  breakItem.completed ? "bg-green-100" : "bg-indigo-100"
                }`}
              >
                {breakItem.type === "meditation" && (
                  <Brain className="w-4 h-4 text-indigo-600" />
                )}
                {breakItem.type === "stretch" && (
                  <Activity className="w-4 h-4 text-indigo-600" />
                )}
                {breakItem.type === "walk" && (
                  <Timer className="w-4 h-4 text-indigo-600" />
                )}
                {breakItem.type === "eye-rest" && (
                  <Eye className="w-4 h-4 text-indigo-600" />
                )}
              </div>
              <div>
                <p className="font-medium capitalize">{breakItem.type} Break</p>
                <p className="text-sm text-gray-600">{breakItem.time}</p>
              </div>
            </div>

            <button
              onClick={() => onCompleteBreak(breakItem.id)}
              disabled={breakItem.completed}
              className={`p-2 rounded-full transition-colors ml-auto ${
                breakItem.completed
                  ? "bg-green-100 cursor-default"
                  : "bg-indigo-100 hover:bg-indigo-200"
              }`}
            >
              <Check
                className={`w-4 h-4 ${
                  breakItem.completed ? "text-green-600" : "text-indigo-600"
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
