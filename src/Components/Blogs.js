import React from "react";
import { Slide } from "react-awesome-reveal";

const Blogs = () => {
  return (
    <div id="blogs">
      <section className="py-6 sm:py-12">
        <div className="container p-6 mx-auto space-y-8">
          <Slide right>
            <div className="space-y-2 text-center ">
              <h2 className="text-4xl font-bold text-[#040c2c] pb-4">
                My Blogs
              </h2>
              <p className="font-serif text-sm ">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-3 lg:px-6">
              <article className="flex flex-col ">
                <a href="/">
                  <img
                    alt=""
                    className="object-cover w-full h-52 rounded-lg"
                    src="https://resources.owllabs.com/hubfs/best%20computer%20monitors.jpeg"
                  />
                </a>
                <div className="flex flex-col flex-1 p-6">
                  <a
                    href="/"
                    className="text-xs tracking-wider uppercase hover:underline "
                  >
                    Convenire
                  </a>
                  <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                    Te nulla oportere reprimique his dolorum
                  </h3>
                  <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs ">
                    <span>June 1, 2020</span>
                    <span>2.1K views</span>
                  </div>
                </div>
              </article>
              <article className="flex flex-col ">
                <a href="/">
                  <img
                    alt=""
                    className="object-cover w-full h-52 rounded-lg"
                    src="https://resources.owllabs.com/hubfs/best%20computer%20monitors.jpeg"
                  />
                </a>
                <div className="flex flex-col flex-1 p-6">
                  <a
                    href="/"
                    className="text-xs tracking-wider uppercase hover:underline "
                  >
                    Convenire
                  </a>
                  <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                    Te nulla oportere reprimique his dolorum
                  </h3>
                  <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs ">
                    <span>June 2, 2020</span>
                    <span>2.2K views</span>
                  </div>
                </div>
              </article>
              <article className="flex flex-col ">
                <a href="/">
                  <img
                    alt=""
                    className="object-cover w-full h-52 rounded-lg"
                    src="https://resources.owllabs.com/hubfs/best%20computer%20monitors.jpeg"
                  />
                </a>
                <div className="flex flex-col flex-1 p-6">
                  <a
                    href="/"
                    className="text-xs tracking-wider uppercase hover:underline "
                  >
                    Convenire
                  </a>
                  <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                    Te nulla oportere reprimique his dolorum
                  </h3>
                  <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs ">
                    <span>June 3, 2020</span>
                    <span>2.3K views</span>
                  </div>
                </div>
              </article>
            </div>
          </Slide>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
