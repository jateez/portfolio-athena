import { experiences } from "@/database/db.json";
import { timeFormatter } from "@/helpers/timeFormatter";
import { Experience } from "../../types.ts";

export default function Experiences() {
  return (
    <>
      <main className="flex-col justify-center items-center min-h-screen font-dm pt-16 px-4">
        <h1 className="font-heading text-3xl md:text-4xl pt-2">
          Experiences that <span className="text-main">shaped</span> my journey
        </h1>
        <p className="pt-5 text-medium max-w-3xl leading-relaxed">
          Each experience brought a mix of fun, challenges, lessons, and
          memories. The common thread across them is how they each{" "}
          <span className="border-b-4 border-main">contributed</span>{" "}
          to my growth, helping me become a{" "}
          <span className="border-b-4 border-main">better person</span>.
        </p>
        <div className="flex flex-col container my-6">
          <ol className="relative border-s-2 border-main">
            {experiences.toReversed().map((experience: Experience) => (
              <li key={experience.id} className="ms-6 p-5">
                <span className="absolute mt-1.5 -start-2 rounded-full w-3 h-3 bg-main" />
                <div className="mb-4 space-y-1">
                  <h2 className="text-xl font-bold font-plus">
                    {experience.title}
                  </h2>
                  <p className="text-sm">{experience.name}</p>
                  <p className="text-sm">
                    {timeFormatter(experience.timeStart, experience.timeEnd)}
                  </p>
                </div>
                <div className="mb-4 space-y-1">
                  <p className="font-semibold text-base mb-3">
                    Key Contributions
                  </p>
                  <p>{experience.description}</p>
                </div>
                {
                  /* <div className="space-y-1">
                  <p className="font-semibold text-base mb-1">Technology Used:</p>
                  <span className="text-sm">{"asdsadas"}</span>
                </div> */
                }
              </li>
            ))}
          </ol>
        </div>
      </main>
    </>
  );
}
