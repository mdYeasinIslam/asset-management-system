
const AboutPage = () => {
  return (
    <div className="dark:h-screen   dark:bg-[#2a3341]">
      <div className="container mx-auto dark:text-white py-6 px-2 md:p-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          About Asset Management System
        </h1>
        <p className="text-gray-600 dark:text-white leading-relaxed mb-4">
          The <span className="font-semibold">Asset Management System</span> is
          a web application designed to help companies efficiently track,
          allocate, and manage their assets. This system simplifies the process
          of distributing company assets to employees, tracking asset usage, and
          retrieving returnable items.
        </p>
        <div className="flex flex-col-reverse md:grid grid-cols-1 md:grid-cols-2 items-center gap-4">
          <div className="flex flex-col gap-4">
            <div className="bg-gray-50 text-gray-600  dark:bg-[#3d495c] dark:text-white p-4 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold  ">Key Features:</h2>
              <ul className="list-disc pl-6 mt-2">
                <li>Allocate assets to employees.</li>
                <li>Track asset usage over time.</li>
                <li>Retrieve returnable assets.</li>
                <li>Generate asset usage reports.</li>
              </ul>
            </div>
            <div className="bg-gray-50 text-gray-600  dark:bg-[#3d495c] dark:text-white p-4 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold ">Why Use This System?</h2>
              <ul className="list-disc pl-6  mt-2">
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
