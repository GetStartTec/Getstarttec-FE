import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const Projects = () => {
  const projects = [
    {
      title: "Custom Web Design",
      description: "Responsive and SEO-friendly websites tailored to your brand.",
      image: "/images/project1.jpg",
      link: "#",
    },
    {
      title: "eCommerce Development",
      description: "Scalable eCommerce stores with payment gateway integration.",
      image: "/images/project2.jpg",
      link: "#",
    },
    {
      title: "Hosting & Support",
      description: "Reliable hosting with 24/7 technical assistance.",
      image: "/images/project3.jpg",
      link: "#",
    },
    {
      title: "Content Creation",
      description: "Engaging visuals and content aligned with your goals.",
      image: "/images/project4.jpg",
      link: "#",
    },
  ];

  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Left Side Content */}
        <div className="col-md-6">
          <h2>GetStartTec IT Solutions</h2>
          <p>
            GetStartTec is a premier IT company specializing in custom web design and development, offering tailored solutions to help businesses establish a strong online presence. We design user-friendly, responsive websites that reflect your brand identity and business goals, using the latest technologies for an exceptional user experience.
          </p>
          <p>
            Our eCommerce Design & Development services help businesses build scalable online stores with secure payment integration and seamless shopping experiences. We also offer Hosting and Support services, providing reliable, high-performance hosting to ensure your website runs smoothly.
          </p>
          <p>
            To keep your website up-to-date and secure, GetStartTec provides Maintenance services that include regular updates, bug fixes, and security patches. We deliver compelling copy, videos, and graphics that engage your audience and align with your marketing strategy.
          </p>
        </div>

        {/* Right Side Image */}
        <div className="col-md-6">
          <img
            src="/images/your-image.jpg" // Replace with real image
            alt="Project Description"
            className="img-fluid rounded"
          />
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-5">
        <h3 className="mb-4">Frequently Asked Questions (FAQs)</h3>
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
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`faqHeading${item.target}`}>
                <button
                  className={`accordion-button ${
                    index !== 0 ? "collapsed" : ""
                  }`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#faqCollapse${item.target}`}
                  aria-expanded={index === 0 ? "true" : "false"}
                  aria-controls={`faqCollapse${item.target}`}
                >
                  {item.question}
                </button>
              </h2>
              <div
                id={`faqCollapse${item.target}`}
                className={`accordion-collapse collapse ${
                  index === 0 ? "show" : ""
                }`}
                aria-labelledby={`faqHeading${item.target}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{item.answer}</div>
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
            <div className="col-md-6 col-lg-3 mb-4" key={index}>
              <div className="card h-100 shadow-sm rounded">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a
                    href={project.link}
                    className="btn btn-outline-primary mt-auto"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
