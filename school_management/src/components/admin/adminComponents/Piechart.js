import React from "react";

const Piechart = ({ percentage = 85 }) => {
  const radius = 95; // Radius of the circle
  const stroke = 8; // Stroke width
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="p-5">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-xs mx-auto">
        <h3 className="text-lg font-bold text-center mb-4">Course Activities</h3>
        <div className="relative flex flex-col items-center">
          <svg height={radius * 2} width={radius * 2}>
            {/* Background Circle */}
            <circle
              stroke="#E5E7EB"
              fill="transparent"
              strokeWidth={stroke}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />
            {/* Progress Circle */}
            <circle
              stroke="#1E40FF"
              fill="transparent"
              strokeWidth={stroke}
              strokeDasharray={`${circumference} ${circumference}`}
              style={{ strokeDashoffset }}
              strokeLinecap="round"
              r={normalizedRadius}
              cx={radius}
              cy={radius}
              transform="rotate(-90, 95, 95)"
            />
            {/* Centered Percentage */}
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dy=".3em"
              className="text-blue-600 font-bold text-sm"
            >
              {percentage}%
            </text>
          </svg>
          {/* Legend */}
          <div className="flex justify-between w-full mt-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              <span className="text-sm text-gray-700">Process</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
              <span className="text-sm text-gray-700">In process</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Piechart;
