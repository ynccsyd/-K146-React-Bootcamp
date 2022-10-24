import "./about.css";
import { TitleComponent } from "../../components/index";
import aboutImg from "../../image/stars.jpg";

const About = () => {
  return (
    <div className="about-parent">
      <TitleComponent secondary="Who am i?" primary="My Story" />
      <div className="about">
        <div className="about-left">
          <div className="about-card">
            <img className="about-img" src={aboutImg} alt="About Image" />
          </div>
        </div>
        <div className="about-right">
          <p className="about-subtitle">
            Professional software engineer with over 4 years of Experience
          </p>
          <p className="about-description">
            I'm baby jianbing woke praxis, succulents organic shabby chic vice
            four loko health goth freegan 3 wolf moon kinfolk. Jianbing
            literally forage yes plz actually +1 retro hammock hoodie vinyl
            everyday carry poutine umami. Paleo hell of 90's leggings keytar
            twee post-ironic irony. Raclette meh butcher, skateboard you
            probably haven't heard of them stumptown pork belly readymade YOLO
            distillery 3 wolf moon. Taiyaki +1 gochujang edison bulb, bespoke
            cray cliche. Pug meggings church-key venmo prism. Prism celiac
            hashtag 3 wolf moon, jean shorts trust fund farm-to-table
            post-ironic sartorial vaporware blog adaptogen pok pok meggings
            quinoa.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
