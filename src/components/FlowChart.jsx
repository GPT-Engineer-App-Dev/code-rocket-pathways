import React from 'react';

const FlowChart = () => {
  const topics = [
    { id: 'arrays', label: 'Arrays & Hashing', x: 50, y: 50 },
    { id: 'twoPointers', label: 'Two Pointers', x: 200, y: 150 },
    { id: 'stack', label: 'Stack', x: 200, y: 250 },
    { id: 'slidingWindow', label: 'Sliding Window', x: 350, y: 100 },
    { id: 'linkedList', label: 'Linked List', x: 350, y: 200 },
    { id: 'binarySearch', label: 'Binary Search', x: 350, y: 300 },
    { id: 'trees', label: 'Trees', x: 500, y: 200 },
    { id: 'tries', label: 'Tries', x: 650, y: 100 },
    { id: 'heap', label: 'Heap / Priority Queue', x: 650, y: 200 },
    { id: 'backtracking', label: 'Backtracking', x: 650, y: 300 },
  ];

  const connections = [
    { from: 'arrays', to: 'twoPointers' },
    { from: 'arrays', to: 'stack' },
    { from: 'twoPointers', to: 'slidingWindow' },
    { from: 'twoPointers', to: 'linkedList' },
    { from: 'stack', to: 'binarySearch' },
    { from: 'linkedList', to: 'trees' },
    { from: 'binarySearch', to: 'trees' },
    { from: 'trees', to: 'tries' },
    { from: 'trees', to: 'heap' },
    { from: 'trees', to: 'backtracking' },
  ];

  return (
    <svg className="w-full h-[400px]" viewBox="0 0 700 350">
      {connections.map((connection, index) => {
        const from = topics.find(t => t.id === connection.from);
        const to = topics.find(t => t.id === connection.to);
        return (
          <line
            key={index}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke="currentColor"
            strokeWidth="2"
          />
        );
      })}
      {topics.map((topic) => (
        <g key={topic.id}>
          <circle
            cx={topic.x}
            cy={topic.y}
            r="30"
            fill="currentColor"
            className="text-primary"
          />
          <text
            x={topic.x}
            y={topic.y + 45}
            textAnchor="middle"
            className="text-sm font-medium"
          >
            {topic.label}
          </text>
        </g>
      ))}
    </svg>
  );
};

export default FlowChart;
