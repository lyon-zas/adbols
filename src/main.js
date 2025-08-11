import './style.css'
import { initializeNavigation } from './navigation.js'
import { initializeAnimations } from './animations.js'

document.querySelector('#app').innerHTML = `
  <header class="header">
    <nav class="nav">
      <div class="nav-container">
        <div class="nav-brand">
          <h2>Adbols</h2>
        </div>
        <ul class="nav-menu">
          <li><a href="#home" class="nav-link active">Home</a></li>
          <li><a href="#about" class="nav-link">About</a></li>
          <li><a href="#services" class="nav-link">Services</a></li>
          <li><a href="#projects" class="nav-link">Projects</a></li>
          <li><a href="#clients" class="nav-link">Clients</a></li>
          <li><a href="#contact" class="nav-link">Contact</a></li>
        </ul>
        <div class="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  </header>

  <main>
    <!-- Home Section -->
    <section id="home" class="hero">
              <div class="hero-background">
          <video autoplay muted loop playsinline class="hero-bg-video">
            <source src="/home_bg_1.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <div class="hero-overlay"></div>
        </div>
      
      <div class="hero-content">
        <div class="hero-decorative-line">
          <div class="line-segment"></div>
          <div class="dot"></div>
          <div class="line-segment"></div>
        </div>
        
        <h1 class="hero-title">
          <span class="title-line">Expert Project Management</span>
          <span class="title-line">& Construction Planning for the</span>
          <span class="title-line highlight">Modern Era</span>
        </h1>
        <div class="hero-stats">
          <div class="stat-card">
            <div class="stat-number">20+</div>
            <div class="stat-label">Years Experience</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">98%</div>
            <div class="stat-label">Client Satisfaction</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">50%</div>
            <div class="stat-label">Time <br>Saved</div>
          </div>
        </div>
        
        <div class="hero-buttons">
          <a href="#projects" class="btn btn-primary">
            <span class="btn-icon">⚡</span>
            <span>View Our Work</span>
            <span class="btn-arrow">→</span>
          </a>
          <a href="#contact" class="btn btn-secondary">
            <span class="btn-icon">🏗️</span>
            <span>Get In Touch</span>
          </a>
        </div>
        
        <div class="scroll-indicator">
          <span class="scroll-text">Scroll to explore</span>
          <div class="scroll-mouse">
            <div class="scroll-wheel"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
      <div class="container">
        <div class="about-content">
          <div class="about-text-section">
            <h2 class="about-title">ABOUT</h2>
            <div class="about-underline"></div>
            <p>
              At Adbols, we specialise in delivering high-impact engineering and project planning solutions across infrastructure, construction, and transport sectors. With a strong foundation in tunnel, rail, and geotechnical engineering, we provide design, planning, advisory, and assurance services for complex infrastructure projects in the UK and beyond.
            </p>
            <p>
              Over the past two decades, we have evolved into a trusted partner for clients seeking dependable planning engineering expertise. From early-stage tender support to construction delivery and claims management, we bring clarity, structure, and results to every phase of the project lifecycle.
            </p>
            <p>
              Our approach is built around value, creativity, and collaboration:
            </p>
            <p>
              <strong>Value:</strong> We focus on getting it right the first time—combining award-winning planning strategies with practical engineering insights to enhance programme certainty, safety, and sustainability.
            </p>
            <p>
              <strong>Creativity:</strong> With hands-on experience in engineering and construction environments, we challenge conventional thinking to deliver innovative yet buildable solutions.
            </p>
            <p>
              <strong>Agile & Responsive:</strong> We adopt a lean, client-focused mindset and work seamlessly with multi-disciplinary teams to deliver outstanding outcomes. Our collaborative planning techniques have helped clients not only meet—but exceed—delivery targets.
            </p>
            <p>
              Whether you're looking for expert planning input, construction support, or strategic claims advice, Adbols is here to help. Let's build better, together.
            </p>
          </div>
          <div class="about-image-section">
            <img src="/millennial-asia-businessmen-businesswomen-meeting-brainstorming-ideas-about-new-paperwork-project-colleagues-working-together-planning-success-strategy-enjoy-teamwork-small-modern-night-office.jpg" alt="Team Collaboration and Planning" />
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">SERVICES</h2>
          
        </div>

        <div class="services-grid">
          <div class="service-card">
            <div class="service-image">
              <img src="professionals-presenting-financial-data-meeting.jpg" alt="Programme Management" />
            </div>
            <div class="service-content">
              <h3>Programme Management</h3>
              <p>Comprehensive programme management services from initial planning through to project completion. We ensure your projects stay on track with detailed scheduling, resource allocation, and progress monitoring.</p>
            </div>
          </div>
          
          <div class="service-card">
            <div class="service-image">
              <img src="group-multiethnic-busy-people-working-office.jpg" alt="Cost Planning" />
            </div>
            <div class="service-content">
              <h3>Cost Planning</h3>
              <p>Strategic cost planning and budget management to ensure your projects remain financially viable. Our expertise helps you identify cost-saving opportunities while maintaining quality standards.</p>
            </div>
          </div>
          
          <div class="service-card">
            <div class="service-image">
              <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Early Contractor Involvement" />
            </div>
            <div class="service-content">
              <h3>Early Contractor Involvement</h3>
              <p>Get contractors involved early in the planning process to leverage their expertise and ensure buildability. This collaborative approach reduces risks and improves project outcomes.</p>
            </div>
          </div>
          
          <div class="service-card">
            <div class="service-image">
              <img src="aerial-view-cityscape.jpg" alt="Water Sector Planning" />
            </div>
            <div class="service-content">
              <h3>Water Sector Planning</h3>
              <p>Specialized planning services for water infrastructure projects including treatment plants, pipelines, and water management systems. We understand the unique challenges of water sector projects.</p>
            </div>
          </div>
          
          <div class="service-card">
            <div class="service-image">
              <img src="researchers-looking-alternative-energy-souces.jpg" alt="Renewable Energy Planning" />
            </div>
            <div class="service-content">
              <h3>Renewable Energy Planning</h3>
              <p>Expert planning for renewable energy projects including solar, wind, and hydroelectric installations. We help navigate the complexities of renewable energy development and construction.</p>
            </div>
          </div>
          
          <div class="service-card">
            <div class="service-image">
              <img src="/millennial-asia-businessmen-businesswomen-meeting-brainstorming-ideas-about-new-paperwork-project-colleagues-working-together-planning-success-strategy-enjoy-teamwork-small-modern-night-office.jpg" alt="Team Collaboration and Planning" />
            </div>
            <div class="service-content">
              <h3>Infrastructure Planning</h3>
              <p>Comprehensive infrastructure planning for roads, bridges, utilities, and public works projects. Our experience ensures efficient delivery of critical infrastructure developments.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="projects">
      <div class="container">
        <h2 class="projects-title">OUR PROJECTS</h2>
        <div class="projects-underline"></div>
        
        <!-- Project Gallery -->
        <div class="project-gallery">
          <div class="gallery-item large">
            <img src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Major Infrastructure Project" />
            <div class="gallery-overlay">
              <h3>Major Infrastructure Development</h3>
              <p>£50M+ Commercial Complex</p>
            </div>
          </div>
          <div class="gallery-item">
            <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Residential Development" />
            <div class="gallery-overlay">
              <h3>Residential Complex</h3>
              <p>200+ Unit Development</p>
            </div>
          </div>
          <div class="gallery-item">
            <img src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Industrial Project" />
            <div class="gallery-overlay">
              <h3>Industrial Facility</h3>
              <p>Manufacturing Plant</p>
            </div>
          </div>
          <div class="gallery-item">
            <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Office Development" />
            <div class="gallery-overlay">
              <h3>Office Development</h3>
              <p>Corporate Headquarters</p>
            </div>
          </div>
          <div class="gallery-item">
            <img src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Mixed Use Development" />
            <div class="gallery-overlay">
              <h3>Mixed Use Development</h3>
              <p>Retail & Residential</p>
            </div>
          </div>
          <div class="gallery-item">
            <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Infrastructure Project" />
            <div class="gallery-overlay">
              <h3>Infrastructure Upgrade</h3>
              <p>Transport Hub</p>
            </div>
          </div>
        </div>
        
        
      </div>
    </section>

    <!-- Clients Section -->
    <section id="clients" class="clients">
      <div class="clients-container">
        <div class="section-header">
          <h2 class="section-title">Trusted by Industry Leaders</h2>
          <p class="section-subtitle">We're proud to work with some of the world's most innovative companies</p>
        </div>
        <div class="clients-carousel">
          <div class="clients-track">
            <div class="client-logo">
              <img src="/companies_logos/SRE Logo.png" alt="SRE" />
            </div>
            <div class="client-logo">
              <img src="/companies_logos/LOGO-CLANCYDOCWRA.png" alt="Clancy Docwra" />
            </div>
            <div class="client-logo">
              <img src="/companies_logos/LOGO-CMDP-COSTAIN-MWH.JPG" alt="CMDP Costain MWH" />
            </div>
            <div class="client-logo">
              <img src="/companies_logos/R&B Logo.jpg" alt="R&B" />
            </div>
            <div class="client-logo">
              <img src="/companies_logos/Econotech Logo.png" alt="Econotech" />
            </div>
            <div class="client-logo">
              <img src="/companies_logos/LEC.jpg" alt="LEC" />
            </div>
            <div class="client-logo">
              <img src="/companies_logos/LOGO-ACWA.jpg" alt="ACWA" />
            </div>
            <div class="client-logo">
              <img src="/companies_logos/ALS.jpg" alt="ALS" />
            </div>
            <div class="client-logo">
              <img src="/companies_logos/Bridges Logo.png" alt="Bridges" />
            </div>
            <!-- Duplicate logos for seamless loop -->
            <div class="client-logo">
              <img src="/companies_logos/SRE Logo.png" alt="SRE" />
            </div>
            <div class="client-logo">
              <img src="/companies_logos/LOGO-CLANCYDOCWRA.png" alt="Clancy Docwra" />
            </div>
            <div class="client-logo">
              <img src="/companies_logos/LOGO-CMDP-COSTAIN-MWH.JPG" alt="CMDP Costain MWH" />
            </div>
            <div class="client-logo">
              <img src="/companies_logos/R&B Logo.jpg" alt="R&B" />
            </div>
            <div class="client-logo">
              <img src="/companies_logos/Econotech Logo.png" alt="Econotech" />
            </div>
            <div class="client-logo">
              <img src="/companies_logos/LEC.jpg" alt="LEC" />
            </div>
            <div class="client-logo">
              <img src="/companies_logos/LOGO-ACWA.jpg" alt="ACWA" />
            </div>
            <div class="client-logo">
              <img src="/companies_logos/ALS.jpg" alt="ALS" />
            </div>
            <div class="client-logo">
              <img src="/companies_logos/Bridges Logo.png" alt="Bridges" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Get In Touch</h2>
          <p class="section-subtitle">Ready to start your next project?</p>
        </div>
        <div class="contact-content">
          <div class="contact-info">
            <h3>Let's Discuss Your Project</h3>
            <p>We're here to help you achieve your project goals. Contact us today for a free consultation.</p>
            <div class="contact-details">
              <div class="contact-item">
                <strong>📧 Email:</strong>
                <span>hello@adbols.com</span>
              </div>
              <div class="contact-item">
                <strong>📞 Phone:</strong>
                <span>+44 (0) 7506 000 000</span>
              </div>
              <div class="contact-item">
                <strong>📍 Address:</strong>
                <span>Elder House, Suite 158, 548-550 Elder House, Milton Keynes, England, MK9 1LR</span>
              </div>
            </div>
          </div>
          <form class="contact-form">
            <div class="form-group">
              <input type="text" placeholder="Your Name" required>
            </div>
            <div class="form-group">
              <input type="email" placeholder="Your Email" required>
            </div>
            <div class="form-group">
              <input type="text" placeholder="Company Name">
            </div>
            <div class="form-group">
              <select required>
                <option value="">Select Service</option>
                <option value="planning">Project Planning</option>
                <option value="agile">Agile Management</option>
                <option value="leadership">Team Leadership</option>
                <option value="risk">Risk Management</option>
                <option value="qa">Quality Assurance</option>
                <option value="monitoring">Performance Monitoring</option>
              </select>
            </div>
            <div class="form-group">
              <textarea placeholder="Tell us about your project" rows="5" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send Message</button>
          </form>
        </div>
        <div class="contact-map">
          <h3>Visit Our Office</h3>
          <div class="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78544.00950197395!2d-0.8539278959401475!3d52.034200462533306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48770009ee271391%3A0x5515d41b57ca9a52!2sElder%20House!5e0!3m2!1sen!2sng!4v1754911372602!5m2!1sen!2sng" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <h3>Adbols</h3>
          <p>Delivering excellence in project management since 2008.</p>
        </div>
        <div class="footer-links">
          <div class="footer-column">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Project Planning</a></li>
              <li><a href="#services">Agile Management</a></li>
              <li><a href="#services">Team Leadership</a></li>
              <li><a href="#services">Risk Management</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#projects">Our Work</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Adbols. All rights reserved.</p>
      </div>
    </div>
  </footer>
`

// Initialize functionality
initializeNavigation()
initializeAnimations()