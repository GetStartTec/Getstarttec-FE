import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const Projects = () => {
    const projects = [
        {
            title: "Learn Tech IT Solution",
            description: `"Learn Tech IT Solutions offers expert IT services, including software development, cloud solutions, and system integration. We help businesses streamline operations with innovative technology solutions."`,
            image: "/images/project1.jpg",
           
        },
        {
            title: "Madras Acoustics",
            description: `"Madras Acoustics offers expert acoustic solutions for soundproofing and audio enhancement in various spaces. We deliver tailored installations for optimal noise control and performance."`,
            image: "/images/project2.jpg",
           
        },
      
    ];

    return (
        <div className="container mt-5">
            <div className="projects-container d-flex flex-wrap mt-5 text-dark">
                <div className="col-md-7 p-4 mt-5">
                    <h1>GetStartTec</h1>
                    <p>
                        GetStartTec specializes in custom web design and development, helping businesses build strong online presences with user-friendly, responsive websites that reflect their brand.
                    </p>
                    <p>
                        We offer eCommerce development with secure payment integration and provide hosting, support, and maintenance services to ensure your website runs smoothly and securely.
                    </p>
                    <p>
                        Our team also delivers engaging copy, videos, and graphics to align with your marketing strategy and keep your site fresh and up-to-date.
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

            {/* FAQ Section */}
            <div className="mt-5">
    <h3 className="mb-4 text-center">Frequently Asked Questions (FAQs)</h3>
    <div className="accordion" id="faqAccordion">
        {[
            {
                question: "What services does GetStartTec offer?",
                answer:
                    "Custom web design, eCommerce development, hosting & support, maintenance, and content creation.",
                target: "One",
            },
            {
                question: "How long does it take to build a website?",
                answer:
                    "It depends on complexity. Usually, it takes a few weeks to a few months.",
                target: "Two",
            },
            {
                question: "Do you provide ongoing maintenance and support?",
                answer:
                    "Yes, including updates, bug fixes, security patches, and more.",
                target: "Three",
            },
            {
                question: "Can you help with content creation for my website?",
                answer:
                    "Absolutely! We provide copywriting, videos, and graphic design.",
                target: "Four",
            },
            {
                question: "What is your approach to eCommerce development?",
                answer:
                    "We design scalable stores with secure payments and user-friendly UX.",
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







            {/* Our Projects Section */}
            <div className="mt-5">
    <h3 className="mb-4 text-center">Our Projects</h3>
    <div className="row">
        {projects.map((project, index) => (
            <div className="col-md-6 mb-4" key={index}>
                <div className="card h-100 shadow-sm rounded">
                    <img
                        src={project.image}
                        className="card-img-top"
                        alt={project.title}
                    />
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{project.title}</h5>
                        <p className="card-text">{project.description}</p>
                       
                    </div>
                </div>
            </div>
        ))}
    </div>
</div>

        </div>
    );
};
