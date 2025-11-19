import { SectionAbout1 } from "@/section/aboutUS/sectionAbout1";
import { SectionAbout2 } from "@/section/aboutUS/sectionAbout2";
import { SectionAbout3 } from "@/section/aboutUS/sectionAbout3";
import { SectionAbout4 } from "@/section/aboutUS/sectionAbout4";

const About = () => {
  return (
    <>
      <div>
        <SectionAbout1 />
      </div>

      <div className="mt-20">
        <SectionAbout2 />
      </div>

      
      <div className="mt-8">
        <SectionAbout3 />
      </div>

      <div>
        <SectionAbout4 />
      </div>
    </>
  );
};

export default About;
