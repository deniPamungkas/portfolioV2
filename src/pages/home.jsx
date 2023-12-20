import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Galeri from "../galeri/galeri";
import { data } from "../assets/API/data.js";
import Techstack from "../techstack/techstack";
import "./home.scss";

const Home = () => {
  return (
    <section className="night px-5 pt-20 max-w-3xl xl:max-w-5xl m-auto h-fit pb-52 xl:w-3/4">
      <div className=" w-52 h-52 md:w-64 md:h-64 flex justify-center items-center overflow-hidden m-auto rounded-full mb-5">
        <img
          src="fotoku.jpg"
          alt=""
          className="w-64 h-64 rounded-full object-contain object-bottom mb-5 scale-150 -translate-y-14 md:mb-7 md:w-72 md:h-72"
        />
      </div>
      <h1 className="font-bold text-4xl md:text-5xl leading-10 mb-5 md:mb-7 md:leading-tight dark:text-white">
        A man with enthusiasm for code especially JavaScript and React.
      </h1>
      <p className="mb-5 md:mb-7 leading-7 font-semibold text-gray-500 dark:text-white">
        Im deni, a junior developer living in Indonesia. My interest is in web
        development field cause its such an exciting things. I love writing code
        using javascript and its frameworks reactJS. I often do several projects
        including the simplest until the complex one with purpose to increase my
        skill to be better every single day.
      </p>
      <div className="flex gap-x-5 mb-10 md:mb-14 text-gray-500 dark:text-white">
        <GitHubIcon />
        <InstagramIcon />
        <FacebookIcon />
        <LinkedInIcon />
      </div>
      <Galeri />
      <div className="scroller flex flex-col gap-y-2 md:gap-y-4 h-auto mt-80 overflow-hidden w-full">
        <ul className="scroller_inner-l w-fit flex gap-x-2 md:gap-x-4 dark:text-white">
          {data.map((item, index) => {
            return (
              <Techstack
                key={index}
                skill={item.skill}
                ket={item.ket}
                logo={item.logo}
              />
            );
          })}
          {data.map((item, index) => {
            return (
              <Techstack
                key={index}
                skill={item.skill}
                ket={item.ket}
                logo={item.logo}
              />
            );
          })}
        </ul>
        <ul className="scroller_inner-r w-fit flex justify-end gap-x-2 md:gap-x-4 dark:text-white">
          {data.map((item, index) => {
            return (
              <Techstack
                key={index}
                skill={item.skill}
                ket={item.ket}
                logo={item.logo}
              />
            );
          })}
          {data.map((item, index) => {
            return (
              <Techstack
                key={index}
                skill={item.skill}
                ket={item.ket}
                logo={item.logo}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Home;
