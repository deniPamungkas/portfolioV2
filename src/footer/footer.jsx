import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full h-32 flex flex-col items-center px-5 gap-y-5 md:flex-row md:justify-between border-t-2 bottom-0 bg-white dark:bg-gray-800 dark:text-white">
      <ul className="justify-between w-auto flex h-10 items-center gap-x-5 font-bold">
        <Link to={"/"} className="h-full">
          <li className="h-full flex items-center">Home</li>
        </Link>
        <Link to={"/about"} className="h-full">
          <li className="h-full flex items-center">About</li>
        </Link>
        <Link to={"/blog"} className="h-full">
          <li className=" h-full flex items-center">Blog</li>
        </Link>
        <Link to={"/projects"} className="h-full">
          <li className=" h-full flex items-center">Projects</li>
        </Link>
      </ul>
      <p>© 2021 - 2023 Deni Pamungkas. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
