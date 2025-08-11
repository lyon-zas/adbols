(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function p(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(s){if(s.ep)return;s.ep=!0;const t=p(s);fetch(s.href,t)}})();function b(){const d=document.querySelector(".nav-toggle"),r=document.querySelector(".nav-menu"),p=document.querySelectorAll(".nav-link"),c=document.querySelector(".header");d.addEventListener("click",()=>{r.classList.toggle("active"),d.classList.toggle("active")}),p.forEach(t=>{t.addEventListener("click",o=>{o.preventDefault();const l=t.getAttribute("href"),e=document.querySelector(l);if(e){const i=c.offsetHeight,a=e.offsetTop-i;window.scrollTo({top:a,behavior:"smooth"})}r.classList.remove("active"),d.classList.remove("active")})}),window.addEventListener("scroll",()=>{const t=window.scrollY+c.offsetHeight+100;p.forEach(o=>{const l=o.getAttribute("href"),e=document.querySelector(l);if(e){const i=e.offsetTop,a=i+e.offsetHeight;t>=i&&t<a&&(p.forEach(n=>n.classList.remove("active")),o.classList.add("active"))}}),window.scrollY>100?c.classList.add("scrolled"):c.classList.remove("scrolled")});const s=document.querySelector(".contact-form");s.addEventListener("submit",t=>{t.preventDefault(),new FormData(s);const o=s.querySelector('button[type="submit"]'),l=o.textContent;o.textContent="Message Sent!",o.style.backgroundColor="#10b981",setTimeout(()=>{o.textContent=l,o.style.backgroundColor="",s.reset()},3e3)})}function x(){const d={threshold:.1,rootMargin:"0px 0px -50px 0px"},r=new IntersectionObserver(e=>{e.forEach(i=>{i.isIntersecting&&i.target.classList.add("animate-in")})},d);document.querySelectorAll(".service-card, .project-card, .stat, .about-text, .about-image, .client-logo, .testimonial, .map-container").forEach(e=>{r.observe(e)}),window.addEventListener("scroll",()=>{const e=window.pageYOffset,i=document.querySelector(".hero-bg-image"),a=document.querySelector(".hero-overlay"),n=document.querySelector(".hero-content");if(i&&e<window.innerHeight&&(i.style.transform=`translateY(${e*.3}px) scale(${1+e*1e-4})`),a&&e<window.innerHeight){const v=Math.max(.7,1-e*8e-4);a.style.opacity=v}n&&e<window.innerHeight&&(n.style.transform=`translateY(${e*.2}px)`)}),document.querySelectorAll(".service-card, .project-card").forEach(e=>{e.addEventListener("mouseenter",()=>{e.style.transform="translateY(-8px) scale(1.02)",e.style.transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"}),e.addEventListener("mouseleave",()=>{e.style.transform="translateY(0) scale(1)"})}),document.querySelectorAll(".hero-buttons .btn").forEach((e,i)=>{e.style.animationDelay=`${2.1+i*.2}s`,e.addEventListener("mouseenter",()=>{e.style.transform="translateY(-5px) scale(1.05)",e.style.boxShadow=e.classList.contains("btn-primary")?"0 20px 40px rgba(37, 99, 235, 0.6)":"0 20px 40px rgba(245, 158, 11, 0.6)"}),e.addEventListener("mouseleave",()=>{e.style.transform="translateY(0) scale(1)",e.style.boxShadow=e.classList.contains("btn-primary")?"0 8px 25px rgba(37, 99, 235, 0.4)":"0 8px 25px rgba(245, 158, 11, 0.4)"})});const t=document.querySelectorAll(".stat-number"),o=()=>{t.forEach(e=>{const i=e.getBoundingClientRect();if(i.top<window.innerHeight&&i.bottom>0){const a=e.textContent,n=parseInt(a);!isNaN(n)&&!e.dataset.animated&&(e.dataset.animated="true",l(e,0,n,2e3))}})};function l(e,i,a,n){const v=performance.now(),g=e.textContent.replace(/[0-9]/g,"");function m(h){const f=h-v,u=Math.min(f/n,1),y=Math.floor(i+(a-i)*u);e.textContent=y+g,u<1&&requestAnimationFrame(m)}requestAnimationFrame(m)}window.addEventListener("scroll",o),o()}document.querySelector("#app").innerHTML=`
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
        <img src="/main-bg.jpg" alt="Modern Residential Development" class="hero-bg-image" />
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
        
        <p class="hero-subtitle">
          Adbols specialises in delivering high-impact engineering and project planning solutions across infrastructure, construction, and transport sectors — whether you manage 5 projects or 5,000.
        </p>
        
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
            <div class="stat-label">Time Saved</div>
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
            <img src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Construction Site with Cranes" />
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services">
      <div class="container">
        <h2 class="services-title">SERVICES</h2>
        <div class="services-underline"></div>
        <div class="services-grid">
          <div class="service-card">
            <div class="service-image">
              <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Tender Planning" />
            </div>
            <div class="service-content">
              <h3>Tender Planning</h3>
              <p>With 20+ years of Tendering experience, we would be happy to help. If you require a contractually compliant programme to accompany your tender, built from first principle designs then get in touch.</p>
            </div>
          </div>
          <div class="service-card">
            <div class="service-image">
              <img src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Construction Planning" />
            </div>
            <div class="service-content">
              <h3>Construction Planning</h3>
              <p>Whether it's converting design drawings into a workable Construction schedule or assisting a Site with Construction / Recovery Planning, including Collaborative Planning techniques, we have a wealth of experience.</p>
            </div>
          </div>
          <div class="service-card">
            <div class="service-image">
              <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Forensic Claims Planning" />
            </div>
            <div class="service-content">
              <h3>Forensic Claims Planning</h3>
              <p>A vast experience in Construction forensic claims has been gained over the last 20+ years. This would include presenting programme delay claim analysis at trilaterals and preparing detailed case material for claims amounting to £1m's.</p>
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
        
        <!-- Project Video Section -->
        <div class="project-video-section">
          <h3>Project Showcase</h3>
          <div class="video-grid">
            <div class="video-item">
              <video controls poster="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600">
                <source src="https://videos.pexels.com/video-files/3196036/3196036-uhd_2560_1440_25fps.mp4" type="video/mp4">
                Your browser does not support the video tag.
              </video>
              <h4>Time-lapse: Commercial Development</h4>
            </div>
            <div class="video-item">
              <video controls poster="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600">
                <source src="https://videos.pexels.com/video-files/3196036/3196036-uhd_2560_1440_25fps.mp4" type="video/mp4">
                Your browser does not support the video tag.
              </video>
              <h4>Project Progress Documentation</h4>
            </div>
          </div>
        </div>
        
        <div class="projects-grid">
          <div class="project-card">
            <div class="project-content">
              <h3>Case Study: Major Infrastructure Project</h3>
              <p><strong>Challenge:</strong> Complex multi-phase development with tight deadlines and budget constraints.</p>
              <p><strong>Solution:</strong> Implemented collaborative planning techniques and lean construction methods.</p>
              <p><strong>Result:</strong> Delivered 3 months ahead of schedule, 15% under budget.</p>
              <div class="project-stats">
                <div class="stat-item">
                  <span class="stat-number">£50M+</span>
                  <span class="stat-label">Project Value</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">24 Months</span>
                  <span class="stat-label">Duration</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">200+</span>
                  <span class="stat-label">Workers</span>
                </div>
              </div>
            </div>
          </div>
          <div class="project-card">
            <div class="project-content">
              <h3>Case Study: Residential Development</h3>
              <p><strong>Challenge:</strong> High-density residential project with environmental constraints.</p>
              <p><strong>Solution:</strong> Advanced scheduling and risk management protocols.</p>
              <p><strong>Result:</strong> Zero safety incidents, completed on time with quality awards.</p>
              <div class="project-stats">
                <div class="stat-item">
                  <span class="stat-number">200+</span>
                  <span class="stat-label">Units</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">18 Months</span>
                  <span class="stat-label">Duration</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">Zero</span>
                  <span class="stat-label">Incidents</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Clients Section -->
    <section id="clients" class="clients">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Trusted by Industry Leaders</h2>
          <p class="section-subtitle">We're proud to work with some of the world's most innovative companies</p>
        </div>
        <div class="clients-grid">
          <div class="client-logo">
            <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200&h=100" alt="Client 1" />
          </div>
          <div class="client-logo">
            <img src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=200&h=100" alt="Client 2" />
          </div>
          <div class="client-logo">
            <img src="https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=200&h=100" alt="Client 3" />
          </div>
          <div class="client-logo">
            <img src="https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=200&h=100" alt="Client 4" />
          </div>
          <div class="client-logo">
            <img src="https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=200&h=100" alt="Client 5" />
          </div>
          <div class="client-logo">
            <img src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=200&h=100" alt="Client 6" />
          </div>
        </div>
        <div class="client-testimonials">
          <div class="testimonial">
            <blockquote>
              "ProManage Solutions transformed our project delivery process. Their expertise and dedication resulted in a 40% improvement in our project success rate."
            </blockquote>
            <cite>
              <strong>Sarah Johnson</strong>
              <span>CEO, TechCorp Industries</span>
            </cite>
          </div>
          <div class="testimonial">
            <blockquote>
              "Working with ProManage was a game-changer. They brought structure and clarity to our complex initiatives, delivering exceptional results on time and within budget."
            </blockquote>
            <cite>
              <strong>Michael Chen</strong>
              <span>Director of Operations, Global Solutions Inc.</span>
            </cite>
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
                <span>+1 (555) 123-4567</span>
              </div>
              <div class="contact-item">
                <strong>📍 Address:</strong>
                <span>123 Business District, Suite 100<br>New York, NY 10001</span>
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878459418!3d40.74844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1635959542165!5m2!1sen!2sus" 
                    width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
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
`;b();x();
