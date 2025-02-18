
const AboutPage = () => {
  return (
    <div className="  flex items-center justify-center p-6">
      <div className="container mx-auto bg-white dark:bg-[#2a3341] dark:text-white shadow-lg rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">About Asset Management System</h1>
        <p className="text-gray-600 dark:text-white leading-relaxed mb-4">
          The <span className="font-semibold">Asset Management System</span> is a web application designed to help companies efficiently track, allocate, and manage their assets. This system simplifies the process of distributing company assets to employees, tracking asset usage, and retrieving returnable items.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
            <div className="flex flex-col gap-4">  
                <div className="bg-gray-50  p-4 rounded-xl shadow-sm">
                    <h2 className="text-xl font-semibold text-gray-700 ">Key Features:</h2>
                    <ul className="list-disc pl-6 text-gray-600 mt-2">
                    <li>Allocate assets to employees.</li>
                    <li>Track asset usage over time.</li>
                    <li>Retrieve returnable assets.</li>
                    <li>Generate asset usage reports.</li>
                    </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
                    <h2 className="text-xl font-semibold text-gray-700">Why Use This System?</h2>
                    <ul className="list-disc pl-6 text-gray-600 mt-2">
                    <li>Streamlines asset management.</li>
                    <li>Reduces manual tracking errors.</li>
                    <li>Provides detailed analytics on asset usage.</li>
                    <li>Ensures accountability of company assets.</li>
                    </ul>
                </div>
            </div>
            <div className="w-full  mt-6 text-center">
            <img
                src="/images/about/about.jpg"
                alt="Asset Management"
                className="w-ful rounded-lg shadow-md mx-auto"
            />
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
