import { data } from "../../../utils/data";
import { cn, isEven } from "../../../utils/helpers";

export function Experiences() {
  return (
    <div className="w-full">
      <div className="flex gap-10 flex-col py-16 container" id="experience">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3" data-aos="fade-up">
            <h2 className="font-bold">02. / Experience</h2>
          </div>
          <p data-aos="fade-up">Walk down the steps of experience with me.</p>
        </div>

        <div className="hidden w-full flex-col justify-between lg:flex-row sm:max-w-lg lg:max-w-3xl m-auto lg:flex">
          <div className="w-full p-2 flex gap-16 flex-col items-center">
            {data.experiences
              .filter((_, index) => !isEven(index + 1))
              .map((experience, index) => (
                <Experience
                  key={index}
                  experience={experience}
                  sn={index + 1}
                />
              ))}
          </div>

          <div className="hidden w-[2px] bg-secondary"></div>

          <div className="w-full p-2 flex gap-16 flex-col items-center">
            {data.experiences
              .filter((_, index) => isEven(index + 1))
              .map((experience, index) => (
                <Experience
                  key={index}
                  experience={experience}
                  sn={index + 1}
                />
              ))}
          </div>
        </div>

        <div className="flex flex-col gap-16 lg:hidden">
          {data.experiences.map((experience, index) => (
            <Experience key={index} experience={experience} sn={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Experience({
  experience,
  sn,
}: {
  experience: {
    place: string;
    role: string;
    location: string;
    duration: string[];
  };
  sn: number;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 p-4 pl-0",
        isEven(sn) ? "self-start" : "self-end"
      )}
    >
      <div className="flex justify-between flex-col-reverse gap-4">
        <div className="flex flex-col gap-1 items-end" data-aos="fade-up">
          <h3 className="font-bold text-sm">{experience.place}</h3>
          <p className="text-xs font-medium">{experience.role}</p>
        </div>
        <span
          className="text-xs self-end flex items-center flex-row-reverse gap-2 font-light"
          data-aos="fade-up"
        >
          <i className="ph ph-gps-fix"></i> {experience.location}
        </span>
        <span
          className="text-sm ml-auto relative before:w-20 before:h-[2px] before:bg-secondary before:text-secondary before:right-[150px] before:top-[10px] before:absolute font-semibold"
          data-aos="fade-up"
        >
          {experience.duration.join(" - ")}
        </span>
      </div>
    </div>
  );
}
