// script.js — Prasanth P Socials — Neo-Brutalist interactions

// Mobile menu toggle
const mobileToggle = document.getElementById('mobile-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileToggle && mobileMenu) {
  mobileToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    const spans = mobileToggle.querySelectorAll('span');
    if (mobileMenu.classList.contains('active')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '1';
      spans[2].style.transform = '';
    }
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      const spans = mobileToggle.querySelectorAll('span');
      spans[0].style.transform = '';
      spans[1].style.opacity = '1';
      spans[2].style.transform = '';
    });
  });
}

// Intersection Observer for scroll-triggered animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections for scroll animation
document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(section);
});

// Make hero visible immediately
const heroSection = document.querySelector('.hero');
if (heroSection) {
  heroSection.style.opacity = '1';
  heroSection.style.transform = 'translateY(0)';
}

// Add ripple/press effect to link cards
document.querySelectorAll('.link-card').forEach(card => {
  card.addEventListener('mousedown', () => {
    card.style.transform = 'translate(2px, 2px)';
    card.style.boxShadow = '2px 2px 0px 0px var(--black)';
  });

  card.addEventListener('mouseup', () => {
    card.style.transform = '';
    card.style.boxShadow = '';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.boxShadow = '';
  });
});

// Profile flip toggle
const profileContainer = document.getElementById('profile-container');
if (profileContainer) {
  profileContainer.addEventListener('click', () => {
    profileContainer.classList.toggle('flipped');
  });
  
  // Support keyboard accessibility
  profileContainer.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      profileContainer.classList.toggle('flipped');
    }
  });
}

console.log('Prasanth P — Socials loaded — Neo-Brutalist edition');
