import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="section hero hero-bg" id="hero">
      <div className="hero-text">
        <p className="tag">React Developer</p>
        <h1>Hi, I am Tanmoy Pal.</h1>

        <div className="typewriter-line">
          <span className="subtitle-prefix">As an MCA postgraduate in IT, I</span>
          <span className="typewriter-text">
            <Typewriter
              options={{
                strings: [
                "love working with React and HTML, CSS & JS.",
                "build responsive web applications.",
                "am eager to learn new technologies."
                ],
                autoStart: true,
                loop: true,
                delay: 40,
                deleteSpeed: 30,
                pauseFor: 1500
              }}
            />
          </span>
        </div>

        <div className="hero-actions">
          <a href="#projects" className="btn primary">View Projects</a>
           <a href="/CV.pdf" className="btn primary1" download="Tanmoy-Pal-CV.pdf">Download CV</a>
        </div>
      </div>

      <div className="hero-card floating-card">
        <div className="photo">
          <img src="/pic.jpeg" alt="Tanmoy Pal" />
        </div>
        <p className="hero-location">Illambazar, Birbhum, West Bengal</p>
        <p className="hero-status">Available for job</p>
      </div>
    </section>
  );
};

export default Hero;
