import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaGithub } from "react-icons/fa";
import CVBuilderImage from "../assets/cv-builder.png";
import CoverLetter from "../assets/cover-letter.png";
import Home from "../assets/home.png";

const NavLink = ({ label, icon, route, currentPath }) => {
  return (
    <Link
      to={route}
      className={`text-gray-500 flex flex-col items-center gap-0.5 border-b-2 hover:text-gray-600 ${
        route === currentPath ? "border-blue-500 " : "border-transparent"
      }`}
    >
      {icon}
      <span className="text-xs hidden md:inline">{label}</span>
    </Link>
  );
};

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="bg-white text-gray-400 shadow-md top-0 left-0 w-full">
      <div className="mx-auto flex justify-between px-5 items-center">
        <div className="relative w-full md:w-1/2">
          <img src={logo} className="size-10" />
        </div>

        <nav className="flex items-center gap-5">
          <NavLink
            label="Home"
            icon={<img src={Home} className="size-6 md:size-5" />}
            route="/your-cv-builder/home"
            currentPath={pathname}
          />
          <NavLink
            label="CV Builder"
            icon={<img src={CVBuilderImage} className="size-6 md:size-5" />}
            route="/your-cv-builder/cv-builder"
            currentPath={pathname}
          />
          <NavLink
            label="Cover Letter"
            icon={<img src={CoverLetter} className="size-6 md:size-5" />}
            route="/your-cv-builder/cover-letter"
            currentPath={pathname}
          />
          <a
            href="https://github.com/Surendra6/your-cv-builder"
            target="_blank"
            rel="noopener noreferrer"
            className="flex bg-white border text-black hover:text-black font-bold size-12 p-3 my-1 rounded-full shadow-sm items-center justify-center"
          >
            <FaGithub size={30} />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
