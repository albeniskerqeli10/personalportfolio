import styles from  "../styles/Hero.module.css";
const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <div className={styles.hero__intro}>
          <h1 className={styles.hero__intro__title}>
            {" "}
            Hello, I am <strong>Albenis</strong>
          </h1>
          <p className={styles.hero__intro__text}>
            I'm a web developer with a passion for building beautiful,
            responsive websites, functional web apps and user interfaces.
          </p>
          <div className={styles.hero__intro_buttons}>
            <button className={styles.hero__intro__btn}>Contact Me</button>
            <a href="#projects" className={`${styles.hero__intro__btn} ${styles.btn__outline}`}>
              View My Work
            </a>
          </div>
        </div>
        <div className={styles.hero__image}>
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
