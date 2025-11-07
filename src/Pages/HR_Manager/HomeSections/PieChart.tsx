"use client";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { AssetRequestType } from "@/Type/Types";

ChartJS.register(ArcElement, Tooltip, Legend);

const AssetUsageChart = ({
  requestedAssets,
}: {
  requestedAssets: AssetRequestType[];
}) => {
  // Group assets by type
  const assetTypeCounts: Record<string, number> = {};
  requestedAssets.forEach((item) => {
    if (item.assetType) {
      assetTypeCounts[item.assetType] =
        (assetTypeCounts[item.assetType] || 0) + 1;
    }
  });

  const labels = Object.keys(assetTypeCounts);
  const dataValues = Object.values(assetTypeCounts);

  // Define color palette (expand if needed)
  const backgroundColors = [
    "#3B82F6", // Blue
    "#10B981", // Green
    "#F59E0B", // Amber
    "#8B5CF6", // Purple
    "#EF4444", // Red
    "#06B6D4", // Cyan
    "#F472B6", // Pink
  ];

  // Chart data
  const chartData = {
    labels,
    datasets: [
      {
        label: "Asset Type Distribution",
        data: dataValues,
        backgroundColor: backgroundColors.slice(0, labels.length),
        hoverBackgroundColor: backgroundColors.slice(0, labels.length).map(
          (color) => `${color}CC` // Slightly darker hover
        ),
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom" as const,
        labels: {
          boxWidth: 15,
          color: "#374151",
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => {
            const value = tooltipItem.raw;
            const total = dataValues.reduce((a, b) => a + b, 0);
            const percentage = ((value / total) * 100).toFixed(1);
            return `${tooltipItem.label}: ${value} (${percentage}%)`;
          },
        },
      },
    },
  };

  return (
    <div className="w-full md:w-4/5 xl:w-full mx-auto bg-white dark:bg-neutral-900 shadow-md rounded-2xl p-6">
      <h2 className="text-xl font-semibold text-center mb-4 text-gray-800 dark:text-gray-100">
        📈 Asset Usage by Category
      </h2>

      {requestedAssets.length === 0 ? (
        <p className="text-center text-gray-500">No asset data available</p>
      ) : (
        <>
          <div className="h-96 flex justify-center">
            <Pie
              data={chartData}
              options={options}
              className=""
            />
          </div>
          {/* Summary List */}
          {/* <div className="mt-6 space-y-2">
            {labels.map((label, index) => {
              const count = dataValues[index];
              const total = dataValues.reduce((a, b) => a + b, 0);
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
                    <span>{label}</span>
                  </div>
                  <span className="font-medium">{percent}%</span>
                </div>
              );
            })}
          </div> */}
        </>
      )}
    </div>
  );
};

export default AssetUsageChart;
