import React from "react";

interface Notice {
  id: number;
  title: string;
  description: string;
  date: string;
}

const notices: Notice[] = [
  {
    id: 1,
    title: "Office Holiday Announcement",
    description:
      "Our office will remain closed on January 30, 2025, in observance of International Workers' Day.",
    date: "2025-01-27",
  },
  {
    id: 2,
    title: "System Maintenance",
    description:
      "Scheduled maintenance will occur on January 31, 2025, from 12:00 AM to 6:00 AM. Expect intermittent downtime.",
    date: "2025-01-25",
  },
  {
    id: 3,
    title: "New Employee Onboarding",
    description:
      "The onboarding session for new employees will be held on February 3, 2025, at the main conference room.",
    date: "2025-01-23",
  },
];

const NoticeSection: React.FC = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-4xl mx-auto my-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Company Notices
      </h2>
      {notices.length === 0 ? (
        <p className="text-gray-600 text-center">No notices to display.</p>
      ) : (
        <ul className="space-y-4">
          {notices.map((notice) => (
            <li
              key={notice.id}
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {notice.title}
              </h3>
              <p className="text-gray-600 mt-1">{notice.description}</p>
              <p className="text-sm text-gray-500 mt-2">
                Posted on: {new Date(notice.date).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NoticeSection;
