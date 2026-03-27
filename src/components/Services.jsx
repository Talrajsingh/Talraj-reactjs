import { InteractiveCard } from "../animations/InteractiveCard";
import DecryptedText from "../animations/DecryptedText";

export default function Services() {

  const services = [
    {
      name: "Frontend Development",
      icon: "./assets/frontend-icon.png",
      description:
        "Building responsive and modern web interfaces using React.js, Tailwind CSS and JavaScript with focus on performance and user experience.",
      link: "#",
    },
    {
      name: "Backend Development",
      icon: "./assets/backend-icon.png",
      description:
        "Developing scalable backend applications using ASP.NET Core and Node.js with secure authentication and optimized business logic.",
      link: "#",
    },
    {
      name: "REST API Development",
      icon: "./assets/api-icon.png",
      description:
        "Designing and implementing RESTful APIs using ASP.NET Web API and Express.js to enable smooth communication between frontend and backend.",
      link: "#",
    },
    {
      name: "Database Management",
      icon: "./assets/database-icon.png",
      description:
        "Working with SQL Server and MongoDB to design efficient database structures and optimize queries for scalable applications.",
      link: "#",
    }
  ];

  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">

      {/* Decrypted Animated Text */}
      <div className="text-center  mb-2 font-Ovo">
        <DecryptedText
          text="What I Offer"
          animateOn="view"
          sequential
          speed={40}
        />
      </div>

      <h2 className="text-center text-5xl font-Ovo">
        My Services
      </h2>
      

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Full-Stack Developer specializing in React, MERN stack and ASP.NET development.
        I build scalable web applications, REST APIs and responsive user interfaces.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 my-10">

        {services.map((service) => (
          <InteractiveCard
            key={service.name}
            className="px-8 py-12 hover:-translate-y-2 duration-500"
          >

            <img src={service.icon} alt="" className="w-10" />

            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
              {service.name}
            </h3>

            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
              {service.description}
            </p>

            <a href={service.link} className="flex items-center gap-2 text-sm mt-5">
              Learn more
              <img src="./assets/right-arrow.png" alt="" className="w-4" />
            </a>

          </InteractiveCard>
        ))}

      </div>

    </div>
  );
}