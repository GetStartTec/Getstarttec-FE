import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<any>(null);

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

    const testimonials = [
        {
            name: "Aarav Mehta",
            role: "CEO, Mehta Enterprises",
            feedback:
                "Working with this team was an absolute pleasure. They delivered beyond expectations, on time and with great attention to detail.",
            image: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            name: "Priya Sharma",
            role: "Marketing Head, Brandify",
            feedback:
                "The professionalism and creativity they brought to the table transformed our project completely. Highly recommended!",
            image: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            name: "Karthik Iyer",
            role: "Founder, Iyer Innovations",
            feedback:
                "Exceptional work ethic and excellent communication throughout the project. Will definitely collaborate again.",
            image: "https://randomuser.me/api/portraits/men/65.jpg"
        },
        {
            name: "Ananya Gupta",
            role: "Product Manager, TechSphere",
            feedback:
                "From concept to execution, everything was handled perfectly. Truly impressed by their expertise.",
            image: "https://randomuser.me/api/portraits/women/68.jpg"
        }
    ];

    const steps = [
        {
            title: "Understanding Your Needs",
            description:
                "We start by listening carefully to your goals, challenges, and vision to create the right plan.",
            icon: <CheckCircle className="w-10 h-10 text-blue-500" />
        },
        {
            title: "Planning & Strategy",
            description:
                "We design a custom roadmap that ensures efficiency and success at every stage of execution.",
            icon: <CheckCircle className="w-10 h-10 text-green-500" />
        },
        {
            title: "Execution & Development",
            description:
                "Our team implements the plan with precision, keeping you updated at every step.",
            icon: <CheckCircle className="w-10 h-10 text-purple-500" />
        },
        {
            title: "Final Delivery & Support",
            description:
                "We deliver on time and provide continuous support to ensure smooth operations.",
            icon: <CheckCircle className="w-10 h-10 text-orange-500" />
        }
    ];

    const handleProjectClick = (project: any) => setSelectedProject(project);
    const closeModal = () => setSelectedProject(null);

    return (
        <>
            <div className="about-container d-flex flex-wrap mt-5 text-dark">
                <div className="col-md-7 p-4 mt-5">
                    <h2 className="mb-4">GetStartTec</h2>
                    <p>
                        <em>“<strong>Get Start Tec</strong> specializes in custom web design and development”, helping businesses build strong online presences with user-friendly, responsive websites that reflect their brand.</em>
                        <br /><br />
                        We offer eCommerce development with secure payment integration and provide hosting, support, and maintenance services to ensure your website runs smoothly and securely.
                        <br /><br />
                        Our team also delivers engaging copy, videos, and graphics to align with your marketing strategy and keep your site fresh and up-to-date.

                    </p>
                </div>
                <div className="col-md-5 p-4 d-flex align-items-center">
                    <img
                        src="/images/services.jpg"
                        alt="Get Start Tec"
                        className="img-fluid w-100"
                    />
                </div>
            </div>
            <div className="container mt-5 text-dark">
                {/* Intro Section */}


                {/* FAQ Section */}
                <div className="mt-5">
                    <h3 className="mb-4 text-center">Frequently Asked Questions (FAQs)</h3>
                    <div className="accordion" id="faqAccordion">
                        {[
                            {
                                question: "What services does GetStartTec offer?",
                                answer: "Custom web design, eCommerce development, hosting & support, maintenance, and content creation.",
                                target: "One",
                            },
                            {
                                question: "How long does it take to build a website?",
                                answer: "It depends on complexity. Usually, it takes a few weeks to a few months.",
                                target: "Two",
                            },
                            {
                                question: "Do you provide ongoing maintenance and support?",
                                answer: "Yes, including updates, bug fixes, security patches, and more.",
                                target: "Three",
                            },
                            {
                                question: "Can you help with content creation for my website?",
                                answer: "Absolutely! We provide copywriting, videos, and graphic design.",
                                target: "Four",
                            },
                            {
                                question: "What is your approach to eCommerce development?",
                                answer: "We design scalable stores with secure payments and user-friendly UX.",
                                target: "Five",
                            },
                        ].map((item, index) => (
                            <div className="accordion-item border-0 mb-3" key={index}>
                                <h2 className="accordion-header" id={`faqHeading${item.target}`}>
                                    <button
                                        className={`accordion-button p-3 ${index !== 0 ? "collapsed" : ""} bg-light text-dark border rounded-3 shadow-sm`}
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#faqCollapse${item.target}`}
                                        aria-expanded={index === 0 ? "true" : "false"}
                                        aria-controls={`faqCollapse${item.target}`}
                                    >
                                        <strong>{item.question}</strong>
                                    </button>
                                </h2>
                                <div
                                    id={`faqCollapse${item.target}`}
                                    className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                                    aria-labelledby={`faqHeading${item.target}`}
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body text-muted p-3">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-5">
                    <h3 className="mb-4 text-center fw-bold text-primary">Our Projects</h3>
                    <div className="row g-4">
                        {projects.map((project, index) => (
                            <div className="col-lg-6 col-md-6 col-sm-12" key={index}>
                                <div
                                    className="project-card-modern shadow-lg p-4 rounded-4 h-100"
                                    onClick={() => handleProjectClick(project)}
                                >
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="project-logo-wrapper me-3">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="project-logo-modern"
                                            />
                                        </div>
                                        <h4 className="fw-bold mb-0">{project.title}</h4>
                                    </div>
                                    <p className="text-muted">{project.description}</p>
                                    <div className="read-more text-primary fw-semibold mt-auto">
                                        View Details →
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                {/* Modal */}
                {selectedProject && (
                    <div className="custom-modal-overlay" onClick={closeModal}>
                        <div className="custom-modal" onClick={(e) => e.stopPropagation()}>
                            <span className="close-icon" onClick={closeModal}>&times;</span>
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="modal-img"
                                style={{
                                    marginBottom: '-40px',
                                    borderRadius: '5px', // Correct camelCase
                                    marginLeft: '0px',
                                    display: 'block'
                                }}


                            />

                            <div className="modal-content-wrapper">
                                {/* Design Features and Link Section (70% Width) */}
                                <div className="content-70">
                                    <h4>{selectedProject.title}</h4>
                                    <p>{selectedProject.description}</p>
                                    <h5>Design Features</h5>
                                    <p>{selectedProject.designFeatures}</p>
                                    <h5>Project Link</h5>
                                    <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">{selectedProject.link}</a>
                                </div>

                                {/* Project Scope and Client Section (30% Width) */}
                                <div className="content-30">
                                    <h5>Project Scope</h5>
                                    <p>{selectedProject.projectScope}</p>
                                    <h5>Client</h5>
                                    <p>{selectedProject.client}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="container my-5 py-5">
                <h3 className="text-center fw-bold mb-5 text-primary">
                    What Our Clients Say
                </h3>

                <div className="row justify-content-center">
                    {testimonials.map((testimonial: any, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="testimonial-card shadow-lg rounded-4 p-4 position-relative bg-white h-100">
                                {/* Quote Icon */}
                                <div className="quote-icon position-absolute top-0 start-50 translate-middle">
                                    <i className="bi bi-quote text-primary display-5"></i>
                                </div>

                                {/* Client Image */}
                                <div className="text-center mt-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="rounded-circle shadow-sm border border-3 border-primary"
                                        width="80"
                                        height="80"
                                    />
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-muted mt-3 text-center fst-italic">
                                    "{testimonial.feedback}"
                                </p>

                                {/* Client Info */}
                                <div className="text-center mt-3">
                                    <h6 className="fw-bold mb-0">{testimonial.name}</h6>
                                    <small className="text-secondary">{testimonial?.position}</small>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        How We Done This
                    </h2>
                    <div className="grid gap-8 md:grid-cols-4">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all text-center flex flex-col items-center"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                <div className="mb-4">{step.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                <p className="text-gray-600 text-sm">{step.description}</p>
                                <div className="mt-4 w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold">
                                    {index + 1}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            );

        </>

    );

};
