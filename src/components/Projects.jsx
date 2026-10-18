import project from "./data/projects.json";

const Projects = () => {
  return (
    <section className="container projects mt-5 mb-3" id="projects">
      <h2 className="section_title h1">PROJECTS</h2>
      <div className="row g-4 justify-content-center mt-3">
        {project.map((data) => (
          <div
            key={data.key}
            className="col-12 col-sm-6 col-xl-3 d-flex justify-content-center"
          >
            <article
              className="card bg-dark text-light d-flex flex-column h-100 project-card"
              data-aos="flip-right"
              data-aos-duration="1000"
            >
              <div className="img d-flex justify-content-center align-content-center p-3">
                <img
                  src={data.imageSrc}
                  className="card-img-top"
                  alt={data.title}
                  loading="lazy"
                />
              </div>
              <div className="card-body text-center d-flex flex-column">
                <h3 className="card-title h4">{data.title}</h3>
                <p className="card-text flex-grow-1">{data.description}</p>
                <a
                  href={data.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mx-3 mt-auto"
                  aria-label={`${data.title} demo (opens in a new tab)`}
                >
                  Demo
                </a>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
