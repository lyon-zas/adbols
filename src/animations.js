export function initializeAnimations() {
  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animateElements = document.querySelectorAll('.service-card, .project-card, .stat, .about-text, .about-image, .client-logo, .testimonial, .map-container')
  animateElements.forEach(el => {
    observer.observe(el)
  })

  // Enhanced parallax effect for hero section
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset
    const heroBgImage = document.querySelector('.hero-bg-image')
    const heroOverlay = document.querySelector('.hero-overlay')
    const heroContent = document.querySelector('.hero-content')
    
    if (heroBgImage && scrolled < window.innerHeight) {
      heroBgImage.style.transform = `translateY(${scrolled * 0.3}px) scale(${1 + scrolled * 0.0001})`
    }
    
    if (heroOverlay && scrolled < window.innerHeight) {
      const opacity = Math.max(0.7, 1 - scrolled * 0.0008)
      heroOverlay.style.opacity = opacity
    }
    
    if (heroContent && scrolled < window.innerHeight) {
      heroContent.style.transform = `translateY(${scrolled * 0.2}px)`
    }
  })

  // Enhanced hover effects for buttons and cards
  const cards = document.querySelectorAll('.service-card, .project-card')
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-8px) scale(1.02)'
      card.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    })
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)'
    })
  })

  // Enhanced button interactions
  const heroButtons = document.querySelectorAll('.hero-buttons .btn')
  heroButtons.forEach((btn, index) => {
    btn.style.animationDelay = `${2.1 + index * 0.2}s`
    
    btn.addEventListener('mouseenter', () => {
      btn.style.transform = 'translateY(-5px) scale(1.05)'
      btn.style.boxShadow = btn.classList.contains('btn-primary') 
        ? '0 20px 40px rgba(37, 99, 235, 0.6)'
        : '0 20px 40px rgba(245, 158, 11, 0.6)'
    })
    
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translateY(0) scale(1)'
      btn.style.boxShadow = btn.classList.contains('btn-primary')
        ? '0 8px 25px rgba(37, 99, 235, 0.4)'
        : '0 8px 25px rgba(245, 158, 11, 0.4)'
    })
  })
  
  // Animate statistics on scroll
  const statNumbers = document.querySelectorAll('.stat-number')
  const animateStats = () => {
    statNumbers.forEach(stat => {
      const rect = stat.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const finalValue = stat.textContent
        const numericValue = parseInt(finalValue)
        if (!isNaN(numericValue) && !stat.dataset.animated) {
          stat.dataset.animated = 'true'
          animateNumber(stat, 0, numericValue, 2000)
        }
      }
    })
  }
  
  function animateNumber(element, start, end, duration) {
    const startTime = performance.now()
    const suffix = element.textContent.replace(/[0-9]/g, '')
    
    function update(currentTime) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const current = Math.floor(start + (end - start) * progress)
      element.textContent = current + suffix
      
      if (progress < 1) {
        requestAnimationFrame(update)
      }
    }
    
    requestAnimationFrame(update)
  }
  
  window.addEventListener('scroll', animateStats)
  animateStats() // Check on load
}