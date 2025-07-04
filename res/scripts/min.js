document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.textShadow = '0 0 8px #00fff7, 0 0 16px #fff200';
    });
    link.addEventListener('mouseleave', () => {
      link.style.textShadow = '';
    });
  });

  
  // Smooth scroll for nav links
  document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Animated header text
  const header = document.querySelector('.portfolio-header h1');
  if (header) {
    header.innerHTML = header.textContent.split('').map((char, i) => `<span style="animation-delay:${i * 0.04}s">${char}</span>`).join('');
    header.classList.add('futuristic-animate');
  }

  const particleContainer = document.createElement('div');
  particleContainer.className = 'particle-bg';
  document.body.appendChild(particleContainer);
  for (let i = 0; i < 40; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = Math.random() * 100 + 'vh';
    particle.style.animationDuration = (4 + Math.random() * 6) + 's';
    particleContainer.appendChild(particle);
  }

});