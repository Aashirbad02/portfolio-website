import React from "react";
import { Slide } from "react-awesome-reveal";

const Projects = () => {
  return (
    <div id="projects">
      <div className="bg-[#fafafa] p-16">
        <Slide left triggerOnce>
          <div className="text-center text-4xl font-bold text-[#040c2c] pb-8 ">
            Projects
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            <a
              href="https://incofibsnitr.com"
              className="max-w-sm m-3 rounded overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              <img
                className="w-full"
                src="https://res.cloudinary.com/ash123/image/upload/v1670579139/pexels-antoni-shkraba-4348401_gcle56.jpg"
                alt=""
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">InCoFIBS NITR</div>
                <p className="text-gray-700 text-base">
                  InCoFIBS is a prestigious international conference organised
                  to provide a platform for industry experts, researchers, and
                  students to effectively exchange ideas and recent advances in
                  the various fields of Biological Sciences.
                </p>
              </div>
            </a>
            <a
              href="https://hackodisha2022.tech/"
              className="max-w-sm m-3 rounded overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              <img
                className="w-full"
                src="https://res.cloudinary.com/ash123/image/upload/v1670579139/pexels-antoni-shkraba-4348401_gcle56.jpg"
                alt="The official website for HackOdisha 2.0"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  The official website for HackOdisha 2.0
                </div>
                <p className="text-gray-700 text-base">
                  HackOdisha 2.0 was one of the biggest Hackathons of India with
                  3000+ registrations.
                </p>
              </div>
            </a>
            <a
              href="https://ash-mapout.netlify.app/"
              className="max-w-sm m-3 rounded overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              <img
                className="w-full"
                src="https://res.cloudinary.com/ash123/image/upload/v1670579139/pexels-antoni-shkraba-4348401_gcle56.jpg"
                alt="Mapout"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Mapout</div>
                <p className="text-gray-700 text-base">
                  An application to track your workout(cycling and running)
                  journey.
                </p>
              </div>
            </a>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Projects;
