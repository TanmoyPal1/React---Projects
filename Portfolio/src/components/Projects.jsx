const Projects = () => {
    const projects = [
        {
            title: "Portfolio Website",
            description: "Modern, responsive personal site built with React.",
            tech: [],
            code: "https://github.com/yourname/portfolio"
        },
        {
            title: "Ecommerce Product Recommendation System",
            description: "Developed a machine learning–based recommendation system to deliver personalized product suggestions.",
            tech: [],
            code: "https://github.com/TanmoyPal1/Plant-Disease-Prediction"
        },
        {
            title: "Plant Disease Prediction",
            description: "Developed a Plant Disease Prediction System using CNN, achieving automated and accurate disease detection from leaf images.",
            tech: [],
            code: "https://github.com/TanmoyPal1/ECOMMERCE-PRODUCT-RECOMMENDATION-SYSTEM"
        }
    ];
    return (
        <section id="projects" className="section">
            <h2>Projects</h2>
            <div className="grid">
            {projects.map((project) => (
                <article key={project.title} className="card">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <p className="tech">{project.tech.join(" . ")}</p>
                    <div className="card-links">
                        {project.link && (<a href={project.link} target="_blank" rel="noreferrer">Live</a>)}
                        {project.code && (<a href={project.code} target="_blank" rel="noreferrer">Code</a>)}
                    </div>
                </article>
            ))}
            </div>
        </section>
    );
};
export default Projects;