import React from "react";
import "../css/About.css";
import { Slide } from "react-awesome-reveal";

const About = () => {
  return (
    <div className="lg:h-[80vh] bg-[#fafafa]" id="about">
      <Slide triggerOnce>
        <div className="flex flex-col-reverse lg:flex-row lg:px-16 p-6">
          <div className="lg:w-[60%] pt-24">
            <div className="text-4xl font-bold text-[#040c2c]">About Me</div>
            <div className="pt-3 pb-1 text-[#999]">
              Visual Designer and Full-Stack Developer
            </div>
            <div className="lg:pr-24 leading-7 text-[#797979]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              aliquid repudiandae. Eaque esse ipsa exercitationem placeat quam
              ratione? Ipsam ratione earum dicta exercitationem a, nam quas
              expedita molestiae non itaque! Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Vitae quas maxime beatae quis in
              incidunt, exercitationem voluptatum culpa unde libero odit
              voluptatem a rem explicabo omnis. Tempore odit atque asperiores.
            </div>
            <div className="pt-8">
              <a href="https://google.com" target="blank">
                <button class="button-57">
                  <span class="text text-lg ">Resume</span>
                  <span className="text-lg">Download </span>
                </button>
              </a>
            </div>
          </div>
          <div className="pt-16">
            <img
              src="https://res.cloudinary.com/ash123/image/upload/v1670515279/photo-removebg_uncjxa.png"
              alt="Aashirbad Sabat"
            />
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default About;
