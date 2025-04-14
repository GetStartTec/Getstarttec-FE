export const About = () => {
    return (
        <>
            <div className="about-container d-flex flex-wrap mt-5 text-dark">
                <div className="col-md-7 p-4 mt-5">
                    <h2 className="mb-4">About Us</h2>
                    <p>
                        <strong>Get Start Tec</strong> is a passionate startup specializing in full-cycle software development — from <strong>design to deployment</strong>. We turn bold ideas into powerful digital solutions, helping businesses launch fast, scale smart, and stay ahead.
                        <br /><br />
                        Driven by innovation and fueled by creativity, we offer end-to-end services tailored to your vision. Whether it’s a sleek website, a powerful web app, or a custom software solution — we build with purpose and precision.
                        <br /><br />
                        Let's turn your next big idea into reality. <strong>Get started with Get Start Tec.</strong>
                    </p>
                </div>
                <div className="col-md-5 p-4 d-flex align-items-center">
                    <img
                        src="https://via.placeholder.com/500x400"
                        alt="Get Start Tec"
                        className="img-fluid w-100"
                    />
                </div>
            </div>
            <div className="container my-3 pt-5">
                <div className="row text-center">
                    <div className="col-md-6 mb-4">
                        <div className="p-4 shadow rounded bg-light h-100">
                            <h3 className="fw-bold mb-3">Our Vision</h3>
                            <p className="text-muted">
                                To revolutionize innovation by transforming raw ideas into impactful technology solutions that improve everyday lives and empower businesses to thrive in a digital world.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="p-4 shadow rounded bg-light h-100">
                            <h3 className="fw-bold mb-3">Our Mission</h3>
                            <p className="text-muted">
                                To provide cutting-edge, customized solutions that guide individuals and organizations from concept to completion through our commitment to excellence, collaboration, and forward-thinking design.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-5 position-relative">
                    <h3 className="text-center fw-bold mb-5">Our Process</h3>
                    <div className="row justify-content-center position-relative">

                        {[
                            {
                                title: "Discover Needs",
                                description:
                                    "We start by understanding your vision, goals, and specific requirements. Through collaborative sessions, we uncover the core problem and ensure alignment with your business needs."
                            },
                            {
                                title: "Analyze & Align",
                                description:
                                    "Once the requirements are clear, we dive deep to analyze dependencies, collect essential documents, and align our approach with your expectations."
                            },
                            {
                                title: "Build with Empathy",
                                description:
                                    "We bring your vision to life with user-centric solutions. We design and develop keeping the end-user in mind—prioritizing usability, performance, and reliability."
                            },
                            {
                                title: "Launch & Deliver",
                                description:
                                    "After rigorous testing and validation, we deploy the solution smoothly. We ensure your launch is successful and provide post-launch support if needed."
                            }
                        ].map((step, index) => (
                            <div className="col-md-6 col-lg-3 mb-5 text-center" key={index}>
                                <div className="p-4 shadow rounded bg-white h-100 position-relative z-1">
                                    <div className="mb-3">
                                        <div className="badge bg-primary rounded-circle p-3 fs-5">
                                            {index + 1}
                                        </div>
                                    </div>
                                    <h5 className="fw-bold mb-2">{step.title}</h5>
                                    <p className="text-muted small">{step.description}</p>
                                </div>
                            </div>
                        ))}

                        {/* Connecting lines - horizontal between cards */}
                        <div className="position-absolute top-50 start-0 w-100 d-none d-lg-block z-0">
                            <div
                                style={{
                                    height: "2px",
                                    background: "#ddd",
                                    margin: "0 auto",
                                    width: "75%",
                                    top: "50%",
                                    transform: "translateY(-50%)"
                                }}
                                className="position-relative"
                            ></div>
                        </div>
                    </div>
                </div>
                <div className="container my-5 py-5">
                    <div className="row align-items-center">
                        {/* Image section */}
                        <div className="col-md-6 mb-4 mb-md-0">
                            <img
                                src="https://images.unsplash.com/photo-1600880292089-90e6a0b98e16?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Customer Collaboration"
                                className="img-fluid rounded shadow-lg"
                            />
                        </div>

                        {/* Content section */}
                        <div className="col-md-6">
                            <h3 className="fw-bold mb-3 text-primary">Customer Collaboration</h3>
                            <p className="text-muted mb-4">
                                At Get Start Tec, we believe our clients are more than just stakeholders—they're co-creators. Through deep collaboration, we ensure every solution reflects your unique vision and evolves with your input.
                            </p>

                            <ul className="list-unstyled">
                                <li className="d-flex align-items-start mb-3">
                                    <span className="me-3 text-primary fs-4">
                                        <i className="bi bi-chat-dots-fill"></i>
                                    </span>
                                    <div>
                                        <h6 className="fw-semibold mb-1">Continuous Communication</h6>
                                        <p className="text-muted small mb-0">
                                            Frequent syncs, updates, and feedback sessions keep everyone aligned.
                                        </p>
                                    </div>
                                </li>
                                <li className="d-flex align-items-start mb-3">
                                    <span className="me-3 text-primary fs-4">
                                        <i className="bi bi-handshake-fill"></i>
                                    </span>
                                    <div>
                                        <h6 className="fw-semibold mb-1">Transparent Partnership</h6>
                                        <p className="text-muted small mb-0">
                                            We work *with* you, not *for* you. Your voice matters at every step.
                                        </p>
                                    </div>
                                </li>
                                <li className="d-flex align-items-start mb-3">
                                    <span className="me-3 text-primary fs-4">
                                        <i className="bi bi-lightbulb-fill"></i>
                                    </span>
                                    <div>
                                        <h6 className="fw-semibold mb-1">Co-Innovation</h6>
                                        <p className="text-muted small mb-0">
                                            We refine and shape solutions together, leveraging both your ideas and our expertise.
                                        </p>
                                    </div>
                                </li>
                                <li className="d-flex align-items-start mb-3">
                                    <span className="me-3 text-primary fs-4">
                                        <i className="bi bi-people-fill"></i>
                                    </span>
                                    <div>
                                        <h6 className="fw-semibold mb-1">Team Collaboration</h6>
                                        <p className="text-muted small mb-0">
                                            Our team works seamlessly with yours, combining strengths to achieve the best results.
                                        </p>
                                    </div>
                                </li>
                                <li className="d-flex align-items-start">
                                    <span className="me-3 text-primary fs-4">
                                        <i className="bi bi-gear-fill"></i>
                                    </span>
                                    <div>
                                        <h6 className="fw-semibold mb-1">Agile Process</h6>
                                        <p className="text-muted small mb-0">
                                            We follow an agile methodology, adapting to changes and ensuring quick delivery.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container my-5 py-5">
                    <h3 className="text-center fw-bold mb-5 text-primary">Project Timeline & Milestones</h3>
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
                                        <p className="text-muted">Initial phase where we identify and document the client's requirements.</p>
                                        <span className="text-muted small">Duration: 4 Days</span>
                                        <div className="progress" style={{ height: '10px' }}>
                                            <div className="progress-bar bg-primary" style={{ width: '15%' }}></div>
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
                                        <p className="text-muted">In this phase, we analyze the requirements and align the project with the client's business goals.</p>
                                        <span className="text-muted small">Duration: 3 Days</span>
                                        <div className="progress" style={{ height: '10px' }}>
                                            <div className="progress-bar bg-secondary" style={{ width: '25%' }}></div>
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
                                        <p className="text-muted">Our development team builds the solution with the end-user experience in mind.</p>
                                        <span className="text-muted small">Duration:2 Weeks </span>
                                        <div className="progress" style={{ height: '10px' }}>
                                            <div className="progress-bar bg-success" style={{ width: '40%' }}></div>
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
                                        <p className="text-muted">We deploy the product to the client and ensure everything is set up and functioning smoothly.</p>
                                        <span className="text-muted small">Duration: 2 Days</span>
                                        <div className="progress" style={{ height: '10px' }}>
                                            <div className="progress-bar bg-warning" style={{ width: '15%' }}></div>
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
                                        <p className="text-muted">After launch, we continue monitoring the solution for performance and gather user feedback for future iterations.</p>
                                        <span className="text-muted small">Duration: Ongoing</span>
                                        <div className="progress" style={{ height: '10px' }}>
                                            <div className="progress-bar bg-danger" style={{ width: '5%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};