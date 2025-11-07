
export default function CompanyFooter() {
  return (
    <footer className="w-full border-t-2 border-slate-700 dark:border-gray-800 mt-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} AssetFlow — All rights reserved.
        </p>

        <div className="flex items-center gap-4 mt-2 sm:mt-0">
          <a href="#" className="hover:text-blue-500 transition-colors">
            Privacy
          </a>
          <span className="text-gray-300 dark:text-gray-700">•</span>
          <a href="#" className="hover:text-blue-500 transition-colors">
            Terms
          </a>
          <span className="text-gray-300 dark:text-gray-700">•</span>
          <a href="#" className="hover:text-blue-500 transition-colors">
            Support
          </a>
        </div>
      </div>
    </footer>
  );
}
