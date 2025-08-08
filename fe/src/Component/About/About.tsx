export const About = () => {
  return (
    <>
      <div className="about-container d-flex flex-wrap mt-5 text-dark">
        <div className="col-md-7 p-4 mt-5">
          <h2 className="mb-4">About Us</h2>
          <p>
            <strong>Get Start Tec</strong> is a passionate startup specializing
            in full-cycle software development — from{" "}
            <strong>design to deployment</strong>. We turn bold ideas into
            powerful digital solutions, helping businesses launch fast, scale
            smart, and stay ahead.
            <br />
            <br />
            Driven by innovation and fueled by creativity, we offer end-to-end
            services tailored to your vision. Whether it’s a sleek website, a
            powerful web app, or a custom software solution — we build with
            purpose and precision.
            <br />
            <br />
            Let's turn your next big idea into reality.{" "}
            <strong>Get started with Get Start Tec.</strong>
          </p>
        </div>
        <div className="col-md-5 p-4 d-flex align-items-center">
          <img
            src="/images/about-us-3.png"
            alt="Get Start Tec"
            className="img-fluid w-100"
          />
        </div>
      </div>
      <div className="container my-3 pt-5">
       <div className="row text-center">
  <div className="col-md-4 mb-4">
    <div className="card-custom p-4 shadow rounded bg-light h-100">
      <div
        className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
        style={{
          width: "80px",
          height: "80px",
          background: "linear-gradient(135deg, #6a11cb, #2575fc)",
          color: "#fff",
          fontSize: "2rem",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
        }}
      >
        <i className="bi bi-eye-fill"></i>
      </div>
      <h3 className="fw-bold mb-3">Our Vision</h3>
      <p className="text-muted">
        To revolutionize innovation by transforming raw ideas into impactful
        technology solutions that improve everyday lives and empower
        businesses to thrive in a digital world.
      </p>
    </div>
  </div>

  <div className="col-md-4 mb-4">
    <div className="card-custom p-4 shadow rounded bg-light h-100">
      <div
        className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
        style={{
          width: "80px",
          height: "80px",
          background: "linear-gradient(135deg, #ff512f, #dd2476)",
          color: "#fff",
          fontSize: "2rem",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
        }}
      >
        <i className="bi bi-rocket-takeoff-fill"></i>
      </div>
      <h3 className="fw-bold mb-3">Our Mission</h3>
      <p className="text-muted">
        To provide cutting-edge, customized solutions that guide individuals
        and organizations from concept to completion through our commitment
        to excellence, collaboration, and forward-thinking design.
      </p>
    </div>
  </div>

  <div className="col-md-4 mb-4">
    <div className="card-custom p-4 shadow rounded bg-light h-100">
      <div
        className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
        style={{
          width: "80px",
          height: "80px",
          background: "linear-gradient(135deg, #11998e, #38ef7d)",
          color: "#fff",
          fontSize: "2rem",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
        }}
      >
        <i className="bi bi-award-fill"></i>
      </div>
      <h3 className="fw-bold mb-3">Value Ourself</h3>
      <p className="text-muted">
        At Get Start Tec, we believe in delivering more than just solutions —
        we create value that empowers your vision, drives innovation, and
        accelerates growth. Our commitment to collaboration and
        forward-thinking design ensures your success from concept to launch.
      </p>
    </div>
  </div>
</div>

       {/* Our Process */}


        <div className="about-container my-5 py-5">
          <div className="row align-items-center">
            {/* Image section */}
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src="/images/colabration.png"
                alt="Customer Collaboration"
                className="img-fluid rounded shadow-lg blend-img"
                style={{ objectFit: "cover", height: "450px" }}
              />
            </div>

            {/* Content section */}
            <div className="col-md-6">
              <h3 className="fw-bold mb-3 text-primary">
                Customer Collaboration
              </h3>
              <p className="text-muted mb-4">
                At Get Start Tec, we believe our clients are more than just
                stakeholders—they're co-creators. Through deep collaboration, we
                ensure every solution reflects your unique vision and evolves
                with your input.
              </p>

              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-3">
                  <span className="me-3 text-primary fs-4">
                    <i className="bi bi-chat-dots-fill master-color"></i>
                  </span>
                  <div>
                    <h6 className="fw-semibold mb-1">
                      Continuous Communication
                    </h6>
                    <p className="text-muted small mb-0">
                      Frequent syncs, updates, and feedback sessions keep
                      everyone aligned.
                    </p>
                  </div>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <span className="me-3 text-primary fs-4">
                    <i className="bi-hand-thumbs-up-fill master-color"></i>
                  </span>
                  <div>
                    <h6 className="fw-semibold mb-1">
                      Transparent Partnership
                    </h6>
                    <p className="text-muted small mb-0">
                      We work *with* you, not *for* you. Your voice matters at
                      every step.
                    </p>
                  </div>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <span className="me-3 text-primary fs-4">
                    <i className="bi bi-lightbulb-fill master-color"></i>
                  </span>
                  <div>
                    <h6 className="fw-semibold mb-1">Co-Innovation</h6>
                    <p className="text-muted small mb-0">
                      We refine and shape solutions together, leveraging both
                      your ideas and our expertise.
                    </p>
                  </div>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <span className="me-3 text-primary fs-4">
                    <i className="bi bi-people-fill master-color"></i>
                  </span>
                  <div>
                    <h6 className="fw-semibold mb-1">Team Collaboration</h6>
                    <p className="text-muted small mb-0">
                      Our team works seamlessly with yours, combining strengths
                      to achieve the best results.
                    </p>
                  </div>
                </li>
                <li className="d-flex align-items-start">
                  <span className="me-3 text-primary fs-4">
                    <i className="bi bi-gear-fill master-color"></i>
                  </span>
                  <div>
                    <h6 className="fw-semibold mb-1">Agile Process</h6>
                    <p className="text-muted small mb-0">
                      We follow an agile methodology, adapting to changes and
                      ensuring quick delivery.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container my-5 py-5">
  <h3 className="text-center fw-bold mb-5 text-primary">
    Our Process
  </h3>

  <div className="row justify-content-center position-relative">
    {[
      {
        icon: "bi-search", // magnifying glass
        title: "Discover Needs",
        description:
          "We start by understanding your vision and goals. Through collaborative sessions, we uncover the core problem and ensure alignment with your business needs.",
        color: "linear-gradient(135deg, #6a11cb, #2575fc)",
      },
      {
        icon: "bi-diagram-3-fill", // diagram icon
        title: "Analyze & Align",
        description:
          "Once the requirements are clear, we analyze dependencies, collect essential documents, and align our approach with your expectations.",
        color: "linear-gradient(135deg, #ff512f, #dd2476)",
      },
      {
        icon: "bi-heart-fill", // empathy/heart icon
        title: "Build with Empathy",
        description:
          "We bring your vision to life with user-centric solutions, keeping usability, requirements, performance, and reliability in mind.",
        color: "linear-gradient(135deg, #11998e, #38ef7d)",
      },
      {
        icon: "bi-rocket-takeoff-fill", // rocket launch icon
        title: "Launch & Deliver",
        description:
          "After rigorous testing, we deploy the solution smoothly, ensuring success and providing post-launch support if needed.",
        color: "linear-gradient(135deg, #fc4a1a, #f7b733)",
      },
    ].map((step, index, arr) => (
      <div
        key={index}
        className="col-md-2 text-center position-relative"
        style={{ minWidth: "250px" }}
      >
        {/* Connector Line */}
        {index < arr.length - 1 && (
          <div
            className="connector d-none d-md-block"
            style={{
              position: "absolute",
              top: "45px",
              right: "-50%",
              width: "100%",
              height: "4px",
              background: "#ddd",
              zIndex: 0,
            }}
          ></div>
        )}

        {/* Step Card */}
        <div
          className="p-3 rounded shadow bg-white h-100"
          style={{
            position: "relative",
            zIndex: 1,
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateY(-10px)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateY(0px)")
          }
        >
          <div
            className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
            style={{
              width: "70px",
              height: "70px",
              background: step.color,
              color: "#fff",
              fontSize: "1.5rem",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}
          >
            <i className={`bi ${step.icon}`}></i>
          </div>
          <h6 className="fw-bold">{step.title}</h6>
          <p className="text-muted small">{step.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>


        <div className="container my-5 py-5">
          <h3 className="text-center fw-bold mb-5 text-primary">
            Project Timeline & Milestones
          </h3>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="timeline">
                {/* Timeline Item 1: Discover Needs */}
                <div className="timeline-item">
                  <div className="timeline-icon bg-primary">
                    <i className="bi bi-lightbulb"></i>
                  </div>
                  <div className="timeline-content">
                    <h5 className="fw-bold">Discover Needs</h5>
                    <p className="text-muted">
                      Initial phase where we identify and document the client's
                      requirements.
                    </p>
                    <span className="text-muted small">Duration: 4 Days</span>
                    <div className="progress" style={{ height: "10px" }}>
                      <div
                        className="progress-bar bg-primary"
                        style={{ width: "15%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Timeline Item 2: Analyze & Align */}
                <div className="timeline-item">
                  <div className="timeline-icon bg-secondary">
                    <i className="bi bi-search"></i>
                  </div>
                  <div className="timeline-content">
                    <h5 className="fw-bold">Analyze & Align</h5>
                    <p className="text-muted">
                      In this phase, we analyze the requirements and align the
                      project with the client's business goals.
                    </p>
                    <span className="text-muted small">Duration: 3 Days</span>
                    <div className="progress" style={{ height: "10px" }}>
                      <div
                        className="progress-bar bg-secondary"
                        style={{ width: "25%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Timeline Item 3: Build with Empathy */}
                <div className="timeline-item">
                  <div className="timeline-icon bg-success">
                    <i className="bi bi-code-slash"></i>
                  </div>
                  <div className="timeline-content">
                    <h5 className="fw-bold">Build with Empathy</h5>
                    <p className="text-muted">
                      Our development team builds the solution with the end-user
                      experience in mind.
                    </p>
                    <span className="text-muted small">Duration:2 Weeks </span>
                    <div className="progress" style={{ height: "10px" }}>
                      <div
                        className="progress-bar bg-success"
                        style={{ width: "40%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Timeline Item 4: Launch & Deliver */}
                <div className="timeline-item">
                  <div className="timeline-icon bg-warning">
                    <i className="bi bi-box-arrow-up-right"></i>
                  </div>
                  <div className="timeline-content">
                    <h5 className="fw-bold">Launch & Deliver</h5>
                    <p className="text-muted">
                      We deploy the product to the client and ensure everything
                      is set up and functioning smoothly.
                    </p>
                    <span className="text-muted small">Duration: 2 Days</span>
                    <div className="progress" style={{ height: "10px" }}>
                      <div
                        className="progress-bar bg-warning"
                        style={{ width: "15%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Timeline Item 5: Post-Launch Monitoring */}
                <div className="timeline-item">
                  <div className="timeline-icon bg-danger">
                    <i className="bi bi-bar-chart-line"></i>
                  </div>
                  <div className="timeline-content">
                    <h5 className="fw-bold">Post-Launch Monitoring</h5>
                    <p className="text-muted">
                      After launch, we continue monitoring the solution for
                      performance and gather user feedback for future
                      iterations.
                    </p>
                    <span className="text-muted small">Duration: Ongoing</span>
                    <div className="progress" style={{ height: "10px" }}>
                      <div
                        className="progress-bar bg-danger"
                        style={{ width: "5%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* How Our Team Works */}
      <div className="container">
        <h3 className="text-center fw-bold text-primary">How Our Team Works</h3>

        <div className="position-relative" style={{ minHeight: "300px",marginTop:"90px" }}>
          

          <div className="row justify-content-center position-relative z-1">
            {[
      {
        icon: "bi-ear",
        title: "We Listen First",
        description:
          "Understanding your vision, goals, and challenges is our first priority before we take action.",
        color: "linear-gradient(135deg, #6a11cb, #2575fc)",
      },
      {
        icon: "bi-map-fill",
        title: "We Plan with Purpose",
        description:
          "We create a clear roadmap with milestones, ensuring alignment and transparency.",
        color: "linear-gradient(135deg, #ff512f, #dd2476)",
      },
      {
        icon: "bi-people-fill",
        title: "We Work as One",
        description:
          "Designers, developers, and strategists collaborate as a unified force to deliver faster.",
        color: "linear-gradient(135deg, #11998e, #38ef7d)",
      },
      {
        icon: "bi-chat-dots-fill",
        title: "We Keep You Involved",
        description:
          "Regular updates, feedback sessions, and demos keep you in the loop at every stage.",
        color: "linear-gradient(135deg, #fc4a1a, #f7b733)",
      },
      {
        icon: "bi-trophy-fill",
        title: "We Deliver & Beyond",
        description:
          "Exceeding expectations and providing ongoing support to ensure long-term success.",
        color: "linear-gradient(135deg, #ee0979, #ff6a00)",
      }].map((step, index) => (
              <div
                key={index}
                className="col-md-2 text-center position-relative mb-5"
                style={{
                  transform: index % 2 === 0 ? "translateY(-50px)" : "translateY(50px)",
                }}
              >
                {/* Icon Circle */}
                <div
            className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
            style={{
              width: "70px",
              height: "70px",
              background: step.color,
              color: "#fff",
              fontSize: "1.5rem",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}
          
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "scale(1.1)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 20px rgba(0,0,0,0.2)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <i className={`bi ${step.icon}`}></i>
                </div>

                {/* Title & Description */}
                <h6 className="fw-bold">{step.title}</h6>
                <p className="text-muted small">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>



    </>
  );
};
