import "../styles/Hero.css";
import webdeveloper from "../assets/images/webdeveloper.png";
// https://cdni.iconscout.com/illustration/premium/thumb/developer-doing-programming-opening-multi-working-tabs-on-the-desktop-2381447-1997255.png
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__intro">
          <h1 className="hero__intro__title">
            {" "}
            Hello, I am <strong>Albenis</strong>
          </h1>
          <p className="hero__intro__text">
            I'm a web developer with a passion for building beautiful,
            responsive websites, functional web apps and user interfaces.
          </p>
          <div className="hero__intro_buttons">
            <button className="hero__intro__btn">Contact Me</button>
            <button className="hero__intro__btn btn__outline">
              View My Work
            </button>
          </div>
        </div>
        <div className="hero__image">
          <img
            src={
              "https://cdni.iconscout.com/illustration/premium/thumb/programmer-working-on-computer-development-5214542-4357625.png"
            }
            alt="Web Developer"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
