import { useLocation, useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer text-dark py-5 mt-5 ">
      {/* Top Section - Logo, Company Name, and Quote */}
      <div className="container">
        <div className="row border-bottom border-dark pb-4">
          {/* Left Section - Logo & Text */}
          <div className="col-12 col-md-4 d-flex flex-column align-items-start mb-4 pe-md-4">
            <div className="footer-logo mb-3">
              {/* Uncomment below when the logo is available */}
              {/* <img
                src={`${process.env.PUBLIC_URL}/images/madrasAcousticsIconn-removebg-preview.png`}
                alt="Madras Acoustics Logo"
                height="50"
              /> */}
            </div>
            <div className="footer-text">
              <span className="footer-company-name fw-bold fs-5">Get Start Tec</span>
              <div className="logo-text1-down text-muted" style={{ fontSize: "14px" }}>
                <i>From Idea to Innovation</i>
              </div>
            </div>
          </div>

          {/* Right Section - Navigation Links with Vertical Line */}
          <div className="col-12 col-md-8 d-flex flex-column justify-content-between ps-md-4 border-start border-dark">
            <div className="d-flex justify-content-center">
              <nav aria-label="Footer Navigation">
                <ul className="footer-nav d-flex justify-content-center mb-0 list-unstyled">
                  {[
                    { path: "/", label: "Home" },
                    { path: "/about-us", label: "About Us" },
                    { path: "/services", label: "Services" },
                    { path: "/projects", label: "Projects" },
                    { path: "/contact-us", label: "Contact Us" },
                  ].map(({ path, label }) => (
                    <li key={path} className="me-4">
                      <button
                        className={`btn btn-link text-dark ${location.pathname === path ? "fw-bold" : ""}`}
                        onClick={() => handleLinkClick(path)}
                      >
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            {/* Social Media Links */}
            <div className="footer-social d-flex justify-content-center mb-4 mt-4">
              {[
                { href: "tel:+918248365067", icon: "fas fa-phone", label: "Phone" },
                { href: "https://wa.me/918248365067", icon: "fab fa-whatsapp", label: "WhatsApp" },
                { href: "mailto:jeromedj@madrasacoustics.com", icon: "fas fa-envelope", label: "Email" },
                { href: "https://www.facebook.com/share/18kVHF8oaP/", icon: "fab fa-facebook-f", label: "Facebook" },
                { href: "https://instagram.com/madras_acoustics/", icon: "fab fa-instagram", label: "Instagram" },
                {
                  href: "https://x.com/madrasacoustics?t=L0Mh48j0u6tjYhUAw00f_g&s=08",
                  icon: "fab fa-x-twitter",
                  label: "Twitter",
                  style: { color: "black", backgroundColor: "transparent" }
                },
              ].map(({ href, icon, label, style }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-dark mx-2 me-4"
                  style={style}
                >
                  <i className={icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section - Centered at the Bottom */}
      <div className="footer-bottom text-center text-muted mt-3">
        <p>&copy; {new Date().getFullYear()} Get Start Tec - All rights reserved</p>
      </div>
    </footer>
  );
};
