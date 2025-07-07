import { CommonHeading } from "@/SharedComponent/CommonHeading";
import React, { useState } from "react";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

interface Event {
  date: string;
  title: string;
}

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const events: Event[] = [
    { date: "2025-01-29", title: "Project Deadline" },
    { date: "2025-02-05", title: "Team Workshop" },
    { date: "2025-02-10", title: "Monthly Town Hall" },
  ];

  const startOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const endOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );

  const startDay = startOfMonth.getDay();
  const totalDays = endOfMonth.getDate();

  const days = Array.from({ length: 42 }, (_, index) => {
    const dayNumber = index - startDay + 1;
    return dayNumber > 0 && dayNumber <= totalDays ? dayNumber : null;
  });

  const changeMonth = (offset: number) => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + offset,
      1
    );
    setCurrentDate(newDate);
  };

  const formatDateString = (day: number) =>
    `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(day).padStart(2, "0")}`;

  const isToday = (day: number) =>
    formatDateString(day) === new Date().toISOString().split("T")[0];

  const hasEvent = (day: number) =>
    events.some((event) => event.date === formatDateString(day));
  const contentCalendar = (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
        Calendar
      </h1>
    </div>
  );
  return (
    <div className=" flex flex-col items-center justify-center bg-gray-100 dark:bg-slate-700 rounded-xl">
      <div className="bg-white dark:bg-slate-900  rounded-lg shadow-lg p-4 w-full max-w-md">
        <CommonHeading content={contentCalendar} />
        <div className="flex items-center justify-between mb-4">
          <button
            className="bg-blue-500 text-white  px-4 py-2 rounded-lg hover:bg-blue-600"
            onClick={() => changeMonth(-1)}
          >
            Prev
          </button>
          <h2 className="text-xl font-semibold">
            {currentDate.toLocaleString("default", {
              month: "long",
            })}{" "}
            {currentDate.getFullYear()}
          </h2>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            onClick={() => changeMonth(1)}
          >
            Next
          </button>
        </div>

        {/* Days of Week */}
        <div className="grid grid-cols-7 gap-2 mb-2">
          {daysOfWeek.map((day) => (
            <div
              key={day}
              className="text-center font-semibold text-gray-700 dark:text-white"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-2">
          {days.map((day, index) => (
            <div
              key={index}
              className={`h-12 flex items-center dark:text-black justify-center rounded-lg border ${
                day
                  ? isToday(day)
                    ? "bg-green-200 border-green-400 font-bold"
                    : hasEvent(day)
                    ? "bg-yellow-200 border-yellow-400"
                    : "bg-gray-50 border-gray-300"
                  : "border-none"
              }`}
            >
              {day && (
                <div className="text-sm">
                  {day}
                  {hasEvent(day) && (
                    <span className="block text-xs text-blue-500">Event</span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
