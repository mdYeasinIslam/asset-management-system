import { useAuth } from "@/hook/useAuth";
import CoreValue from "@/SharedComponent/about-us/CoreValue";
import MissionVission from "@/SharedComponent/about-us/MissionVission";
import Stats from "@/SharedComponent/about-us/Stats";

const About = () => {
    const {dark} = useAuth()
  return (
    <section className={`  `}>
      {/* <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5 lg:gap-10 items-center text-center md:text-left">
     
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold  mb-6">
            About Our Asset Management
          </h2>
          <p className=" text-lg leading-relaxed mb-6">
            Our platform is designed to simplify asset tracking, improve
            operational efficiency, and provide data-driven insights for
            effective decision-making. Whether you manage physical equipment,
            digital assets, or resources, our system empowers you to gain full
            control and maximize productivity.
          </p>
          <p className=" text-lg leading-relaxed">
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
      </div> */}
      <Stats />
      <MissionVission/>
      <CoreValue />
    </section>
  );
};

export default About;
