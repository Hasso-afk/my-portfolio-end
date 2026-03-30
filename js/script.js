
(function() {
  const toggle = document.getElementById('darkModeToggle');
  if (!toggle) {
    console.log('Toggle button not found - button id="darkModeToggle" missing?');
    return;
  }
  
  const html = document.documentElement;
  
  
  const savedTheme = localStorage.getItem('theme');
  const isDark = savedTheme === 'dark';
  
  if (isDark) {
    html.classList.add('dark');
    toggle.innerHTML = '☀️ Light Mode';
    toggle.style.backgroundColor = '#f8f9fa';
    toggle.style.color = '#212529';
  } else {
    toggle.innerHTML = '🌙 Dark Mode';
    toggle.style.backgroundColor = '#36454F';
    toggle.style.color = 'whitesmoke';
  }
  
  // Toggle handler
  toggle.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      toggle.innerHTML = '🌙 Dark Mode';
      toggle.style.backgroundColor = '#36454F';
      toggle.style.color = 'whitesmoke';
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      toggle.innerHTML = '☀️ Light Mode';
      toggle.style.backgroundColor = '#f8f9fa';
      toggle.style.color = '#212529';
    }
    console.log('Theme toggled to:', localStorage.getItem('theme'));
  });
  
  console.log('Dark mode script loaded successfully');
})();

// Form validation (existing)
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    
    // Clear errors
    document.querySelectorAll('.error').forEach(el => el.remove());
    
    let isValid = true;
    
    if (nameInput.value.length < 2) {
      const error = document.createElement('div');
      error.className = 'error';
      error.style.color = 'red';
      error.textContent = 'Name too short!';
      nameInput.parentNode.appendChild(error);
      isValid = false;
    }
    
    const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
      const error = document.createElement('div');
      error.className = 'error';
      error.style.color = 'red';
      error.textContent = 'Invalid email!';
      emailInput.parentNode.appendChild(error);
      isValid = false;
    }
    
    if (isValid) {
      console.log('Form submitted:', { name: nameInput.value, email: emailInput.value });
      alert('Message sent successfully!');
    }
  });
}
