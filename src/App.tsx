import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import SiteLayout from "./components/layouts";
import { Hero } from "./components/pages/home/hero";
import { About } from "./components/pages/home/about";
import { Experiences } from "./components/pages/home/experiences";
import { Projects } from "./components/pages/home/projects";
import { Contact } from "./components/pages/home/contact";
import { initializeTheme } from "./utils/helpers";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });

    initializeTheme();
  }, []);

  return (
    <SiteLayout>
      <Hero />
      <About />
      <Experiences />
      <Projects />
      <Contact />
    </SiteLayout>
  );
}

export default App;
