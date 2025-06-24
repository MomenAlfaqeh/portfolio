export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4 text-center mt-auto">
      <div className="container">
        <p className="mb-1">&copy; {new Date().getFullYear()} Momen Alfaqeh. All rights reserved.</p>
        <p className="mb-0">
          Built with <span className="fw-bold text-info">React</span> &amp;{" "}
          <span className="fw-bold text-info">Bootstrap</span>
        </p>
      </div>
    </footer>
  );
}
