import React from "react";

function Highlights({ stats }) {
  return (
    <div className="mt-2">
      <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition duration-300 ease-in-out">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="text-2xl">{stats.icon}</span>
            <span className="text-sm text-slate-400">{stats.title}</span>
          </div>
          <span className="text-xl font-semibold">
            {stats.value} {stats.unit}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Highlights;
