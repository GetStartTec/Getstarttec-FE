import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = (path: string) => {
        setIsOpen(false);
    
        if (path === "/contact-us#quote") {
            navigate("/contact-us#quote");
    
            setTimeout(() => {
                const el = document.getElementById("quote");
                if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        } else {
            navigate(path);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };
    

    return (
        <nav
            className={`navbar navbar-expand-lg fixed-top ${isScrolled ? "bg-light shadow-sm" : "bg-transparent"
                }`}
        >
            <div className="container-fluid fs-5">
                <div className="navbar-brand d-flex align-items-center" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
                    {/* <img src="/path/to/logo.png" alt="Logo" height="30" className="me-2" /> */}
                    <div className="d-flex flex-column">
                        <span className="fw-bold fs-5">Get Start Tec</span>
                        <span className="text-muted" style={{ fontSize: "12px" }}><i>From Idea to Innovation</i></span>
                    </div>
                </div>

                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleMenu}
                    aria-controls="navbarNav"
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {[
                            { path: "/", label: "Home" },
                            { path: "/about-us", label: "About Us" },
                            { path: "/services", label: "Services" },
                            { path: "/projects", label: "Projects" },
                            { path: "/contact-us", label: "Contact Us" },
                            { path: "/contact-us#quote", className: "get-quote", label: "Get a Quote", isButton: true }
                        ].map(({ path, label, isButton }) => (
                            <li className="nav-item me-4 fs-5" key={path}>
                                {isButton ? (
                                    <button
                                        className="btn btn-primary px-4 py-2"
                                        onClick={() => handleLinkClick(path)}
                                    >
                                        {label}
                                    </button>
                                ) : (
                                    <a
                                        className={`nav-link ${location.pathname === path ? "active" : ""}`}
                                        style={{ cursor: "pointer" }}
                                        onClick={() => handleLinkClick(path)}
                                    >
                                        {label}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
        </nav>
    );
};
