import {
  XLogo,
  GithubLogo,
  LinkedinLogo,
  InstagramLogo,
  At,
} from "@phosphor-icons/react";

export const data = {
  socials: [
    { name: "X (Formerly Twitter)", icon: <XLogo size={24} />, link: "" },
    { name: "Github", icon: <GithubLogo size={24} />, link: "" },
    { name: "LinkedIn", icon: <LinkedinLogo size={24} />, link: "" },
    { name: "Instagram", icon: <InstagramLogo size={24} />, link: "" },
    { name: "Email", icon: <At size={24} />, link: "" },
  ],
  about: [
    `<p>
        Hi there, welcome to my portfolio, my little home on the web. I'm
        <strong class="font-medium"> Ogharandukun-Brown Meyiwa Louis</strong>, but
        you probably know me as
        <strong class="font-medium">Browyn Louis</strong> in the digital world.
        With a passion for software development deeply rooted in JavaScript and
        its environment, such as React, Vue, Typescript and
        <strong class="font-medium">many more</strong>, I often craft elegant
        solutions that elevate user experiences. My proficiency extends to PHP and
        Laravel, offering versatile solutions across software tech. I also
        occasionally work on mobile app development using React Native.
      </p>`,
    `<p>
        Beyond coding, my academic journey in
        <strong class="font-medium">Animal and Environmental Biology</strong>
        has created in me a sound appreciation for the unity amongst systems,
        inspiring my approach to problem-solving, with the hopes that solving one
        problem provides a bridge for creating more solutions for many more
        problems. I thrive on the challenge of translating complex concepts into
        intuitive user interfaces, where design meets functionality seamlessly.
      </p>`,
    `<p>
        So please, if you would join me, let's bridge the gap between innovation
        and impact, one line of code at a time.
      </p>`,
  ],
  projects: [
    {
      title: "Portfolio 1.0",
      type: "Website",
      tags: ["HTML5", "CSS", "Tailwindcss", "JavaScript"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque totam accusantium eveniet enim minima at ab maxime mollitia vitae culpa sit recusandae, error esse nisi. Nostrum facere eos in ipsum.",
      githubUrl: "",
    },
    {
      title: "Eval360",
      type: "Web App",
      tags: ["React", "JavaScript"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque totam accusantium eveniet enim minima at ab maxime mollitia vitae culpa sit recusandae, error esse nisi. Nostrum facere eos in ipsum.",
      githubUrl: "",
    },
    {
      title: "Portfolio 1.0",
      type: "Website",
      tags: ["HTML5", "CSS", "Tailwindcss", "JavaScript"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque totam accusantium eveniet enim minima at ab maxime mollitia vitae culpa sit recusandae, error esse nisi. Nostrum facere eos in ipsum.",
      githubUrl: "",
    },
    {
      title: "Eval360",
      type: "Web App",
      tags: ["React", "JavaScript"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque totam accusantium eveniet enim minima at ab maxime mollitia vitae culpa sit recusandae, error esse nisi. Nostrum facere eos in ipsum.",
      githubUrl: "",
    },
  ],
  experiences: [
    {
      place: "Freelancer @ Full Stack Web Developer",
      duration: ["2023", "Present"],
      role: "Web Developer",
      location: "Remote",
    },
    {
      place: "University of Benin",
      duration: ["2023"],
      role: "Bsc. Animal & Environmental Biology",
      location: "Benin City, Nigeria",
    },
    {
      place: "Eval360",
      duration: ["2022", "2023"],
      role: "Lead Software Developer",
      location: "Remote, Nigeria",
    },
    {
      place: "HNGi9 Internship",
      duration: ["2022"],
      role: "Web Developer & Team Lead",
      location: "Remote, Lagos, Nigeria",
    },
    {
      place: "NCEE",
      duration: ["2022"],
      role: "Intern & Web Development tutor",
      location: "Benin City, Nigeria",
    },
    {
      place: "Federal Government Collge, Warri",
      duration: ["2017"],
      role: "Senior School Certificate (WAEC)",
      location: "Warri, Nigeria",
    },
  ],
  navLinks: [
    { name: "About" },
    { name: "Experience" },
    { name: "Projects" },
    { name: "Contact" },
  ],
};
