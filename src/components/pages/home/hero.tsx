import React from "react";
import { CaretDoubleDown, ReadCvLogo } from "@phosphor-icons/react";

import { data } from "../../../utils/data";

export function Hero() {
  return (
    <div className="flex flex-col w-full h-screen mt-auto max-h-[960px] items-center justify-center container">
      <div className="flex flex-col m-auto items-center justify-center md:flex-row max-w-[720px]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold" data-aos="fade-up">
              <span className="font-medium">Hi, my name is</span>{" "}
              <span>Browyn Louis.</span>
            </h1>
            <p
              className="font-light"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              I'm a software developer, building great softwares for the web and
              mobile using
              <strong className="font-normal"> React Native</strong>
            </p>
          </div>
          <div
            className="flex gap-4 mt-10 items-center flex-wrap"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <Socials />
          </div>
          <div
            className="mt-10 md:text-right"
            data-aos="fade-up"
            data-aos-duration="2500"
          >
            <a href="/Resume.pdf" className="btn" title="Download my resume">
              MY RESUME <ReadCvLogo size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="animate-bounce -mt-20">
        <CaretDoubleDown size={48} />
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
