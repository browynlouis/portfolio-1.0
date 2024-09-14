import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Moon, Sun } from "@phosphor-icons/react";

import { data } from "../../utils/data";
import { cn, initializeTheme } from "../../utils/helpers";

export function Header() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header>
      <div className="w-full shadow-sm fixed z-10">
        <div
          className="container flex z-10 items-center justify-between py-5 bg-primary"
          data-aos="slide-down"
        >
          <h1 className="font-poppins font-semibold text-lg">B.</h1>

          <ThemeToggle />

          <div className="relative">
            <button
              type="button"
              title="Menu Icon"
              className="flex p-2 flex-col gap-2.5 items-end lg:hidden"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <div
                className={cn(
                  "w-10 h-[1px] bg-secondary transition-all ease-linear duration-300",
                  open && "-rotate-45"
                )}
              ></div>
              <div
                className={cn(
                  "w-[35px] h-[1px] bg-secondary transition-all ease-linear duration-300",
                  open && "-rotate-[135deg]"
                )}
              ></div>
            </button>

            <nav
              className={cn(
                "absolute bg-grey top-10 p-4 z-10 right-0 scale-0 w-[250px] transition-all ease-linear duration-100 shadow-xl lg:bg-transparent lg:scale-100 lg:relative lg:shadow-none lg:right-0 lg:top-0 lg:p-0 lg:w-auto",
                open ? "scale-100" : "scale-0"
              )}
              id="nav"
            >
              <div className="flex flex-col gap-6 lg:gap-4 lg:flex-row">
                {data.navLinks.map((link) => (
                  <Link
                    to={link.name.toLowerCase()}
                    spy={true}
                    offset={-50}
                    key={link.name}
                    activeClass="before:w-5"
                    className={cn(
                      "btn text-sm relative before:w-0 lg:text-secondary text-capitalize font-semibold cursor-pointer"
                    )}
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

function ThemeToggle() {
  const [theme, setTheme] = useState<string>();

  useEffect(() => {
    setTheme(localStorage.getItem("theme")!);
  }, []);

  useEffect(() => {
    initializeTheme();
  }, [theme]);

  return (
    <button
      type="button"
      title="Theme toggle"
      data-role="theme-toggle"
      className="p-1.5 rounded-full bg-secondary text-primary justify-center items-center flex ml-10 lg:ml-[250px] animate-pulse"
      onClick={() => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
      }}
    >
      {theme === "light" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
