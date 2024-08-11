import React from "react";

function Temp({ setCity, stats }) {
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search For Cities"
          onChange={handleCityChange}
          defaultValue="New Delhi"
          className="w-full pl-4 pr-4 py-2 rounded bg-gray-800 border text-slate-200 border-slate-500 focus:outline-none focus:border-slate-300"
        />
      </div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-semibold">{stats.location}</h1>
          <span className="text-sm text-slate-400">
            Chance of rain {stats.precip}%
          </span>
        </div>
        <div className="text-4xl font-bold">{stats.temp}°C</div>
      </div>
      <div className="flex justify-center items-center text-slate-300 text-[25px] mt-6">
        {stats.condition}
      </div>
    </>
  );
}

export default Temp;
