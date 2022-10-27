import Project from "./Project";
import projectShopee from "../../assets/project-shopee.png";
import projectTask from "../../assets/project-task.png";
import projectMusic from "../../assets/project-music.png";
import { AiFillHtml5 } from "react-icons/ai";
import { DiSass, DiReact } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";

function Projects() {
  return (
    <section id="projects" className="container mt-48 ">
      <h2 className="heading ">Projects</h2>
      <div className="flex flex-wrap mt-8">
        <Project
          href="https://tientran2001.github.io/Shoppe/"
          srcImg={projectShopee}
          name="Shoppe clone ui"
          tag={[
            {
              language: "HTML",
              icon: <AiFillHtml5 />,
            },
            {
              language: "Scss",
              icon: <DiSass />,
            },
            {
              language: "JavaScript",
              icon: <IoLogoJavascript />,
            },
          ]}
        />
        <Project
          href="https://slept-task-knb7u8g09-tientran2001.vercel.app/"
          srcImg={projectTask}
          name="Task manager"
          tag={[
            {
              language: "ReactJs",
              icon: <DiReact />,
            },
          ]}
        />
        <Project
          href="https://tientran2001.github.io/music-app/"
          srcImg={projectMusic}
          name="Music app"
          tag={[
            {
              language: "HTML",
              icon: <AiFillHtml5 />,
            },
            {
              language: "Scss",
              icon: <DiSass />,
            },
            {
              language: "JavaScript",
              icon: <IoLogoJavascript />,
            },
          ]}
        />
      </div>
      <a
        href="https://github.com/TienTran2001"
        target="_blank"
        className="block  text-center mt-14 text-2xl font-semibold md:hover:text-blue-400 transition-all"
      >
        See more in my github
      </a>
    </section>
  );
}

export default Projects;
