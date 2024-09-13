import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react";

import { cn, isEven } from "../../../utils";
import { data } from "../../../data";

export function Projects() {
  return (
    <div className="w-full">
      <div className="flex gap-10 flex-col py-16 container" id="projects">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3" data-aos="fade-up">
            <h2 className="font-bold">03. / Crafted with love & code</h2>
          </div>
          <p data-aos="fade-up">Here are some of my recent projects.</p>
        </div>

        <div className="w-full flex-col gap-8 flex">
          {data.projects.length > 0 ? (
            data.projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index + 1} />
            ))
          ) : (
            <div className="w-full flex items-center justify-center flex-col gap-2 py-10 text-center">
              <h3 className="font-bold text-sm">No Projects Yet!</h3>
              <span className="text-xs">
                Keep checking to see when new projects are uploaded!
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-6 justify-end mt-10">
          <div>
            <button className="font-bold gap-5 flex items-center btn">
              <span>there's more to see?</span>
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({
  index,
  project: { title, type, tags, description, githubUrl },
}: {
  index: number;
  project: {
    title: string;
    type: string;
    description: string;
    githubUrl: string;
    tags: string[];
  };
}) {
  return (
    <div className="cursor-pointer hover:scale-105 transition-transform duration-500 w-full flex p-2 flex-col-reverse sm:flex-row sm:even:flex-row-reverse items-center relative">
      <article className="flex-1 flex flex-col gap-5" data-aos="zoom-in">
        <div
          className={cn(
            "flex flex-col gap-1 relative py-8",
            isEven(index) && "items-end"
          )}
        >
          <h3 className="font-bold text-sm">{title}</h3>
          <span className="text-xs">{type}</span>
        </div>
        <p
          className={cn(
            "text-sm shadow-lg bg-secondary text-primary font-medium p-6 z-10",
            isEven(index) ? "sm:pl-10" : "sm:pr-10"
          )}
        >
          {description}
        </p>
        <div
          className={cn(
            "w-full flex items-center gap-2 flex-wrap",
            isEven(index) && "justify-end"
          )}
        >
          {tags.map((tag, index) => (
            <span
              className="bg-secondary rounded-2xl py-1 px-2 text-xs text-primary font-semibold"
              key={index}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className={cn("w-full", isEven(index) ? "text-right" : "")}>
          <a href={githubUrl} title="View project on GitHub">
            <button className="text-sm btn">
              <span>VIEW PROJECT</span>
              <ArrowUpRight size={24} />
            </button>
          </a>
        </div>
      </article>
      <div
        className="h-[300px] -mb-6 sm:mb-0 sm:even:-mr-8 sm:flex-1 sm:-ml-8 bg-black/10 w-[80%] mx-auto"
        data-aos={isEven(index) ? "fade-up" : "fade-up"}
      ></div>
    </div>
  );
}
