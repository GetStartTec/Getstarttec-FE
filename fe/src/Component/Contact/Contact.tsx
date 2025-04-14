import { useState, ChangeEvent, FormEvent } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
  mobileNumber: string;
  budget: string;
  services: string[]; // Added services array
};

export const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    mobileNumber: "",
    budget: "",
    services: [], // Initialize services as an empty array
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
      message: "",
      mobileNumber: "",
      budget: "",
      services: [], // Reset services field after submit
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


  return (
    <>
      <div className="contact-page">
        {/* Hero Section */}
        <div className="hero-section">
          <img
            src={`${process.env.PUBLIC_URL}/images/contact-us-banner.jpg`}
            alt="Contact"
            className="hero-image"
          />
          <div className="hero-content">
            <h1>Get in Touch</h1>
            <p>We’d love to hear from you! Reach out with any queries or concerns.</p>
          </div>
        </div>

        {/* Contact Info & Form */}
        <div className="contact-container">
          {/* Contact Info */}
          <div className="contact-info">
            <h2>Our Location</h2>
            <div className="contact-details">
              <p>
                <i className="fas fa-envelope contact-icon" aria-label="Email"></i>
                example@email.com
              </p>
              <p>
                <i className="fas fa-phone-alt contact-icon" aria-label="Phone"></i>
                +91-xxxxx
              </p>
            </div>

            {/* Social Media */}
            <div className="contact-social-icons">
              <a href="tel:+91" target="_blank" rel="noopener noreferrer" aria-label="Call">
                <i className="fas fa-phone"></i>
              </a>
              <a href="https://wa.me/91" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="mailto:" target="_blank" rel="noopener noreferrer" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-x-twitter"></i>
              </a>
            </div>
          </div>

          {/* Query Form */}
          <div className="query-form">
            <h2 className="text-center">Submit Your Query</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleChange("name", e.target.value)
                }
                required
                aria-label="Your Name"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleChange("email", e.target.value)
                }
                required
                aria-label="Your Email"
              />
              <div>
                <input
                  type="text"
                  name="company"
                  placeholder="Your Company Name"
                  className="form-control"
                  aria-label="Your Company Name"
                />
              </div>
              <input
                type="tel"
                placeholder="Mobile Number"
                value={formData.mobileNumber}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleChange("mobileNumber", e.target.value)
                }
                pattern="[0-9]{10}"
                aria-label="Your Mobile Number"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  handleChange("message", e.target.value)
                }
                required
                aria-label="Your Message"
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>

        {/* What Can We Do For You Section */}


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
                          placeholder="Your Name"
                          required
                          className="form-control"
                          aria-label="Your Name"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          required
                          className="form-control"
                          aria-label="Your Email"
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Your Phone Number"
                          required
                          className="form-control"
                          aria-label="Your Phone Number"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          name="company"
                          placeholder="Your Company Name"
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
