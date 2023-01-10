import React from "react";
import { useState } from "react";
import { Slide } from "react-awesome-reveal";

const ContactUs = () => {
  const [formStatus, setFormStatus] = useState(false);
  const [query, setQuery] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Update inputs value
  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // Form Submit function
  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });
    fetch("https://getform.io/f/5568fcb2-f9d4-48d6-9637-0c59d2910ae0", {
      method: "POST",
      body: formData,
    }).then(() => {
      setFormStatus(true);
      setQuery({ name: "", email: "", message: "" });
    });
  };
  return (
    <div id="contactMe">
      <div className="container py-24 px-6 mx-auto bg-[#fafafa]">
        <Slide triggerOnce>
          <section className="mb-32 text-gray-800">
            <div className="flex flex-wrap">
              <div className="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
                <h2 className="text-4xl font-bold text-[#040c2c] mb-6">
                  Contact Me
                </h2>
                <p className="text-gray-500 mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, modi accusantium ipsum corporis quia asperiores
                  dolorem nisi corrupti eveniet dolores ad maiores repellendus
                  enim autem omnis fugiat perspiciatis? Ad, veritatis.
                </p>
                <p className="text-gray-500 mb-2">Bhubaneswar, Odisha</p>
                <p className="text-gray-500 mb-2">+91 9937775273</p>
                <p className="text-gray-500 mb-2">sabataashirbad@gmail.com</p>
              </div>
              <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
                <form onSubmit={formSubmit}>
                  <div className="form-group mb-6">
                    <input
                      name="name"
                      value={query.name}
                      onChange={handleParam()}
                      type="text"
                      className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-[#040c2c] focus:outline-none"
                      id="exampleInput7"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group mb-6">
                    <input
                      name="email"
                      value={query.email}
                      onChange={handleParam()}
                      type="email"
                      className="form-control block
                                  w-full
                                  px-3
                                  py-1.5
                                  text-base
                                  font-normal
                                  text-gray-700
                                  bg-white bg-clip-padding
                                  border border-solid border-gray-300
                                  rounded
                                  transition
                                  ease-in-out
                                  m-0
                                  focus:text-gray-700 focus:bg-white focus:border-[#040c2c] focus:outline-none"
                      id="exampleInput8"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="form-group mb-6">
                    <input
                      type="text"
                      name="message"
                      value={query.message}
                      onChange={handleParam()}
                      className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-[#040c2c] focus:outline-none
            "
                      id="exampleFormControlTextarea13"
                      rows="3"
                      placeholder="Message"
                    />
                  </div>
                  <button
                    type="submit"
                    className="
            w-full
            px-6
            py-2.5
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            border
            border-[#040c2c]
            hover:bg-[#040c2c] hover:shadow-lg hover:text-white
            active:bg-[#040c2c] active:shadow-lg
            transition
            duration-150
            ease-in-out"
                  >
                    Send
                  </button>
                  {formStatus && <p>Message sent.</p>}
                </form>
              </div>
            </div>
          </section>
        </Slide>
      </div>
    </div>
  );
};

export default ContactUs;
