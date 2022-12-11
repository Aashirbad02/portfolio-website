import React from "react";
import Fade from "react-reveal/Fade";

const Projects = () => {
  return (
    <div id="projects">
      <div className="bg-[#fafafa] p-16">
        <Fade left>
          <div className="text-center text-4xl font-bold text-[#040c2c] pb-8 ">
            Projects
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            <a
              href="/"
              className="max-w-sm m-3 rounded overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              <img
                className="w-full"
                src="https://res.cloudinary.com/ash123/image/upload/v1670579139/pexels-antoni-shkraba-4348401_gcle56.jpg"
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2" data-wow-duration="4s">
                  The Coldest Sunset
                </div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
            </a>
            <a
              href="/"
              className="max-w-sm m-3 rounded overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              <img
                className="w-full"
                src="https://res.cloudinary.com/ash123/image/upload/v1670579139/pexels-antoni-shkraba-4348401_gcle56.jpg"
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
            </a>
            <a
              href="/"
              className="max-w-sm m-3 rounded overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              <img
                className="w-full"
                src="https://res.cloudinary.com/ash123/image/upload/v1670579139/pexels-antoni-shkraba-4348401_gcle56.jpg"
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
            </a>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Projects;
