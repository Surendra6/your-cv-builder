import { MdMusicVideo } from "react-icons/md";
import { BiSolidMessageEdit } from "react-icons/bi";
import { IoMdImages } from "react-icons/io";

const Card = ({ title, description, techStack, link }) => {
  return (
    <article className="rounded-xl bg-teal-200 flex flex-col gap-4 p-4 shadow-sm hover:scale-105">
      <div className="flex items-start gap-4">
        {title === "Multimedia" && <MdMusicVideo size={70} />}
        {title === "Blog Posts" && <BiSolidMessageEdit size={70} />}
        {title === "Identify Image" && <IoMdImages size={70} />}

        <div>
          <h3 className="text-lg font-medium sm:text-xl">
            <a href={link} className="hover:underline" target="_blank">
              {title}
            </a>
          </h3>
          <h2 className="font-semibold mt-2 mb-2 text-sm">Tech Stack</h2>

          <div className="flex flex-row gap-2 flex-wrap">
            {techStack.split(",").map((tech) => (
              <span
                key={tech}
                className="rounded border border-cyan-500 bg-teal-100 px-2.5 py-1 text-xs text-grey-700 font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-1 text-sm text-gray-700 px-2">{description}</p>
    </article>
  );
};

export default Card;
