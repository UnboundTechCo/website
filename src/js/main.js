// Clickjacking Protection - Frame-busting code
(function() {
  if (window.top !== window.self) {
    // The page is in an iframe
    try {
      // Try to break out of the iframe
      window.top.location = window.self.location;
    } catch (e) {
      // If we can't break out (cross-origin), hide the content
      document.body.style.display = 'none';
      // Optionally show a warning message
      alert('For security reasons, this page cannot be displayed in a frame.');
    }
  }
})();

// Theme toggling functionality
function toggleTheme() {
  const body = document.body;
  const icon = document.querySelector('.theme-toggle i');
  const isDarkTheme = body.getAttribute('data-theme') === 'dark';
  
  // Toggle theme
  if (isDarkTheme) {
    body.removeAttribute('data-theme');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
    localStorage.setItem('theme', 'light');
  } else {
    body.setAttribute('data-theme', 'dark');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
    localStorage.setItem('theme', 'dark');
  }
}

// Mobile menu functionality
function toggleMenu() {
  const mobileNav = document.querySelector('.mobile-nav');
  const body = document.body;
  
  mobileNav.classList.toggle('active');
  
  // Prevent scrolling when menu is open
  if (mobileNav.classList.contains('active')) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = '';
  }
}

// Initialize theme from localStorage
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  const body = document.body;
  const icon = document.querySelector('.theme-toggle i');
  
  if (savedTheme === 'dark') {
    body.setAttribute('data-theme', 'dark');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    body.removeAttribute('data-theme');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  const mobileNav = document.querySelector('.mobile-nav');
  const menuToggle = document.querySelector('.menu-toggle');
  
  if (mobileNav.classList.contains('active') && 
      !mobileNav.contains(e.target) && 
      !menuToggle.contains(e.target)) {
    toggleMenu();
  }
});

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', initTheme);
