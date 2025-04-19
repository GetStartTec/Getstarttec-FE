export const Services = () => {
    const rings = [
        {
            label: 'FE',
            radius: 140,
            icons: [
                { src: "/images/html.png", alt: "HTML" },
                { src: "/images/css.png", alt: "CSS" },
                { src: "/images/react.png", alt: "React TS" },
                { src: "/images/bootstrap.png", alt: "Bootstrap" },
                { src: "/images/material.png", alt: "Material UI" },
            ],
        },
        {
            label: 'BE',
            radius: 100,
            icons: [
                { src: "/images/node.png", alt: "Node.js" },
                { src: "/images/php.png", alt: "PHP" },
                { src: "/images/java.png", alt: "Java" },
            ],
        },
        {
            label: 'DB',
            radius: 60,
            icons: [
                { src: "/images/mssql.png", alt: "MSSQL" },
                { src: "/images/mysql.png", alt: "MySQL" },
                { src: "/images/mongo.png", alt: "MongoDB" },
            ],
        },
    ];
    const industries = [
        {
            icon: '/images/education.jpg',
            name: 'Education',
            description: 'We build innovative solutions for e-learning platforms, learning management systems (LMS), and digital classrooms to support modern education.'
        },
        {
            icon: '/images/healthcare.jpg',
            name: 'Healthcare',
            description: 'We provide healthcare solutions for hospitals, clinics, and telemedicine services, including patient management systems and medical record applications.'
        },
        {
            icon: '/images/ecommerce.jpg',
            name: 'E-Commerce',
            description: 'We develop feature-rich e-commerce platforms with seamless user experiences, payment gateway integration, and product management systems.'
        },
        {
            icon: '/images/finance.jpg',
            name: 'Finance',
            description: 'Our fintech solutions cover online banking, mobile payment systems, and investment platforms with a focus on security and compliance.'
        },
        {
            icon: '/images/realestate.jpg',
            name: 'Real Estate',
            description: 'We create real estate management systems, property listing platforms, and customer relationship management (CRM) systems tailored for real estate businesses.'
        },
        {
            icon: '/images/manufacturing.jpg',
            name: 'Manufacturing',
            description: 'We develop custom ERP systems, production management tools, and IoT integration for smart manufacturing and inventory management.'
        },
        {
            icon: '/images/travels.jpg',
            name: 'Travel & Hospitality',
            description: 'We design travel booking systems, hotel management platforms, and customer service tools that enhance the travel and hospitality experience.'
        },
        {
            icon: '/images/automotive.jpg',
            name: 'Automotive',
            description: 'We provide solutions for automotive businesses including fleet management systems, service booking apps, and IoT-based vehicle monitoring platforms.'
        },
        {
            icon: '/images/logistics.jpg',
            name: 'Logistics & Supply Chain',
            description: 'Our logistics software solutions include real-time tracking, route optimization, and inventory management for supply chain efficiency.'
        },
        {
            icon: '/images/govt.jpg',
            name: 'Government & Public Sector',
            description: 'We develop solutions for digital governance, e-filing, citizen engagement platforms, and public services management systems.'
        },
        {
            icon: '/images/retail.jpg',
            name: 'Retail',
            description: 'We build integrated POS systems, inventory management, and customer engagement platforms for retail businesses looking to streamline their operations.'
        },
        {
            icon: '/images/telecommunication.jpg',
            name: 'Telecommunications',
            description: 'We design billing systems, customer service portals, and network management tools for telecom companies to enhance customer satisfaction.'
        },
        {
            icon: '/images/media.jpg',
            name: 'Media & Entertainment',
            description: 'Our software solutions cover media content management, streaming platforms, and digital rights management (DRM) for the entertainment industry.'
        },
        {
            icon: '/images/sports.jpg',
            name: 'Sports & Fitness',
            description: 'We build sports management systems, fitness tracking apps, and virtual training platforms to enhance the sports and fitness experience.'
        },
        {
            icon: '/images/insurence.jpg',
            name: 'Insurance',
            description: 'We provide policy management systems, claim processing tools, and digital solutions for the insurance industry.'
        },
        {
            icon: '/images/marketing.jpg',
            name: 'Marketing & Advertising',
            description: 'Our software solutions include ad campaign management systems, customer data analytics platforms, and digital marketing tools for businesses.'
        },
        {
            icon: '/images/legal.jpg',
            name: 'Legal',
            description: 'We create solutions for law firms and legal service providers, including case management systems, document automation, and client portals.'
        },
        {
            icon: '/images/ngo.jpg',
            name: 'Non-Profit & NGOs',
            description: 'We provide software solutions for non-profits including donor management systems, volunteer coordination, and fundraising platforms.'
        },
        {
            icon: '/images/startup.jpg',
            name: 'Tech Startups',
            description: 'We assist startups with scalable, cloud-native solutions, MVP development, and rapid prototyping to bring their innovative ideas to market faster.'
        },
    ];


    return (
        <>
            <div className="about-container d-flex flex-wrap mt-5 text-dark">
                <div className="col-md-7 p-4 mt-5">
                    <h2 className="mb-4">Services</h2>
                    <p>
                        <em>“We don’t just build software — we engineer solutions that empower businesses to thrive in the digital age.”</em>
                        <br /><br />
                        <strong>Get Start Tec</strong> is your technology partner for smart, scalable, and future-ready digital solutions. From intuitive designs to robust deployment, we bring full-cycle software development that’s tailored to your goals.
                        <br /><br />
                        We blend creativity, strategy, and the latest tech to deliver websites, web apps, and platforms that solve real problems and drive measurable growth.
                        <br /><br />
                        Let’s shape the future together. <strong>Get started with Get Start Tec.</strong>
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

            <div className="problem-section container my-5 py-5">
                <div className="row">
                    <div className="col-12 text-center mb-4">
                        <h2 className="fw-bold">The Problem We Solve</h2>
                        <p className="text-muted fst-italic">
                            "Clients come with a vision — we turn it into reality, fast and flawlessly."
                        </p>
                    </div>

                    <div className="col-md-4 text-center">
                        <div className="p-4 shadow rounded h-100">
                            <h4 className="text-danger">🌀 The Chaos</h4>
                            <p>
                                Many of our clients are juggling big ideas with limited time and resources. They need a tech partner who can quickly translate their vision into action — with clarity, speed, and zero guesswork.
                            </p>

                        </div>
                    </div>

                    <div className="col-md-4 text-center">
                        <div className="p-4 shadow rounded h-100">
                            <h4 className="text-primary">⚙️ Our Approach</h4>
                            <p>
                                We decode the vision, map the workflow, and build agile-first solutions — fast. No fuss, no overengineering. Just clean communication and quick results using the best tools in the stack.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4 text-center">
                        <div className="p-4 shadow rounded h-100">
                            <h4 className="text-success">🚀 The Result</h4>
                            <p>
                                From education platforms to e-commerce ecosystems, we’ve delivered high-impact software in record time — saving clients money, stress, and valuable time-to-market.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <div className="row align-items-center">

                    {/* Left: Tech Stack Content */}
                    <div className="col-md-6 tech-stack-content text-end pe-4">
                        <h3 className="fw-bold mb-3">Tech Stack That Powers Our Solutions 💡</h3>
                        <p>
                            We thrive on building scalable, high-performing apps using battle-tested technologies.
                            Our stack is carefully curated to ensure speed, flexibility, and top-notch user experience.
                        </p>
                        <ul className="list-unstyled mt-3 mb-3">
                            <li><strong>🖼 Frontend:</strong> React, HTML5, CSS3, Bootstrap, Material UI</li>
                            <li><strong>🧠 Backend:</strong> Node.js, Java (Jakarta EE), PHP</li>
                            <li><strong>📊 Database:</strong> MySQL, MongoDB, MSSQL</li>
                            {/* <li><strong>☁️ DevOps & Infra:</strong> Docker, Railway, Netlify, Vercel</li>
                            <li><strong>🔐 Auth:</strong> JWT, OAuth2.0, Google Sign-In</li>
                            <li><strong>🛠 Tools:</strong> GitHub, Postman, VSCode, Figma</li> */}
                        </ul>
                        <p>
                            Whether you're a startup or an enterprise, we bring together the right tools for rapid
                            prototyping, seamless integrations, and future-ready architecture.
                        </p>
                    </div>

                    {/* Right: Rotating Tech Rings */}
                    <div className="col-md-6">
                        <div className="tech-rings-container position-relative mx-auto">
                            <div className="center-logo">
                                <img src="/images/core-stack.png" alt="Core Tech" />
                            </div>
                            {rings.map(({ label, radius, icons }, index) => (
                                <div
                                    key={label}
                                    className="ring"
                                    style={{
                                        width: `${radius * 3}px`,
                                        height: `${radius * 3}px`,
                                        animation: `rotate ${50 + index * 2}s linear infinite`,
                                    }}
                                >
                                    {icons.map((icon, i) => {
                                        const angle = (360 / icons.length) * i;
                                        const rad = (angle * Math.PI) / 180;
                                        const offset = (radius * 3) / 2;
                                        const x = offset * Math.cos(rad);
                                        const y = offset * Math.sin(rad);

                                        return (
                                            <div
                                                key={icon.alt}
                                                className="icon-node"
                                                style={{
                                                    left: `calc(50% + ${x}px)`,
                                                    top: `calc(50% + ${y}px)`,
                                                    objectFit:'cover',
                                                    transform: `translate(-50%, -50%) rotate(${-angle}deg)`,
                                                }}
                                            >
                                                <img src={icon.src} alt={icon.alt} />
                                            </div>
                                        );
                                    })}

                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            <div className="industries-served">
                <h2>Industries We Serve</h2>
                <div className="industry-cards">
                    {industries.map(({ icon, name, description }, index) => (
                        <div key={name} className="industry-card">
                            <div className="industry-icon">
                                <img src={icon} alt={name} />
                            </div>
                            <div className="industry-info">
                                <h3>{name}</h3>
                                <p>{description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <section className="why-choose-us py-5">
                <div className="container">
                    {/* Intro */}
                    <div className="row mb-5">
                        <div className="col-12 text-center">
                            <h2 className="mb-3">Why Choose Us</h2>
                            <p className="lead mx-auto" style={{ maxWidth: '700px' }}>
                                At <strong>Get Start Tec</strong>, we blend agile practices, transparent pricing,
                                and one‑year of free support to deliver your project on time and on budget—no surprises, no hidden fees.
                            </p>
                        </div>
                    </div>

                    {/* 3 Cards in One Row */}
                    <div className="row justify-content-center">
                        {[
                            {
                                title: 'Static Website',
                                price: '₹5,999',
                                features: [
                                    'Responsive HTML/CSS/JS',
                                    'Bootstrap & Material UI',
                                    '1‑month delivery',
                                    '1 year free support',
                                    'Domain not included'
                                ],
                                button: 'Get Started'
                            },
                            {
                                title: 'Dynamic (BE + DB Integration)',
                                price: '₹7,999',
                                features: [
                                    'Node.js / PHP / Java backend',
                                    'MySQL, MSSQL or MongoDB',
                                    'API + Admin panel',
                                    '1‑month delivery',
                                    '1 year free support',
                                    'Domain not included'
                                ],
                                button: 'Get Started'
                            },
                            {
                                title: '🌐 Domain Registration',
                                price: '₹2,000',
                                features: [
                                    '✔️ 1-Year Domain Ownership',
                                    '✔️ DNS Setup Included',
                                    '❌ Domain cost not included in base packages'
                                ],
                                button: 'Get Domain'
                            }
                        ].map((plan) => (
                            <div key={plan.title} className="col-md-6 col-lg-4 mb-4">
                                <div className="card shadow-sm border-light rounded-3 h-100">
                                    <div className="card-body d-flex flex-column text-center">
                                        <h3 className="card-title">{plan.title}</h3>
                                        <div className="price my-3">
                                            <span className="h2 fw-bold text-success">{plan.price}</span>
                                        </div>
                                        <ul className="list-unstyled mb-4 text-start px-3">
                                            {plan.features.map((feat, idx) => (
                                                <li key={idx} className="mb-2">
                                                    {plan.title !== '🌐 Domain Registration' ? (
                                                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                                                    ) : null}
                                                    {feat}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="mt-auto">
                                            <button className="btn btn-primary px-4 py-2">
                                                {plan.button}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    );
};
