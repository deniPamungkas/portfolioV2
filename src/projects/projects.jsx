import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Project = (props) => {
  return (
    <Link to={"/project-detail"}>
      <section className="w-full h-32 border-2 rounded-lg px-3 py-3 md:w-72 shrink-0 flex flex-col hover:border-teal-400 cursor-pointer">
        <h1 className="text-lg font-bold mb-1">{props.name}</h1>
        <div className="text-xs h-10">{props.desc}</div>
        <a
          href={props.link}
          target="blank"
          className="text-xs text-teal-600 dark:text-teal-400 font-semibold hover:underline"
        >
          {props.link}
        </a>
      </section>
    </Link>
  );
};

Project.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string,
  link: PropTypes.string,
};

export default Project;
