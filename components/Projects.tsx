import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import ustweb from "../public/img/projects/ustwebss.png";
import royalvogue from "../public/img/projects/royalvogue.png";
import royalvogueadmin from "../public/img/projects/rvm-admin.png";
import dynamicPortfolio from "../public/img/projects/port.png";
import laptophaven from "../public/img/projects/laptophaven.png";
import dashboard from "../public/img/projects/dashboard.webp";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Projects" icon={<FaProjectDiagram style={{ color: 'purple' }} />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <ProjectCard
          img={ustweb.src}
          title="UST-Legazpi demo website"
          link="https://chriscervantes2415.github.io/demo-ust/index-three.html"
        />
        <ProjectCard
          img={royalvogue.src}
          title="Royal Vogue Manila"
          link="https://royalvoguemanila.com/"
        />
        <ProjectCard
          img={royalvogueadmin.src}
          title="Royal Vogue Admin Page"
          link="https://blog.reactbd.com/"
        />
        <ProjectCard
          img={dynamicPortfolio.src}
          title="Portfolio Website"
          link="https://portfolio-christian-cervantes.netlify.app/"
        />
        <ProjectCard
          img={laptophaven.src}
          title="Laptop Haven"
          link="https://chriscervantes2415.github.io/MP2_WD76_Cervantes/"
        />
      </div>
    </div>
  );
};

export default Projects;
