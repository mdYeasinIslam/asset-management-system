import { CommonHeading } from "@/SharedComponent/CommonHeading";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

export const EventSecton = () => {
  const events: Event[] = [
    {
      id: "1",
      title: "Team Building Workshop",
      date: "2025-02-05",
      time: "10:00 AM - 1:00 PM",
      location: "Conference Room A",
      description:
        "A fun and engaging workshop designed to improve team collaboration and communication.",
    },
    {
      id: "2",
      title: "Monthly Town Hall",
      date: "2025-02-10",
      time: "3:00 PM - 4:30 PM",
      location: "Main Auditorium",
      description:
        "Join us for the monthly town hall meeting to discuss company updates and achievements.",
    },
    {
      id: "3",
      title: "Health & Wellness Seminar",
      date: "2025-02-20",
      time: "11:00 AM - 12:30 PM",
      location: "Conference Room B",
      description:
        "Learn tips and strategies to maintain your health and wellness while working.",
    },
  ];
 const contentEvent = <div className="flex flex-col items-center ">
     <h1 className="text-3xl font-bold text-center text-gray-800 mb-6 dark:text-white">
          Upcoming Events
        </h1>

  </div>
  return (
      <section className="  dark:bg-slate-700  rounded-xl py-8">
          <CommonHeading content={contentEvent} />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white dark:bg-slate-900 shadow-lg rounded-lg overflow-hidden"
            >
              <div className="p-4 border-b">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {event.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-200">{event.date}</p>
                <p className="text-sm text-gray-600 dark:text-gray-200">{event.time}</p>
              </div>
              <div className="p-4">
                <p className="text-gray-700 dark:text-gray-200 text-sm mb-3">
                  <span className="font-bold">Location:</span> {event.location}
                </p>
                <p className="text-gray-700 dark:text-gray-200 text-sm mb-3">
                  {event.description}
                </p>
                {/* <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                  View Details
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

