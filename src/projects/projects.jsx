import PropTypes from "prop-types";

const Project = (props) => {
  return (
    <section className="w-full h-32 border-2 rounded-lg px-3 py-3 md:w-72 shrink-0 flex flex-col hover:border-teal-400">
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
  );
};

Project.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string,
  link: PropTypes.string,
};

export default Project;
