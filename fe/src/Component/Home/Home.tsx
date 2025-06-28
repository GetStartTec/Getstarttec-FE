import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const stepDelay = 300;
const connectorDelay = 200;
const labelDelay = 300;
const sectionBuffer = 800;

type Step = {
    label: string;
    role: string;
    icon: string;
    iconType: string;
};

export const Home = () => {
    const [showDiscoverSteps, setShowDiscoverSteps] = useState(true);
    const [showAnalyze, setShowAnalyze] = useState(false);
    const [showAnalyzeSteps, setShowAnalyzeSteps] = useState(true);
    const [showBuildSteps, setShowBuildSteps] = useState(true);
    const [showLaunchSteps, setShowLaunchSteps] = useState(true);

    const [showBuild, setShowBuild] = useState(false);
    const [showLaunch, setShowLaunch] = useState(false);
    const projects = [
        {
            title: "Learn Tech IT Solution",
            description: "Learn Tech IT Solutions offers expert IT services, including software development, cloud solutions, and system integration. We help businesses streamline operations with innovative technology solutions.",
            image: "/images/LT_logo.png",
            designFeatures: [
                "Learn Tech IT Solution’s website utilizes a modern and dark-themed UI that reflects its technical expertise. The design is clean yet visually impactful, with bold typography and strategic use of accent colors. The homepage quickly communicates their value proposition through a well-defined hero section that highlights software development and cloud service offerings.",
                "The layout features a multi-section scrollable homepage with anchor-based navigation. Top-level menu items include About Us, Services, Products, Clients, and Contact. Each section is visually distinct, using animated icons, gradients, and cards to separate information and enhance user readability.",
                "The site is fully responsive, adapting to various screen sizes from desktop to mobile. Navigation menus collapse smoothly into mobile drawers, and content stacks naturally. Buttons, carousels, and icons remain intuitive and touch-friendly, making it ideal for corporate audiences accessing from different devices.",
                "Each service and product offered by Learn Tech is presented with clear headers, icons, and concise descriptions. Animations trigger as users scroll, giving a modern feel without overloading the user. Tech stack visuals and client industry icons add to the storytelling aspect of the site."
            ],
            link: "https://www.learntechitsolution.com",
            projectScope: "Cloud computing, DevOps training, Linux system administration, IT course development, hands-on labs, online learning platform setup, and cloud infrastructure management.",
            client: "Learn Tech IT Solution."
        },
        {
            title: "Madras Acoustics",
            description: "Madras Acoustics offers expert acoustic solutions for soundproofing and audio enhancement in various spaces. We deliver tailored installations for optimal noise control and performance.",
            image: "/images/MA_logo.png",
            designFeatures: [
                "Madras Acoustics’ website stands out with a minimalistic white-themed layout that feels premium and soothing—fitting for an acoustic-focused brand. High-resolution images paired with clean typography reflect clarity, calm, and professionalism. The first fold displays a calm banner and clear tagline that immediately explains their value.",
                "The navigation structure is simple and direct. Visitors can effortlessly explore Services, Products, About Us, and Contact sections. Each section is visually divided with generous white space and images of real projects or products, aiding the brand’s authenticity and readability.",
                "Each acoustic solution is described with clarity, supported by visuals showing real-life applications such as home theatres, studios, and commercial spaces. Service sections include details about design consultation, installation process, and acoustic analysis, making the site informative and educational for potential clients.",
                "Client logos, testimonials, and sample project displays are embedded to build credibility. This adds value especially for first-time visitors looking to understand the brand’s reach. These elements are spaced strategically to maintain focus without crowding the layout."
            ],
            link: "https://www.madrasacoustics.com",
            projectScope: "Acoustic design, soundproofing installation, consultation, and noise measurement analysis.",
            client: "Madras Acoustics"
        },
    ];

    const discoverSteps: Step[] = [
        { label: "Intro Meeting", role: "Client & BA", icon: "🤝", iconType: "task" },
        { label: "Understand Goals", role: "BA Team", icon: "🎯", iconType: "ai" },
        { label: "Identify Pain Points", role: "BA Team", icon: "🧩", iconType: "task" },
        { label: "Define Stakeholders", role: "Project Manager", icon: "👥", iconType: "ai" },
        { label: "Clarify KPIs", role: "Client & PM", icon: "📊", iconType: "task" }
    ];

    const analyzeSteps: Step[] = [
        { label: "Gather Requirements", role: "BA Team", icon: "📥", iconType: "task" },
        { label: "Document Use Cases", role: "BA Team", icon: "📄", iconType: "ai" },
        { label: "Tech Feasibility", role: "Tech Leads", icon: "🧪", iconType: "task" },
        { label: "Finalize Scope", role: "Product Owners", icon: "📝", iconType: "ai" }
    ];

    const buildSteps: Step[] = [
        { label: "Wireframe & UX Design", role: "UX Designer", icon: "🖌️", iconType: "task" },
        { label: "UI Mockups", role: "UI Designer", icon: "🎨", iconType: "ai" },
        { label: "Frontend Development", role: "Frontend Dev", icon: "💻", iconType: "task" },
        { label: "Backend Integration", role: "Backend Dev", icon: "🧩", iconType: "ai" },
        { label: "Internal QA & Iteration", role: "QA Team", icon: "✅", iconType: "task" }
    ];

    const launchSteps: Step[] = [
        { label: "Final QA & Testing", role: "QA Team", icon: "🔍", iconType: "task" },
        { label: "Staging Deployment", role: "DevOps", icon: "🚀", iconType: "ai" },
        { label: "Client Review", role: "Client", icon: "👀", iconType: "task" },
        { label: "Production Launch", role: "DevOps", icon: "🌐", iconType: "ai" },
        { label: "Post-launch Support", role: "Support Team", icon: "🛠️", iconType: "task" }
    ];

    const [selectedProject, setSelectedProject] = useState<any>(null);

    const handleProjectClick = (project: any) => setSelectedProject(project);
    const closeModal = () => setSelectedProject(null);

    const getDuration = (steps: Step[]) =>
        steps.length * stepDelay + (steps.length - 1) * connectorDelay + labelDelay + sectionBuffer;

    const discoverDuration = getDuration(discoverSteps);
    const analyzeDuration = getDuration(analyzeSteps);
    const buildDuration = getDuration(buildSteps);

    useEffect(() => {
        AOS.init({ duration: 800, once: true, easing: "ease-out" });

        const discoverTimer = setTimeout(() => setShowDiscoverSteps(false), discoverDuration);
        const analyzeStartTimer = setTimeout(() => setShowAnalyze(true), discoverDuration);
        const analyzeEndTimer = setTimeout(() => setShowAnalyzeSteps(false), discoverDuration + analyzeDuration);
        const buildStartTimer = setTimeout(() => setShowBuild(true), discoverDuration + analyzeDuration);
        const buildEndTimer = setTimeout(() => setShowBuildSteps(false), discoverDuration + analyzeDuration + buildDuration);
        const launchStartTimer = setTimeout(() => setShowLaunch(true), discoverDuration + analyzeDuration + buildDuration);
        const launchEndTimer = setTimeout(() => setShowLaunchSteps(false), discoverDuration + analyzeDuration + buildDuration + getDuration(launchSteps));

        return () => {
            clearTimeout(discoverTimer);
            clearTimeout(analyzeStartTimer);
            clearTimeout(analyzeEndTimer);
            clearTimeout(buildStartTimer);
            clearTimeout(buildEndTimer);
            clearTimeout(launchStartTimer);
            clearTimeout(launchEndTimer);
        };
    }, []);



    const renderSteps = (
        steps: Step[],
        heading: string,
        time: string,
        baseDelay: number
    ) => (
        <div
            className="ai-step-block"
            data-aos="fade-up"
            data-aos-delay={baseDelay}
        >
            <h3 className="text-center fw-bold mb-4">{heading}</h3>
            <div className="ai-flow-container">
                {steps.map((step, index) => (
                    <React.Fragment key={index}>
                        <div className="text-center">  {/* reduce from me-4 */}
                            <div className="ai-role-label mb-2">{step.role}</div>
                            <div
                                className={`ai-step ${step.iconType}`}
                                data-aos="zoom-in"
                                data-aos-delay={baseDelay + index * stepDelay}
                            >
                                <div className="ai-icon">{step.icon}</div>
                                <div className="ai-label">{step.label}</div>
                            </div>
                        </div>
                        {index < steps.length - 1 && (
                            <div
                                className="ai-connector me-4"
                                data-aos="fade-right"
                                data-aos-delay={baseDelay + index * stepDelay + connectorDelay}
                            >
                                <div className="pulse-bar" />
                            </div>
                        )}
                    </React.Fragment>
                ))}
                <div
                    className="ai-time-label ms-3"
                    data-aos="fade-left"
                    data-aos-delay={baseDelay + steps.length * stepDelay}
                >
                    ⏱ {time}
                </div>
            </div>
        </div>
    );

    return (
        <>
            {/* Hero Section */}
            <section className="text-white d-flex align-items-center" style={{
                backgroundImage: 'url("/assets/hero-bg.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '90vh',
                position: 'relative'
            }}>
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}></div>
                <div className="container position-relative z-2">
                    <div className="row">
                        <div className="col-lg-7">
                            <h1 className="display-3 fw-bold">We Build Smart Software, Fast</h1>
                            <p className="lead mt-3">
                                At <strong>GetstartTec</strong>, we transform ideas into modern, scalable digital products — from e-commerce to education tech.
                            </p>
                            <a
                                href="#"
                                className="btn btn-primary btn-lg mt-4"
                                data-bs-toggle="modal"
                                data-bs-target="#collabModal"
                            >
                                Collaborate with Us
                            </a>                        </div>
                    </div>
                </div>
            </section>


            {/* About Us */}

            {/* <section className="py-5 bg-white text-center">
                <div className="container">
                    <h2 className="fw-bold mb-3">About GetstartTec</h2>
                    <p className="lead mx-auto" style={{ maxWidth: "800px" }}>
                        We're a full-cycle software company driven by results and speed. Our agile team builds web platforms, mobile apps, and backend systems with a sharp eye on UX and scalability.
                    </p>
                </div>
            </section> */}
            <section className="py-5 bg-white text-dark">
                <div className="container text-center">
                    <h2 className="display-5 fw-bold mb-4" style={{ color: "#007BFF" }}>
                        GetstartTec ~ Building What's Next
                    </h2>

                    <p className="lead mx-auto mb-4" style={{ maxWidth: "750px" }}>
                        We are a digital innovation company turning ideas into scalable software — fast.
                        From web and mobile platforms to intelligent backends, we engineer with purpose and passion.
                    </p>

                    <div className="d-flex justify-content-center flex-wrap gap-3 mb-4">
                        <div className="border border-primary text-primary px-4 py-2 rounded-pill fw-semibold">
                            ⚡ Agile Development
                        </div>
                        <div className="border border-primary text-primary px-4 py-2 rounded-pill fw-semibold">
                            📱 Web & Mobile Apps
                        </div>
                        <div className="border border-primary text-primary px-4 py-2 rounded-pill fw-semibold">
                            ☁️ Scalable Architecture
                        </div>
                    </div>

                    <a href="#projects" className="btn btn-primary px-4 py-2 fw-semibold mt-3">
                        Explore Our Work →
                    </a>
                </div>
            </section>

            {/* Process Section */}

              {/* <section className="py-5 bg-light">
                <div className="container">
                    <h3 className="text-center fw-bold mb-5">Our Process</h3>
                    <div className="row justify-content-center">
                        {[
                            { title: "Discover Needs", description: "We start by understanding your vision, goals, and specific requirements. Through collaborative sessions, we uncover the core problem and ensure alignment with your business needs." },
                            { title: "Analyze & Align", description: "Once the requirements are clear, we dive deep to analyze dependencies, collect essential documents, and align our approach with your expectations." },
                            { title: "Build with Empathy", description: "We bring your vision to life with user-centric solutions. We design and develop keeping the end-user in mind—prioritizing usability, performance, and reliability." },
                            { title: "Launch & Deliver", description: "After rigorous testing and validation, we deploy the solution smoothly. We ensure your launch is successful and provide post-launch support if needed." }
                        ].map((step, index) => (
                            <div className="col-md-6 col-lg-3 mb-5 text-center" key={index}>
                                <div className="p-4 shadow rounded bg-white h-100 position-relative">
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
                    </div>
                </div>
            </section> */}

            <div className="ai-flow-wrapper">
                {/* Discover */}
                <div className="ai-flow-item">
                    {showDiscoverSteps ? (
                        renderSteps(discoverSteps, "Discover Needs", "2 Days", 0)
                    ) : (
                        <div className="circular-summary position-relative text-center">
                            <div className="circle-content">
                                <h5 className="fw-bold mb-2">Discover Needs</h5>
                                <p className="mb-0">
                                    We start by understanding your vision, goals, and specific requirements.
                                    Through collaborative sessions, we uncover the core problem and ensure alignment with your business needs.
                                </p>
                            </div>
                            <div className="rotating-arrow-icon"></div>
                        </div>
                    )}
                </div>

                {/* Analyze */}
                {showAnalyze && (
                    <div className="ai-flow-item">
                        {showAnalyzeSteps ? (
                            renderSteps(analyzeSteps, "Analyze & Align", "2 Days", 0)
                        ) : (
                            <div className="circular-summary position-relative text-center">
                                <div className="circle-content">
                                    <h5 className="fw-bold mb-2">Analyze & Align</h5>
                                    <p className="mb-0">
                                        We gather detailed requirements, assess feasibility, and finalize the scope aligned with business needs.
                                    </p>
                                </div>
                                <div className="rotating-arrow-icon"></div>
                            </div>
                        )}
                    </div>
                )}

                {/* Build */}
                {showBuild && (
                    <div className="ai-flow-item">
                        {showBuildSteps ? (
                            renderSteps(buildSteps, "Build & Deliver", "4 Days", 0)
                        ) : (
                            <div className="circular-summary position-relative text-center">
                                <div className="circle-content">
                                    <h5 className="fw-bold mb-2">Build & Deliver</h5>
                                    <p className="mb-0">
                                        Our designers and developers bring the solution to life through UI/UX and backend integration with ongoing QA.
                                    </p>
                                </div>
                                <div className="rotating-arrow-icon"></div>
                            </div>
                        )}
                    </div>
                )}

                {/* Launch */}
                {showLaunch && (
                    <div className="ai-flow-item">
                        {showLaunchSteps ? (
                            renderSteps(launchSteps, "Launch & Deliver", "1 Day", 0)
                        ) : (
                            <div className="circular-summary position-relative text-center">
                                <div className="circle-content">
                                    <h5 className="fw-bold mb-2">Launch & Deliver</h5>
                                    <p className="mb-0">
                                        Once tested and approved, we go live with your product and provide support to ensure success.
                                    </p>
                                </div>
                                <div className="rotating-arrow-icon"></div>
                            </div>
                        )}
                    </div>
                )}
            </div>


            {/* What Our Clients Say Section */}
            <section className="py-5 bg-light">
                <div className="container">
                    <h3 className="text-center fw-bold mb-5">What Our Clients Say</h3>
                    <div className="row">
                        {projects.map((project, index) => (
                            <div className="col-md-6 mb-4" key={index} onClick={() => handleProjectClick(project)}>
                                <div className="card h-100 shadow-sm project-card p-3">
                                    <div className="d-flex align-items-center mb-2">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="project-logo me-2"
                                            style={{
                                                borderRadius: '50%',
                                                width: '50px',
                                                height: '50px',
                                                objectFit: 'cover',
                                            }}
                                        />
                                        <h5 className="card-title mb-0">{project.title}</h5>
                                    </div>
                                    <p className="card-text">{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section id="contact" className="py-5 text-white text-center" style={{ backgroundColor: "#0d6efd" }}>
                <div className="container">
                    <h2 className="fw-bold">Ready to Launch Your Idea?</h2>
                    <p className="lead">Let’s make something awesome, together.</p>
                    <a href="/contact" className="btn btn-light btn-lg mt-3">Contact Us</a>
                </div>
            </section>




            {/* Collaborate Modal */}
            <div
                className="modal fade"
                id="collabModal"
                tabIndex={-1}
                aria-labelledby="collabModalLabel"
                aria-hidden="true"
            >
                <div
                    className="modal-dialog modal-dialog-centered"
                    style={{ maxWidth: "700px", width: "90%" }}
                >
                    <div className="modal-content">
                        {/* Header */}
                        <div className="modal-header border-0 pb-1">
                            <h3
                                className="modal-title fw-bold text-primary mb-2"
                                id="collabModalLabel"
                                style={{
                                    marginTop: "10px",
                                    marginLeft: "-450px",
                                }}
                            >
                                Let`s Grow With Us
                            </h3>
                            <button
                                type="button"
                                className="btn-close position-absolute"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                style={{
                                    top: "20px",
                                    right: "20px",
                                    zIndex: 1055,
                                    borderRadius: "8px",
                                    padding: "6px",
                                    transition: "border 0.2s ease",
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.border = "2px solid black";
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.border = "none";
                                }}
                            ></button>
                        </div>

                        {/* Body */}
                        <div className="modal-body pt-0">
                            <div className="row align-items-center">
                                {/* Left Image */}
                                <div className="col-md-6 mb-4 mb-md-0">
                                    <img
                                        src="/images/colab-us.jpeg"
                                        alt="Collaboration Illustration"
                                        className="img-fluid rounded shadow-sm"
                                        style={{ maxHeight: "300px", objectFit: "cover" }}
                                    />
                                </div>

                                {/* Right Content */}
                                <div className="col-md-6" style={{ marginTop: "-60px" }}>
                                    <h4 className="mb-2 text-dark">Bring Your Ideas to Life With Us</h4>
                                    <p className="text-muted mb-3">
                                        Whether you're a startup with a bold idea or a brand seeking a creative tech partner,
                                        we’re here to turn your vision into reality. Let’s build something impactful together.
                                    </p>
                                    <div className="d-flex gap-3 mt-3 flex-wrap justify-content-center justify-content-md-start">
                                        <a href="/contact" className="btn btn-outline-primary btn-lg px-4">
                                            Contact Us
                                        </a>
                                        {/* Trigger Form Modal */}
                                        <button
                                            className="btn btn-primary btn-lg px-4"
                                            data-bs-toggle="modal"
                                            data-bs-target="#joinUsModal"
                                        >
                                            Join Us
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Join Us Form Modal */}
            <div>
                <div
                    className="modal fade"
                    id="joinUsModal"
                    tabIndex={-1}
                    aria-labelledby="joinUsModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: "600px", width: "90%" }}>
                        <div className="modal-content p-3">
                            <div className="modal-header">
                                <h5 className="modal-title fw-bold" id="joinUsModalLabel">Drop an Idea</h5>
                                <button
                                    type="button"
                                    className="btn-close position-absolute"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    style={{
                                        top: "20px",
                                        right: "20px",
                                        zIndex: 1055,
                                        borderRadius: "8px",
                                        padding: "6px",
                                        transition: "border 0.2s ease",
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.border = "2px solid black";
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.border = "none";
                                    }}
                                ></button>                            </div>

                            <div className="modal-body">
                                <form
                                    className="needs-validation"
                                    noValidate
                                    onSubmit={(e) => {
                                        const form = e.currentTarget;
                                        const scheduleCheck = document.getElementById("scheduleCallCheck") as HTMLInputElement;
                                        const timeInput = document.getElementById("callTimeInput") as HTMLInputElement;

                                        if (!form.checkValidity()) {
                                            e.preventDefault();
                                            e.stopPropagation();
                                        }

                                        if (scheduleCheck.checked && !timeInput.value) {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            timeInput.classList.add("is-invalid");
                                        }

                                        form.classList.add("was-validated");
                                    }}
                                >
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label className="form-label">
                                                Name <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter your name"
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">
                                                Email ID <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Enter your email"
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">
                                                Mobile No <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                className="form-control"
                                                placeholder="Enter mobile number"
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">
                                                Location <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Your city/state"
                                                required
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">
                                                Your Idea <span className="text-danger">*</span>
                                            </label>
                                            <textarea
                                                className="form-control"
                                                rows={3}
                                                placeholder="Describe your idea..."
                                                required
                                            ></textarea>
                                        </div>

                                        {/* Checkbox */}
                                        <div className="col-12">
                                            <div className="form-check mt-2">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="scheduleCallCheck"
                                                    style={{ width: "18px", height: "18px", cursor: "pointer" }}
                                                    onChange={(e) => {
                                                        const timeField = document.getElementById("callTimeField") as HTMLElement;
                                                        timeField.style.display = e.target.checked ? "block" : "none";
                                                    }}
                                                />
                                                <label className="form-check-label ms-2" htmlFor="scheduleCallCheck">
                                                    Do you need to schedule a call?
                                                </label>
                                            </div>
                                        </div>

                                        {/* Conditional time input */}
                                        <div className="col-12 mt-2" id="callTimeField" style={{ display: "none" }}>
                                            <label className="form-label">
                                                Your Convenient Time <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                type="time"
                                                id="callTimeInput"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-4 text-end">
                                        <button type="submit" className="btn btn-primary px-4">Drop</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





        </>
    );

};
