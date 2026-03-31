import MeteorCrash from "../animations/MeteorCrash.jsx"

export default function About() {

    

    const skills = [
  { name: "React", level: 80 },
  { name: ".NET Web API", level: 75 },
  { name: "Node.js", level: 65 },
  { name: "SQL Server", level: 70 },
  { name: "JavaScript", level: 85 },
];

    const data = [
        {
            name: 'Languages',
            icon1: './assets/code-icon.png',
            icon2: './assets/code-icon-dark.png',
            description: 'HTML, CSS, JavaScript React Js, ASP.NET WEB API, C# ,SQL SERVER , NODE.JS , EXPRESS.JS',
        },
        {
            name: 'Education',
            icon1: './assets/edu-icon.png',
            icon2: './assets/edu-icon-dark.png',
            description: 'B.Tech in Computer Science',
        },
        {
            name: 'Projects',
            icon1: './assets/project-icon.png',
            icon2: './assets/project-icon-dark.png',
            description: 'Built more than 20 projects',
        },
    ];

    return (

        <div
            id="about"
            className="relative w-full px-[12%] py-10 scroll-mt-20 overflow-hidden"
        >

            {/* ⭐ Meteor animation background */}
            <div className="absolute right-0 top-0 w-[450px] h-full pointer-events-none">
        <MeteorCrash />
      </div>

            <h4 className="text-center mb-2 text-lg font-Ovo">
                Introduction
            </h4>

            <h2 className="text-center text-5xl font-Ovo">
                About me
            </h2>

            <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">

                <div className="max-w-max mx-auto relative">

                    <img
                        src='./assets/user-image.png'
                        alt=""
                        className="w-64 sm:w-80 rounded-3xl max-w-none"
                    />

                    <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center">

                        <img
                            src="./assets/circular-text.png"
                            alt=""
                            className="w-full animate-spin_slow"
                        />

                        <img
                            src="./assets/logo.png"
                            alt=""
                            className="w-2/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        />

                    </div>

                </div>

                <div className="flex-1">

                    <p className="mb-10 max-w-2xl font-Ovo">
                        I am an experienced FullStack Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">

                        {data.map((data) => (

                            <li
                                key={data.name}
                                className="border border-gray-300 dark:border-white/30 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white/80 dark:hover:bg-darkHover/50"
                            >

                                <img src={data.icon1} alt="" className="w-7 mt-3 dark:hidden" />
                                <img src={data.icon2} alt="" className="w-7 mt-3 hidden dark:block" />

                                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                                    {data.name}
                                </h3>

                                <p className="text-gray-600 text-sm dark:text-white/80">
                                    {data.description}
                                </p>

                            </li>

                        ))}

                    </ul>

                    

                </div>

            </div>
            <h1 className="my-10 text-center text-gray-700 font-Ovo dark:text-white/80 text-3xl">
  Technical Skills
</h1>

<div className="w-full max-w-md mx-auto space-y-4 px-4">

  {skills.map((skill) => (
    <div key={skill.name}>

      <div className="flex justify-between text-xs sm:text-sm font-medium mb-1">
        <span>{skill.name}</span>
        <span>{skill.level}%</span>
      </div>

      <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 overflow-hidden">

        <div
          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-700"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>

    </div>
  ))}
</div>

        </div>

    )
}