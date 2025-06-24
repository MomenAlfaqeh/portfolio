export default function Hero() {
  return (
    <section id="home" className="d-flex align-items-center min-vh-100 bg-dark text-white text-center">
      <div className="container">
        <h1 className="display-4 fw-bold">Hi, I'm <span className="text-primary">Momen</span> 👋</h1>
        <p className="lead mb-4">
          A passionate Full Stack Developer who loves building elegant and efficient web applications.
        </p>
        <a href="#projects" className="btn btn-primary btn-lg shadow">View My Work</a>
      </div>
    </section>
  );
}
