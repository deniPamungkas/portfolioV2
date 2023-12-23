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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui itaque
          neque quam, libero nesciunt beatae nostrum illum hic quos veniam
          repellat obcaecati minus eius quod inventore modi fugit temporibus
          nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. A
          aliquam necessitatibus ea ipsam earum modi esse cupiditate animi nemo
          aut. Nostrum asperiores qui architecto quasi possimus, mollitia rem
          eveniet amet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Excepturi tempora blanditiis totam officia at distinctio natus
          perferendis eveniet atque repellendus id quisquam, magnam eaque
          officiis soluta nisi ab, tenetur optio? Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Rem enim sunt nobis incidunt autem
          ratione distinctio voluptas, eos a cumque deserunt officia animi dolor
          repudiandae nam neque est aspernatur accusamus?
        </p>
      </div>
    </section>
  );
};

export default About;
