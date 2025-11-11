import logo from './logo.svg';
import './App.css';
import { Link, Outlet, useLocation } from "react-router-dom"

function App() {

    let yr = new Date().getFullYear();
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

  return (
      <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
              <div className="container-fluid">
                  <Link className="navbar-brand" to="/">Web Tech Test {yr}</Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                      <div className="navbar-nav">
                          <Link className={`nav-link btn-outline-info ${isActive('/') ? 'btn-info' : ''}`} to="/">Home</Link>
                          <Link className={`nav-link btn-outline-info ${isActive('./TestQuestions/Q1') ? 'btn-info' : ''}`} to="./TestQuestions/Q1">React_Q1</Link>
                          <Link className={`nav-link btn-outline-info ${isActive('./TestQuestions/Q3') ? 'btn-info' : ''}`} to="./TestQuestions/Q3">React_Q3</Link>
                          <Link className={`nav-link btn-outline-info ${isActive('./TestQuestions/Q4') ? 'btn-info' : ''}`} to="./TestQuestions/Q4">React_Q4</Link>
                          <Link className={`nav-link btn-outline-info ${isActive('./TestQuestions/Q5') ? 'btn-info' : ''}`} to="./TestQuestions/Q5">React_Q5</Link>
                      </div>
                  </div>
              </div>
          </nav>
          <div className="bg-light border px-5 py-2">
              <Outlet />
          </div>
          <footer className="text-center">
              &copy; Web Tech - {yr}
          </footer>
      </div>
  );
}

export default App;
