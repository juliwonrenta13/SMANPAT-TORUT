// Initialize AOS animation library
document.addEventListener('DOMContentLoaded', function() {
  // Check if AOS is already defined
  if (typeof AOS === 'undefined') {
    console.warn('AOS is not defined. Make sure you have included the AOS library.');
  } else {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }

  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();

  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  
  menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('show');
    
    // Change icon based on menu state
    if (navLinks.classList.contains('show')) {
      menuToggle.innerHTML = '<i class="fas fa-times"></i>';
    } else {
      menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }
  });

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  const scrollToTopBtn = document.getElementById('scrollToTop');
  
  window.addEventListener('scroll', function() {
    // Navbar effect
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    // Scroll to top button visibility
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
    
    // Update active menu item based on scroll position
    updateActiveMenuOnScroll();
  });

  // Scroll to top button
  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Smooth scrolling for navigation links
  const navItems = document.querySelectorAll('.nav-links a');
  
  navItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      scrollToSection(targetId);
      
      // Close mobile menu if open
      if (navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });
  });

  // Lightbox functionality
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeLightbox = document.querySelector('.close-lightbox');
  
  closeLightbox.addEventListener('click', function() {
    lightbox.classList.remove('show');
    document.body.style.overflow = 'auto';
  });
  
  // Close lightbox when clicking outside the image
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
      lightbox.classList.remove('show');
      document.body.style.overflow = 'auto';
    }
  });

  // Initialize any interactive elements
  initializeInteractiveElements();
});

// Function to scroll to a section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  
  if (section) {
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const sectionTop = section.offsetTop - navbarHeight;
    
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth'
    });
    
    // Update URL hash without jumping
    history.pushState(null, null, `#${sectionId}`);
    
    // Update active menu item
    updateActiveMenuItem(sectionId);
  }
}

// Function to update active menu item
function updateActiveMenuItem(sectionId) {
  const navItems = document.querySelectorAll('.nav-links a');
  
  navItems.forEach(item => {
    item.classList.remove('active');
    
    if (item.getAttribute('href') === `#${sectionId}`) {
      item.classList.add('active');
    }
  });
}

// Function to update active menu item based on scroll position
function updateActiveMenuOnScroll() {
  const sections = document.querySelectorAll('section[id]');
  const navbarHeight = document.querySelector('.navbar').offsetHeight;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - navbarHeight - 100;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      updateActiveMenuItem(sectionId);
    }
  });
}

// Function to open lightbox
function openLightbox(imgSrc) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  
  lightboxImg.src = imgSrc;
  lightbox.classList.add('show');
  document.body.style.overflow = 'hidden';
}

// Function to show ekstrakurikuler info
function showInfo(name) {
  alert(`Kamu memilih ekstrakurikuler: ${name}`);
}

// Function to show prestasi info
function showPrestasi(message) {
  alert(`Informasi Prestasi: ${message}`);
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();
  
  const nameInput = document.getElementById('nama');
  
  if (nameInput.value.trim() !== "") {
    alert(`Terima kasih telah menghubungi kami, ${nameInput.value}!`);
    event.target.reset();
  } else {
    alert("Mohon isi nama Anda.");
  }
  
  return false;
}

// Function to initialize interactive elements
function initializeInteractiveElements() {
  // Add hover effects to cards
  const cards = document.querySelectorAll('.card, .galeri-item, .fasilitas-item, .prestasi-item, .ekskul-item');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.classList.add('hover');
    });
    
    card.addEventListener('mouseleave', function() {
      this.classList.remove('hover');
    });
  });
  
  // Add animation to elements when they come into view
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  animatedElements.forEach(element => {
    element.classList.add('fade-in');
  });
}


