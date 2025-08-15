import { useState, useEffect, FormEvent } from "react";
import { useLocation } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import 'animate.css';


type FormData = {
  name: string;
  email: string;
  mobileNumber: string;
  companyName: string;
  message: string;
  services: string[];
  budget: string;
};

export const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    mobileNumber: "",
    companyName: "",
    message: "",
    services: [],
    budget: "",
  });

  const handleChange = (field: keyof FormData, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (service: string) => {
    setFormData((prev) => {
      const newServices = prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service];
      return { ...prev, services: newServices };
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Your query has been submitted!");
    setFormData({
      name: "",
      email: "",
      mobileNumber: "",
      companyName: "",
      message: "",
      services: [],
      budget: "",
    });
  };

  const testimonials = [
    {
      quote: "Absolutely loved their service!",
      author: "Yoha Raj",
      rating: 5,
      image: `${process.env.PUBLIC_URL}/images/client-1.png`,
    },
    {
      quote: "Quick response and professional team.",
      author: "Danish",
      rating: 4,
      image: `${process.env.PUBLIC_URL}/images/client-2.jpg`,
    },
    {
      quote: "“Highly recommend them to everyone.”",
      author: "Anjali Mehta",
      rating: 5,
      image: `${process.env.PUBLIC_URL}/images/client-1.png`,
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#quote") {
      setShowModal(true);
    }
  }, [location]);

  return (
    <>
      <div className="about-container d-flex flex-wrap mt-5 text-dark">
        <div className="col-md-7 p-4 mt-5">
          <h2 className="mb-4">Contact Us</h2>
          <p>
            <em>
              Let’s Build Something Great Together with “<strong>Get Start Tec</strong>”
            </em>
            <br />
            <br />
            Have a question or ready to start your project?
            <br />
            <br />
            Reach out to Get Start Tec — we’re here to help you bring your digital ideas
            to life.
            <br />
            <br />
            Whether it's a custom website, eCommerce solution, or just a friendly chat
            about how we can support your business online — we’d love to hear from you.{" "}
            <strong>Get started with Get Start Tec.</strong>
          </p>
        </div>
       

      </div>

      {/* Contact Info & Form */}
    <div className="container py-5">
  <div className="row g-4">
    {/* Contact Info */}
    <div className="col-lg-5">
      <div className="contact-glass p-4 rounded-4 position-relative shadow-lg">
        <h2 className="fw-bold text-white mb-4">
          <i className="fas fa-bolt me-2 text-warning"></i> Reach Out To Us
        </h2>

        <div className="info-grid">
          <div className="info-card">
            <div className="icon-circle bg-primary text-white">
              <i className="fas fa-envelope"></i>
            </div>
            <div>
              <h6>Email Us</h6>
              <a href="mailto:jeromedj@madrasacoustics.com" className="text-white-50">
                jeromedj@madrasacoustics.com
              </a>
            </div>
          </div>  
          
           <div className="info-card">
            <div className="icon-circle bg-success text-white">
              <i className="fas fa-phone"></i>
            </div>
            <div>
              <h6>Call Now</h6>
              <p className="mb-0 text-white-50">
                +91 9843788261 <br />
                + 91 7904981507
              </p>
            </div>
          </div>
          <div className="info-card">
            <div className="icon-circle bg-danger text-white">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div>
              <h6>Visit</h6>
              <p className="mb-0 text-white-50">
                9/10, Perumal Kovil Street, <br />
                Kotturpuram, Chennai - 600085
              </p>
            </div>
          </div>
        </div>

        <div className="custom-social mt-4">
          <a href="https://wa.me/918248365067" className="social-btn wa">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="mailto:jeromedj@madrasacoustics.com" className="social-btn mail">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://www.facebook.com/share/18kVHF8oaP/" className="social-btn fb">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com/madras_acoustics/" className="social-btn ig">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://x.com/madrasacoustics" className="social-btn tw">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>

    {/* Query Form */}
    <div className="col-lg-7">
      <div className="card p-4 rounded-4 shadow-lg border-0">
        <h2 className="mb-4 text-center fw-bold">Submit Your Query</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="tel"
              className="form-control"
              placeholder="Mobile Number"
              value={formData.mobileNumber}
              onChange={(e) => handleChange("mobileNumber", e.target.value)}
              pattern="[0-9]{10}"
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              required
            ></textarea>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-gradient-primary">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>



      {/* Testimonials Section */}
      <div className="testimonial-section py-5">
        <h2 className="text-center mb-5 display-6 fw-bold text-gradient">
          What Our Clients Say
        </h2>

        <div className="testimonial-grid d-flex justify-content-center flex-wrap">
          {testimonials.map((testimonial, index) => (
            <div
              className="testimonial-card bg-white p-4 m-3 rounded-4 shadow border-start border-4 border-primary position-relative"
              key={index}
            >
              {/* Star Rating */}
              <div className="star-rating mb-3 text-center">
                {[...Array(5)].map((_, idx) => (
                  <span
                    key={idx}
                    className={`fs-5 ${idx < testimonial.rating ? "text-warning" : "text-secondary"}`}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <div className="px-3 py-3 position-relative">
                {/* <i
    className="bi bi-chat-quote-fill fs-1 text-primary position-absolute top-0 start-0 opacity-10"
    style={{ zIndex: 0 }}
  ></i> */}

                {/* Main blockquote */}
                <blockquote
                  className="mb-3 ps-4 pe-4 d-flex align-items-start position-relative"
                  style={{ whiteSpace: "pre-wrap", zIndex: 1 }}
                >
                  <i
                    className="bi bi-chat-quote-fill fs-5 text-primary ms-2 mt-1"
                    style={{ transform: "scaleX(-1)" }}
                  ></i>

                  <em className="text-dark flex-grow-1">"{testimonial.quote}"</em>
                  <i className="bi bi-chat-quote-fill fs-5 text-primary me-2 mt-1"></i>


                </blockquote>
              </div>


              {/* Image */}
              <div className="text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="rounded-circle shadow-sm border border-3 border-white"
                  width={70}
                  height={70}
                />
                <p className="testimonial-author fw-semibold mt-3 text-primary mb-0">
                  — {testimonial.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>



      {/* Modal */}
      {showModal && (
        <div className="modal fade show d-block" tabIndex={-1} role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content p-3">
              <div className="modal-header">
                <h2 className="modal-title">Get a Quote</h2>
                <p>Fill in your details and we'll get back to you with a quote.</p>

                <button
                  type="button"
                  className="btn-close custom-close-btn"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Name"
                    required
                  />
                  <input
                    type="email"
                    className="form-control mb-2"
                    placeholder="Email"
                    required
                  />
                  <input
                    type="tel"
                    className="form-control mb-2"
                    placeholder="Phone"
                    required
                  />
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Company Name"
                  />
                  <textarea
                    className="form-control mb-2"
                    rows={3}
                    placeholder="Tell us about your needs..."
                  ></textarea>

                  <p className="fw-semibold mb-2 mt-3">What is your estimated budget?</p>
                  {[
                    "$0 - $1,000",
                    "$1,000 - $10,000",
                    "$10,000 - $25,000",
                    "$25,000 - $75,000",
                    "$75,000+",
                  ].map((budget) => (
                    <div className="form-check" key={budget}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="budget"
                        value={budget}
                        checked={formData.budget === budget}
                        onChange={(e) => handleChange("budget", e.target.value)}
                      />
                      <label className="form-check-label">{budget}</label>
                    </div>
                  ))}

                  <div className="services-section">
                    <p className="font-medium mb-2">What can we do for you?</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {[
                        "Branding",
                        "Brand Strategy",
                        "UI/UX Design",
                        "Website Design",
                        "Mobile App Development",
                        "Digital Marketing",
                      ].map((service) => (
                        <label key={service} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            value={service}
                            checked={formData.services.includes(service)}
                            onChange={() => handleCheckboxChange(service)}
                            className="form-checkbox"
                            aria-label={`Service option ${service}`}
                          />
                          <span>{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <button type="submit" className="btn btn-primary">
                      Request a Quote
                    </button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      )}
       <div className="col-md-5 p-4 d-flex flex-column align-items-start">
          <h3 className="mb-3">Stay Connected with GetStartTec on WhatsApp</h3>
          <img
            src="/images/loki_wp_contact.jpg"
            alt="Get Start Tec"
            className="img-fluid mb-3"
            style={{ width: "200px", marginLeft: "180px" }}
          />

          <div style={{ marginLeft: "100px" }}>
            <h4 className="mb-2 " >Scan the QR Code to Get Started</h4>
            <p>
              ✔ Get real-time support and updates<br />
              ✔ Receive alerts and service notifications<br />
              ✔ Chat directly with our team for inquiries<br />
              ✔ Stay informed about the latest features and offers<br />
              <br />
              <small><em>*Android users may need to enable Google Lens for QR scanning</em></small>
            </p>

          </div>

        </div>
    </>
  );
};
