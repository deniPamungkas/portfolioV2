const About = () => {
  return (
    <section className="h-full px-5 md:flex md:flex-row-reverse md:justify-end m-auto md:gap-x-10 pb-52 pt-20 xl:w-3/4">
      <img
        src="fotoku.jpg"
        alt=""
        className="w-40 h-40 rounded-full object-cover object-bottom mb-7"
      />
      <div className="md:w-2/3 dark:text-white">
        <h1 className="text-3xl font-bold md:text-5xl mb-7 md:mb-10">
          I’m Deni Pamungkas, an Indonesian 🇮🇩 Developer.
        </h1>
        <p>
          Hello! I am Zain. You might know me from my talks at conferences or my
          contributions at WargaBantuWarga and KawalCOVID19 . I currently work
          as a Senior Software Engineer 2 at Ninja Van, previously venturing at
          Xtremax and Bukalapak. I live in Singapore 🇸🇬 with my Indonesian 🇮🇩
          wife 👰🏻 and three kids 👧🏻👦🏻👶🏻. To channel my enthusiasm for React,
          JavaScript, & frontend development in general, I co-organize a ReactJS
          and a Frontend Developer community in Indonesia. I love sharing my
          learning journey to the community by giving a few talks and writing
          some articles in Bahasa Indonesia at Pejuang Kode Medium publication
          to help my fellow Indonesian developers learn. Other than that, I also
          gathered a community of Indonesian learners around me in a Discord
          Server. If you have any question for me, join us at my Pejuang Kode
          Discord Server and raise your questions over there! We would love to
          keep in touch with you. 😉
        </p>
      </div>
    </section>
  );
};

export default About;
