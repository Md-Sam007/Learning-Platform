import React from 'react';

const CircularProgress = ({ size = 160, strokeWidth = 20, value = 80 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = (circumference - (value / 100)* circumference);

  return (
    <svg width={size} height={size}>
      <circle
        stroke="#e6e6e6"
        fill="transparent"
        strokeWidth={strokeWidth}
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      <circle
        stroke="#49bf59"
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        r={radius}
        
        cy={size / 2}
        cx={size / 2}
        transform={`rotate(280 ${size / 2} ${size / 2})`}
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        fontSize="16"
        fill="#333"
      >
        {`${value}%`}
      </text>
    </svg>
  );
};

export default CircularProgress;
