window.onload = () => {
  const loaderContent = document.querySelector('.loader');
  const contentBody = document.querySelector('.content-body');
  
  setTimeout(() => {
    if (loaderContent && contentBody) {
      loaderContent.style.opacity = '0'; // Fade out effect
      loaderContent.style.transition = 'opacity 0.5s ease';
      
      setTimeout(() => {
        loaderContent.style.display = 'none'; // Completely hide loader
        contentBody.style.display = 'block'; // Show full content
      }, 500); // Wait for the fade-out effect to complete
    }
  }, 1000); // 1 second delay before hiding the loader
};