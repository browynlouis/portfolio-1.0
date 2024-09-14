import React from "react";

import { data } from "../../../utils/data";

export function Contact() {
  return (
    <div className="w-full">
      <div className="flex gap-10 flex-col py-16 container" id="contact">
        <div className="flex flex-col gap-2 justify-center text-center">
          <div
            className="flex items-center gap-3 justify-center text-center"
            data-aos="fade-up"
          >
            <h2 className="font-bold">04. / Contact Me</h2>
          </div>
          <p data-aos="fade-up">
            Want to discuss a project or say hi? You can reach out below
          </p>
        </div>

        <div
          className="flex gap-4 items-center justify-center flex-wrap text-center"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <Socials />
        </div>

        <div className="w-full text-center flex gap-5 justify-center flex-col">
          <form
            action=""
            className="flex flex-col gap-3 max-w-[450px] w-full mx-auto items-center"
            data-aos="fade-up"
          >
            <label htmlFor="email" className="font-bold text-sm">
              Get notified of new projects and involvement
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="text-center border-b border-b-secondary placeholder:text-secondary bg-transparent p-2 h-10 placeholder:text-sm outline-none"
              placeholder="Your email address"
            />
            <button className="btn">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
}

function Socials() {
  return (
    <div className="flex items-center gap-4">
      {data.socials.map((social, index) => (
        <React.Fragment key={social.name}>
          <a
            href={social.link}
            className="hover:scale-125 transition-transform ease-in-out duration-150"
            title={social.name}
          >
            {social.icon}
          </a>
          {index + 1 != data.socials.length && "/"}
        </React.Fragment>
      ))}
    </div>
  );
}
