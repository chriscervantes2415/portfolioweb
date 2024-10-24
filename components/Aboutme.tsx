import { SiInformatica } from "react-icons/si";
import Title from "./Title";

const Aboutme = () => {
  return (
    <div className="wrapper">
      <Title text="About Me" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
          I am a web developer for more than a year using React and other . I
          possess a solid background in both front-end and back-end development,
          and I am proficient in in utilizing React and other technologies to create responsive and
          user-friendly web applications . I&#39;ve worked on a range of projects in
          the past, consisting of creating and managing
          single-page/multi-page apps or websites integrating with REST APIs,
          and implementing responsive design principles. I am also proficient in
          using tools such as Webpack, npm, and Git for development and
          deployment. In addition to my technical skills, I am a strong
          communicator and team player. I am able to work effectively with
          cross-functional teams and am comfortable taking on new challenges and
          learning new technologies as needed.
        </p>
        <p>
          I am always looking to improve my skills and stay up-to-date with the
          latest best practices in web development. I am excited to continue
          growing as a developer and making meaningful contributions to projects
          and teams.
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
