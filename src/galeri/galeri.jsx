const Galeri = () => {
  const data = [
    { id: 1, img: "/furniro1.png" },
    { id: 2, img: "/furniro2.png" },
    { id: 3, img: "/socmed.png" },
    { id: 4, img: "/calc1.png" },
    { id: 5, img: "/calc2.png" },
    { id: 6, img: "/weather.png" },
    { id: 7, img: "/hounter2.png" },
    { id: 8, img: "/hounter3.png" },
    9,
    10,
  ];
  return (
    <section className="galeri flex gap-x-4 overflow-scroll absolute w-full left-0 px-5">
      {data.map((item) => {
        return (
          <div
            key={item.id}
            className="w-52 h-52 rounded-lg shrink-0 bg-red-400 overflow-hidden"
          >
            <img
              src={`images/${item.img}`}
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
        );
      })}
    </section>
  );
};

export default Galeri;
