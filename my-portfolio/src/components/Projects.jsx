export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal website to showcase my work and skills.",
      link: "#",
    },
    {
      title: "E-commerce App",
      description: "Full-stack online store with shopping cart and payments.",
      link: "#",
    },
    {
      title: "Chat App",
      description: "Real-time messaging app with WebSocket.",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-5 bg-light text-dark">
      <div className="container">
        <h2 className="text-center text-primary fw-bold mb-5">Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4">
              <div className="card shadow h-100">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text flex-grow-1">{project.description}</p>
                  <a href={project.link} className="btn btn-outline-primary mt-3">View Project</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
