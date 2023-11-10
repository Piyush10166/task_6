import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-scrolled fixed-top bg-body-tertiary bg-dark navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <h3>Piyush Pankaj</h3>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link" href="#about">
                About
              </a>
              <a className="nav-link" href="#services">
                Services
              </a>
              <a
                className="nav-link active"
                href="https://www.linkedin.com/posts/piyush-pankaj-10a45b234_goalresumepiyushpankaj-activity-7081229023405613056-Sq5j?utm_source=share&utm_medium=member_desktop"
              >
                Resume
              </a>
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
      <section
        id="home"
        class="text-center d-flex align-items-center min-vh-100"
      >
        <div class="row">
          <div class="col-md-8">
            <h1 class="display-1 fw-bold">
              Hello there! I am
              <br />
              <span class="text-brand">Piyush Pankaj.</span>
            </h1>
            <h4 class="mt-3 mb-5">
              ML enthusiast and backend developer from Bihar, India.
            </h4>
            <a href="contact" class="btn btn-brand">
              Get Connected
            </a>
          </div>
          <div class="col-md-4 d-flex justify-content-center">
            <img
              src="./profileimg.jpg"
              class="rounded-circle float-end"
              alt="profile image"
            />
          </div>
        </div>
      </section>
      {/* <!-- About --> */}
      <section id="about" class="full-height px-md-5 spacing">
        <div class="container">
          <div class="row pb-4">
            <div class="col-md-8">
              <h6 class="text-brand">ABOUT</h6>
              <h1 class="heading">My Education And Experience.</h1>
            </div>
          </div>
          <div class="row">
            <div class="col-md">
              <div class="service p-4 bg-base rounded-6 shadow-effect">
                <p>
                  I am an CSE student.
                  I am Piyush Pankaj 3rd year btech student of VIT, Bhopal. I am
                  a geek and curious human besides being an OpenSource
                  enthusiast. I did my Intermediate from Ambe School,
                  Vadodara, Guajarat. I am a keen learner. 
                  I have participated in coding coemption(SIH). I’m a hardworking
                  and optimistic person. I'm very curious and I love learning
                  new things. I'm good at team work and believe in healthy
                  competition
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services" class="full-height px-md-5 spacing">
        <div class="container">
          <div class="row pb-4">
            <div class="col-md-8">
              <h6 class="text-brand">SERVICES</h6>
              <h1 class="heading">Services That I Provide.</h1>
            </div>
          </div>
          <div class="row m-0">
            <div class="col-md-4">
              <div class="service p-4 bg-base rounded-6 shadow-effect">
                <div class="iconbox rounded-4">
                  <i class="las la-thumbtack"></i>
                </div>
                <h4>Frontend developement</h4>
                <p>
                  Frontend developer with two years of experience working with
                  HTML, CSS to deliver exceptional customer experiences.
                </p>
                <a href="#" class="link-custom">
                  Read more
                </a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="service p-4 bg-base rounded-6 shadow-effect">
                <div class="iconbox rounded-4">
                  <i class="las la-thumbtack"></i>
                </div>
                <h4>Backend developement</h4>
                <p>
                  Backend developer with one years of experience working with
                  PHP, MYSQL to deliver exceptional customer experiences.
                </p>
                <a href="#" class="link-custom">
                  Read more
                </a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="service p-4 bg-base rounded-6 shadow-effect">
                <div class="iconbox rounded-4">
                  <i class="las la-thumbtack"></i>
                </div>
                <h4>Machine Learning</h4>
                <p>
                  I, design and create the AI algorithms capable of learning and
                  making predictions that define machine learning (ML).
                </p>
                <a href="#" class="link-custom">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />

      <section id="contact" class="full-height px-md-5">
        <div class="container">
          <div class="row justify-content-center text-center">
            <div class="col-md-8 pb-4" data-aos="fade-up">
              <h6 class="text-brand">CONTACT</h6>
              <h1 class="heading">
                Interested in working together? Let's talk
              </h1>
            </div>

            <div class="col-md-8" data-aos="fade-up" data-aos-delay="300">
              <form action="#" class="row g-md-3 gy-3">
                <div class="form-group col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter your name"
                  />
                </div>
                <div class="form-group col-md-6">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Enter your email"
                  />
                </div>
                <div class="form-group col-12">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter subject"
                  />
                </div>
                <div class="form-group col-12">
                  <textarea
                    name=""
                    rows="4"
                    class="form-control"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <div class="form-group col-12 d-grid">
                  <button type="submit" class="btn btn-brand">
                    Contact me
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer class="py-5 px-md-5">
        <div class="container">
          <div class="row gy-4 justify-content-between">
            <div class="col-auto">
              <p class="mb-0">
                Designed by{" "}
                <a href="#" class="footer">
                  Piyush
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
