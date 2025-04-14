import { useState, ChangeEvent, useEffect, FormEvent } from "react";
import { useLocation } from 'react-router-dom';


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
    email: '',
    mobileNumber: '',
    companyName: '',
    message: '',
    services: [],
    budget: '',
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
      quote: "“Absolutely loved their service!”",
      author: "Yoha Raj",
      rating: 5,
      image: `${process.env.PUBLIC_URL}/images/client-1.png`,
    },
    {
      quote: "“Quick response and professional team.”",
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

  const [showQuoteForm, setShowQuoteForm] = useState(false);

  const location = useLocation();
  useEffect(() => {
    if (location.hash === "#quote") {
      setShowQuoteForm(true);
    } else {
      setShowQuoteForm(false);
    }
  }, [location]);


  return (
    <>
      <div className="contact-page">
        {/* Hero Section */}
        <div className="position-relative text-white text-center" style={{ height: '500px' }}>
          {/* Background Image */}
          <img
            src={`${process.env.PUBLIC_URL}/images/contact-us-banner.jpg`}
            alt="Contact"
            className="img-fluid w-100 h-100"
            style={{ objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: 0 }}
          />

          {/* Dark Overlay */}
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1 }}
          ></div>

          {/* Text Content */}
          <div
            className="position-absolute top-50 start-50 translate-middle"
            style={{ zIndex: 2 }}
          >
            <h1 className="display-5 fw-bold">Get in Touch</h1>
            <p className="lead">We’d love to hear from you! Reach out with any queries or concerns.</p>
          </div>
        </div>



        {/* Contact Info & Form */}
        <div className="container py-5">
  <div className="row">

    {/* Contact Info */}
    <div className="col-md-6 mb-4">
      <h2 className="mb-4">Our Location</h2>
      <div className="contact-details">
        <p>
          <i className="fas fa-envelope me-2" aria-label="Email"></i>
          example@email.com
        </p>
        <p>
          <i className="fas fa-phone-alt me-2" aria-label="Phone"></i>
          +91-xxxxx
        </p>
      </div>

      {/* Social Icons */}
      <div className="contact-social-icons">
        <a href="tel:+91" className="me-3 text-dark fs-4">
          <i className="fas fa-phone"></i>
        </a>
        <a href="https://wa.me/91" className="me-3 text-success fs-4" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href="mailto:" className="me-3 text-danger fs-4">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="#" className="me-3 text-primary fs-4">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="me-3 text-warning fs-4">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="text-dark fs-4">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </div>

    {/* Query Form */}
    <div className="col-md-6">
      <h2 className="mb-4 text-center">Submit Your Query</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange("name", e.target.value)}
            required
            aria-label="Your Name"
          />
        </div>

        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange("email", e.target.value)}
            required
            aria-label="Your Email"
          />
        </div>

        <div className="mb-3">
          <input
            type="tel"
            className="form-control"
            placeholder="Mobile Number"
            value={formData.mobileNumber}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange("mobileNumber", e.target.value)}
            pattern="[0-9]{10}"
            aria-label="Your Mobile Number"
          />
        </div>

        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Your Message"
            rows={4}
            value={formData.message}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleChange("message", e.target.value)}
            required
            aria-label="Your Message"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-80">Send Message</button>
      </form>
    </div>

  </div>
</div>


        {/* Testimonials Section */}
        <div className="testimonial-section">
          <h2>What Our Clients Say</h2>
          <div className="testimonial-grid">
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-card" key={index}>
                <div className="testimonial-details">
                  <div className="star-rating">
                    {[...Array(5)].map((_, idx) => (
                      <span
                        key={idx}
                        className={idx < testimonial.rating ? "star" : "star-empty"}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="testimonial-quote">{testimonial.quote}</p>
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="testimonial-image"
                  />
                  <p className="testimonial-author">{testimonial.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>




        <div className="text-center my-8">
          <button
            onClick={() => setShowQuoteForm(!showQuoteForm)}
            className="toggle-quote-btn"
          >
            Get a Quote
          </button>
        </div>


        {showQuoteForm && (
          <div className="get-quote">
            <section className="get-quote-section">

              <form className="quote-form">


                {/* Get a Quote Section */}
                <div className="get-quote">
                  <section className="get-quote-section">
                    <h2>Get a Quote</h2>
                    <p>Fill in your details and we'll get back to you with a quote.</p>
                    <form className="quote-form">
                      <div>
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          required
                          className="form-control"
                          aria-label="Your Name"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          required
                          className="form-control"
                          aria-label="Your Email"
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Mobile Number"
                          required
                          className="form-control"
                          aria-label="Your Phone Number"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          name="company"
                          placeholder="Company Name"
                          className="form-control"
                          aria-label="Your Company Name"
                        />
                      </div>
                      <div>
                        <textarea
                          name="message"
                          rows={4}
                          placeholder="Tell us about your needs..."
                          className="form-control"
                          aria-label="Your Message"
                        ></textarea>
                      </div>

                      <p className="font-medium mb-2">What is your estimated budget?</p>
                      <div className="space-y-2">
                        {[
                          "$0 - $1,000",
                          "$1,000 - $10,000",
                          "$10,000 - $25,000",
                          "$25,000 - $75,000",
                          "$75,000+",
                        ].map((budget) => (
                          <label key={budget} className="flex items-center space-x-2">
                            <input
                              type="radio"
                              name="budget"
                              value={budget}
                              checked={formData.budget === budget}
                              onChange={(e) => handleChange("budget", e.target.value)}
                              className="form-radio"
                              aria-label={`Select budget range ${budget}`}
                            />
                            <span>{budget}</span>
                          </label>
                        ))}
                      </div>

                      <div className="services-section">
                        <p className="font-medium mb-2">What can we do for you?</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {[
                            'Branding',
                            'Brand Strategy & Growth',
                            'Web Design & Development',
                            'Web Support',
                            'Marketing & Advertising',
                            'Sales Enablement',
                            'Hosting, Domains & Web Services',
                            'Other',
                          ].map((service) => (
                            <label key={service} className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                id={service}
                                checked={formData.services.includes(service)}
                                onChange={() => handleCheckboxChange(service)}
                                className="form-checkbox"
                                aria-label={`Select ${service}`}
                              />

                              <span>{service}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      <button type="submit" className="quote-btn">
                        Request Quote
                      </button>
                    </form>
                  </section>
                </div>

              </form>
            </section>
          </div>
        )}


      </div>
    </>
  );
};
