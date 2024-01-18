const About = () => {
  return (
    <section className="h-full px-5 md:flex md:flex-row-reverse md:justify-end m-auto md:gap-x-10 pb-52 pt-20 xl:w-3/4">
      <div className=" w-52 h-52 md:w-64 md:h-64 flex justify-center items-start overflow-hidden rounded-full mb-5 md:mb-0 shrink-0">
        <img
          src="fotoku.jpg"
          alt=""
          className="w-64 h-64 object-cover object-bottom mb-7 -translate-y-10 md:-translate-y-0"
        />
      </div>
      <div className="md:w-2/3 dark:text-white">
        <h1 className="text-3xl font-bold md:text-5xl mb-7 md:mb-10">
          I’m Deni Pamungkas, an Indonesian 🇮🇩 Developer.
        </h1>
        <p className="text-justify">
          I am a frontend developer who likes challenges. I like completing
          leetcode missions in my free time. Of course, I also often deepen my
          skills by creating projects. by working on projects, I encountered a
          lot of problems in the field which I learned a lot from. I am
          currently still studying, in my final year. I live in the city of
          Magelang, Indonesia.
        </p>
      </div>
    </section>
  );
};

export default About;
