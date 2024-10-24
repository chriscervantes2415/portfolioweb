import Title from "./Title";
import { MdWork } from "react-icons/md";
import { SiReactivex, SiToptal, SiFreelancer, SiFiverr } from "react-icons/si";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Experiences" icon={<MdWork style={{ color: 'purple' }} />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ExperienceCard
          title="Kodego Bootcamp"
          subTitle="Full Stack Web Development (July - November 2023)"
          icon={<SiReactivex />}
        />
        
        <ExperienceCard
          title="Freelancer"
          subTitle="Royal Vogue Manila Website (January - June 2024)"
          icon={<SiFreelancer />}
        />

        
      </div>
    </div>
  );
};

export default Experience;
