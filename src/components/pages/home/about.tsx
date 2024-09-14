import React from "react";
import { ReadCvLogo } from "@phosphor-icons/react";

import { data } from "../../../utils/data";

export function About() {
  return (
    <div className="w-full">
      <div className="flex gap-10 flex-col py-16 container" id="about">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3" data-aos="fade-up">
            <h2 className="font-bold">01. / About</h2>
          </div>
          <p data-aos="fade-up">Let me tell you a bit about myself.</p>
        </div>

        <div
          className="flex flex-col md:flex-row items-center gap-10"
          data-aos="fade-up"
        >
          <div className="self-start group" data-aos="fade-up">
            <div className="w-[250px] h-[250px] bg-black min-w-[200px] absolute rounded-md"></div>
            <div className="w-[250px] h-[250px] bg-transparent border border-black min-w-[200px] ml-3 mt-3 group-hover:scale-[95%] transition-transform ease-linear duration-100"></div>
          </div>

          <article className="font-light">
            {data.about.map((data, index) => (
              <React.Fragment key={index}>
                <div dangerouslySetInnerHTML={{ __html: data }}></div>
                <br />
              </React.Fragment>
            ))}

            <div className="mt-10 md:text-right" data-aos="fade-up">
              <a href="/Resume.pdf" className="btn" title="Download my resume">
                Download my resume
                <ReadCvLogo size={18} />
              </a>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
