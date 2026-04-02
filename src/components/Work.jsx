import Carousel from '../animations/Carousel.jsx'

export default function Work() {

  const works = [
    {
      id: 1,
      name: 'Frontend Project',
      description: 'Fruit website using MERN stack',
      link: 'https://github.com/Talrajsingh/MERN-STACK-FRUIT-WEBSITE'
    },
    {
      id: 2,
      name: 'Hotel App',
      description: 'Hotel management system using React',
      link: 'https://github.com/Talrajsingh/React-js-HotelManagement-project'
    },
    {
      id: 3,
      name: 'ASP.NET Excel Project',
      description: 'Fetch data from Excel file',
      link: 'https://github.com/Talrajsingh/.Net---Excel-Project-'
    },
    {
      id: 4,
      name: 'Auth System - ASP.NET',
      description: 'Authentication system using ASP.NET',
      link: 'https://github.com/Talrajsingh/Auth---.net'
    }
  ]

  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">

      <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>

      <h2 className="text-center text-5xl font-Ovo">
        My Latest Work
      </h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end and full-stack development.
      </p>

      <div className="flex justify-center my-10">

        <Carousel
          items={works}
          baseWidth={Math.min(window.innerWidth * 0.9, 550)}
          autoplay={false}
          autoplayDelay={3000}
          pauseOnHover
          loop
          round={false}
        />

      </div>

    </div>
  )
}