import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo-2.jpg";
import { FaGithub } from "react-icons/fa";
import { BiSolidHome } from "react-icons/bi";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { PiReadCvLogoFill } from "react-icons/pi";

const NavLink = ({ label, icon, route, currentPath }) => {
  return (
    <Link
      to={route}
      className={`text-gray-500 flex flex-col items-center gap-0.5 border-b-2 px-2 pb-1 md:pb-0.5 hover:text-gray-600 ${
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
    <header className="bg-white text-gray-400 shadow-md w-full py-0.5 md:py-1">
      <div className="mx-auto flex justify-between px-5 items-center">
        <div className="flex items-center gap-2">
          <img src={logo} className="h-8 md:h-10 " />
          <h1 className="text-4xl font-bold text-gray-700 hidden md:inline">
            Your CV Builder
          </h1>

          {/* <div className="flex items-center">
          <div className="flex items-center">
            <span className="text-red-600 text-3xl md:text-5xl font-semibold">
              Y
            </span>
            <div className="flex flex-col">
              <span
                style={{ lineHeight: 1 }}
                className="text-green-500 leading-none text-sm md:text-xl font-semibold "
              >
                CV
              </span>
              <span
                style={{ lineHeight: 1 }}
                className="text-gray-600 leading-none text-sm md:text-xl font-semibold "
              >
                our
              </span>
            </div>
          </div>
          <span className="text-blue-400 text-3xl md:text-5xl font-semibold">
            Builder
          </span>
        </div> */}
        </div>

        <nav className="flex items-center gap-3 md:gap-5">
          <NavLink
            label="Home"
            icon={<BiSolidHome className="size-6 md:size-6" />}
            route="/your-cv-builder"
            currentPath={pathname}
          />
          <NavLink
            label="CV Builder"
            icon={<PiReadCvLogoFill className="size-6 md:size-6" />}
            route="/your-cv-builder/cv-builder"
            currentPath={pathname}
          />
          <NavLink
            label="Cover Letter"
            icon={<FaEnvelopeOpenText className="size-6 md:size-6" />}
            route="/your-cv-builder/cover-letter"
            currentPath={pathname}
          />
          <a
            href="https://github.com/Surendra6/your-cv-builder"
            target="_blank"
            rel="noopener noreferrer"
            className="flex bg-white border text-black hover:text-black font-bold size-10 md:size-12 p-2 md:p-3 rounded-full shadow-sm items-center justify-center"
          >
            <FaGithub size={30} />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
