"use client";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { AssetType } from "@/Type/Types";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const AssetUsageBarChart = ({
  assetsData,
}: {
  assetsData: AssetType[];
  }) => {
  // 1️⃣ Count assets by type
  const assetTypeCounts: Record<string, number> = {};
  assetsData.forEach((item) => {
    if (item.type) {
      assetTypeCounts[item.type] = (assetTypeCounts[item.type] || 0) + 1;
    }
  });

  const labels = Object.keys(assetTypeCounts);
  const dataValues = Object.values(assetTypeCounts);
  const total = dataValues.reduce((a, b) => a + b, 0);

  // 2️⃣ Define colors (auto-trimmed if fewer categories)
  const backgroundColors = [
    "#3B82F6", // Blue
    "#10B981", // Green
    "#F59E0B", // Amber
    "#8B5CF6", // Purple
    "#EF4444", // Red
    "#06B6D4", // Cyan
    "#F472B6", // Pink
  ].slice(0, labels.length);

  // 3️⃣ Chart Data
  const data = {
    labels,
    datasets: [
      {
        label: "Number of Requests",
        data: dataValues,
        backgroundColor: backgroundColors,
        borderRadius: 6,
        // barThickness: 35,
        barThickness: 70, // 💪 Thicker bars
        maxBarThickness: 100, // limit for resizing
      },
    ],
  };

  // 4️⃣ Chart Options
  const options = {
    responsive: true,
    // maintainAspectRatio: false, // allow flexible height
    plugins: {
      legend: {
        display: false, // hide top legend (optional)
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => {
            const value = tooltipItem.raw;
            const percentage = ((value / total) * 100).toFixed(1);
            return `${value} requests (${percentage}%)`;
          },
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "#4B5563" },
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
        ticks: { color: "#4B5563", stepSize: 1 },
        grid: { color: "#E5E7EB" },
      },
    },
  };

  return (
    <div className="w-full md:w-4/5 xl:w-full  mx-auto bg-white dark:bg-neutral-900 shadow-md rounded-2xl p-6">
      <h2 className="text-xl font-semibold text-center mb-4 text-gray-800 dark:text-gray-100">
        📊 Asset Usage by Category
      </h2>

      {assetsData.length === 0 ? (
        <p className="text-center text-gray-500">No asset data available</p>
      ) : (
        <Bar data={data} options={options} />
      )}

      {/* Optional Summary */}
      <div className="mt-6 space-y-1">
        {labels.map((label, index) => {
          const count = dataValues[index];
          const percent = ((count / total) * 100).toFixed(1);
          return (
            <div
              key={label}
              className="flex items-center justify-between text-sm text-gray-700 dark:text-gray-300"
            >
              <div className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: backgroundColors[index] }}
                ></span>
                {label}
              </div>
              <span>{percent}%</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AssetUsageBarChart;
