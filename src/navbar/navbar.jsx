import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PersonIcon from "@mui/icons-material/Person";
import BookIcon from "@mui/icons-material/Book";
import GridViewIcon from "@mui/icons-material/GridView";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import "./navbar.scss";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [dark, setDark] = useState(
    JSON.parse(window.localStorage.getItem("dark")) || false
  );
  window.localStorage.setItem("dark", dark);
  const html = document.querySelector(".html");
  const changeTheme = () => {
    if (dark == true) {
      return html.classList.add("dark");
    }
    if (dark == false) {
      return html.classList.remove("dark");
    }
  };
  changeTheme();
  const handleMode = () => {
    if (dark) {
      return setDark(false);
    } else {
      return setDark(true);
    }
  };
  return (
    <nav className="w-full flex justify-between items-center py-5 px-5 m-auto lg:w-3/4 dark:bg-gray-800 dark:text-white">
      <ul className="boxShadow justify-between w-72 hidden md:flex h-10 items-center rounded-full px-5 bg-slate-200 dark:bg-gray-700">
        <Link to={"/"} className="h-full">
          <li className=" h-full flex items-center">Home</li>
        </Link>
        <Link to={"/about"} className="h-full">
          <li className=" h-full flex items-center">About</li>
        </Link>
        <Link to={"/blog"} className="h-full">
          <li className=" h-full flex items-center">Blog</li>
        </Link>
        <Link to={"/projects"} className="h-full">
          <li className=" h-full flex items-center">Projects</li>
        </Link>
      </ul>
      <div className="right gap-x-7 flex md:hidden">
        <button
          onClick={handleClick}
          className="boxShadow flex gap-x-1 items-center justify-center rounded-full w-auto h-10 px-4 bg-slate-200 dark:bg-gray-700"
        >
          Menu <KeyboardArrowDownIcon fontSize="small" />
        </button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} divider={true}>
            <Link to={"/"} className="w-full h-full flex gap-x-2">
              <PersonIcon fontSize="small" />
              Home
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose} divider={true}>
            <Link to={"/about"} className="w-full h-full flex gap-x-2">
              <PersonIcon fontSize="small" />
              About
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose} divider={true}>
            <Link to={"/blog"} className="w-full h-full flex gap-x-2">
              <BookIcon fontSize="small" />
              Blog
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to={"/projects"} className="w-full h-full flex gap-x-2">
              <GridViewIcon fontSize="small" />
              Projects
            </Link>
          </MenuItem>
        </Menu>
        <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-gray-700 flex justify-start items-center relative overflow-hidden">
          <div
            className={`${
              dark ? "changeMode" : ""
            } nightMode absolute flex w-20 h-full items-center justify-around`}
            onClick={handleMode}
          >
            <DarkModeIcon fontSize="small" style={{ color: "black" }} />
            <WbSunnyIcon fontSize="small" style={{ color: "orange" }} />
          </div>
        </div>
      </div>
      <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-gray-700 hidden justify-start items-center md:flex relative overflow-hidden">
        <div
          className={`${
            dark ? "changeMode" : ""
          } nightMode absolute flex w-20 h-full items-center justify-around`}
          onClick={handleMode}
        >
          <DarkModeIcon fontSize="small" style={{ color: "black" }} />
          <WbSunnyIcon fontSize="small" style={{ color: "orange" }} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
