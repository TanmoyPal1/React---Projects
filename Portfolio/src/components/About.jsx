const About = () => {
    return (
        <section id="about" className="section">
            <h2>About Me</h2>
            <p>
                As an MCA postgraduate in IT industry, I bring a solid educational background and a strong passion for technology. I hold a Bachelor of Computer Applications (BCA) and a Master of Computer Applications (MCA) from Dr. B.C. Roy Engineering College. I am skilled in HTML, CSS, JavaScript, and programming languages such as Python and C, with hands-on experience in PHP and MySQL. I am a quick learner, eager to apply my theoretical knowledge to real-world projects and challenges. My enthusiasm for continuous learning and adapting to new technologies keeps me updated with the latest trends in web development and software practices. I am committed to contributing effectively to team goals while growing as a professional in the IT domain.
            </p>
             <div className="about-content">
        <article className="about-article">
          <img src="/man.png" alt="User icon" />
          <p>FULL NAME</p>
          <h3>Tanmoy Pal</h3>
        </article>

        <article className="about-article">
          <img src="/email.png" alt="Email icon" />
          <p>EMAIL</p>
          <h3>tpal43961@gmail.com</h3>
        </article>

        <article className="about-article">
          <img src="/telephone-call.png" alt="Phone icon" />
          <p>PHONE</p>
          <h3>+91 6295315451</h3>
        </article>
      </div>
        </section>
    )
}
export default About;