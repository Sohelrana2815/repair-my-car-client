import aboutImg from "../../../assets/images/about_us/person.jpg";
import aboutImg1 from "../../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="w-96 flex">
      <div>
        <img src={aboutImg} alt="" />
      </div>
      <div>
        <img src={aboutImg1} alt="" />
      </div>
    </div>
  );
};

export default About;
