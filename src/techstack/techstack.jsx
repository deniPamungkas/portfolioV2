import PropTypes from "prop-types";

const Techstack = (props) => {
  return (
    <section className="techstack w-52 h-16 md:w-60 md:h-20 flex justify-center gap-x-3 px-2 py-2 md:px-3 md:py-3 border-2 rounded-xl shrink-0 relative overflow-hidden hover:border-teal-400">
      <div className="overlay absolute w-full h-full top-0 left-0 bg-transparent"></div>
      <img
        src={props.logo}
        alt="logo"
        className="w-1/4 md:w-1/3 h-full object-contain"
      />
      <div className="w-3/4 md:w-2/3 h-full flex flex-col items-start">
        <h1 className="text-md md:text-lg font-bold">{props.skill}</h1>
        <p className="text-xs">{props.ket}</p>
      </div>
    </section>
  );
};

Techstack.propTypes = {
  skill: PropTypes.string,
  ket: PropTypes.string,
  logo: PropTypes.any,
};

export default Techstack;
