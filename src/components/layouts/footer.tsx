import React, { useEffect, useRef } from "react";

import { data } from "../../utils/data";
import { CaretDoubleRight } from "@phosphor-icons/react";

export function Footer() {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const scrollButton = ref.current! as HTMLButtonElement;

    function handleScroll() {
      if (window.scrollY > 300) {
        scrollButton.classList.remove("hidden");
        scrollButton.classList.add("flex");
      } else {
        scrollButton.classList.remove("flex");
        scrollButton.classList.add("hidden");
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer>
      <div className="w-full bg-primary" data-aos="fade-in">
        <div className="container py-32 flex flex-col gap-8 justify-center text-center">
          <span className="text-sm">
            &copy; ${new Date().getFullYear()} Designed & Developed by
            <a href="/"> Browyn Louis</a>
          </span>
          <div className="flex items-center gap-4 justify-center text-center flex-wrap">
            {data.socials.map((social, index) => (
              <React.Fragment key={index}>
                <a href={social.link} className="btn">
                  {social.name}
                </a>
                {index + 1 != data.socials.length && "/"}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <button
        ref={ref}
        title="Back to top"
        type="button"
        className="text-base fixed items-center gap-3 tracking-widest -rotate-90 opacity-100 drop-shadow-2xl bottom-10 -right-1 font-semibold hidden z-20 hover:scale-110 transition-all ease-linear duration-100"
        onClick={() => window.scrollTo(0, 0)}
      >
        <span>TOP</span>
        <CaretDoubleRight size={16} />
      </button>
    </footer>
  );
}
