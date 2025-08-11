export function initializeNavigation() {
  const navToggle = document.querySelector('.nav-toggle')
  const navMenu = document.querySelector('.nav-menu')
  const navLinks = document.querySelectorAll('.nav-link')
  const header = document.querySelector('.header')

  // Mobile menu toggle
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active')
    navToggle.classList.toggle('active')
  })

  // Smooth scrolling for navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const targetId = link.getAttribute('href')
      const targetSection = document.querySelector(targetId)
      
      if (targetSection) {
        const headerHeight = header.offsetHeight
        const targetPosition = targetSection.offsetTop - headerHeight
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        })
      }

      // Close mobile menu
      navMenu.classList.remove('active')
      navToggle.classList.remove('active')
    })
  })

  // Update active navigation link on scroll
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + header.offsetHeight + 100

    navLinks.forEach(link => {
      const targetId = link.getAttribute('href')
      const targetSection = document.querySelector(targetId)
      
      if (targetSection) {
        const sectionTop = targetSection.offsetTop
        const sectionBottom = sectionTop + targetSection.offsetHeight
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          navLinks.forEach(l => l.classList.remove('active'))
          link.classList.add('active')
        }
      }
    })

    // Header background on scroll
    if (window.scrollY > 100) {
      header.classList.add('scrolled')
    } else {
      header.classList.remove('scrolled')
    }
  })

  // Form submission
  const contactForm = document.querySelector('.contact-form')
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    // Simple form validation and submission simulation
    const formData = new FormData(contactForm)
    
    // Show success message
    const button = contactForm.querySelector('button[type="submit"]')
    const originalText = button.textContent
    button.textContent = 'Message Sent!'
    button.style.backgroundColor = '#10b981'
    
    setTimeout(() => {
      button.textContent = originalText
      button.style.backgroundColor = ''
      contactForm.reset()
    }, 3000)
  })
}