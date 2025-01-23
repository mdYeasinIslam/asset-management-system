
const About= () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-20 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5 lg:gap-10 items-center text-center md:text-left">
     
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            About Our Asset Management System
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Our platform is designed to simplify asset tracking, improve
            operational efficiency, and provide data-driven insights for
            effective decision-making. Whether you manage physical equipment,
            digital assets, or resources, our system empowers you to gain full
            control and maximize productivity.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            With a user-friendly interface, real-time updates, and powerful
            analytics, this tool is the perfect solution for businesses of all
            sizes looking to optimize their asset management processes.
          </p>
        </div>

        <div className="w-full flex lg:justify-end">
          <img
            src="/images/about/about.jpg"
            alt="About Us Illustration"
            className="rounded-lg shadow-lg w-full  lg:w-3/4"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
