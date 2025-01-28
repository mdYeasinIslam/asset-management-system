import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { AssetRequestType } from "@/Type/Types";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ requestedAssets }: { requestedAssets: AssetRequestType[] }) => {
  
  // Calculate counts of returnable and non-returnable items
  const returnableCount = requestedAssets.filter(item => item.assetStatus === "Returnable").length;
  const nonReturnableCount = requestedAssets.filter(item => item.assetStatus === "Non-returnable").length;
  
  // Chart data
  const chartData = {
    labels: ["Returnable", "Non-returnable"],
    datasets: [
      {
        data: [returnableCount, nonReturnableCount],
        backgroundColor: ["#34D399", "#F87171"], // Tailwind colors for green and red
        hoverBackgroundColor: ["#059669", "#DC2626"], // Darker shades for hover
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => {
            const value = tooltipItem.raw;
            const total = returnableCount + nonReturnableCount;
            const percentage = ((value / total) * 100).toFixed(2);
            return `${value} items (${percentage}%)`;
          },
        },
      },
    },
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold text-center mb-4">Returnable vs Non-returnable Items</h2>
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;
