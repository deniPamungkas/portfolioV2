import Project from "../projects/projects";
import { projects } from "../assets/API/data.js";

const Projects = () => {
  return (
    <section className="px-5 pt-20 lg:w-3/4 m-auto pb-52 dark:text-white">
      <div className="mb-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-5">
          Things I’ve made trying to impress the universe.
        </h1>
        <p>
          I have done several projects from simple to the complex one, but here
          are some of my best projects.
        </p>
      </div>
      <div className="flex flex-col gap-3 md:flex-row md:flex-wrap">
        {projects.map((item, index) => {
          return (
            <Project
              key={index}
              name={item.name}
              link={item.link}
              desc={item.desc}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
