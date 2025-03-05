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


document.querySelectorAll('.source_code').forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    
    let existingCodeBlock = button.nextElementSibling;
    if (existingCodeBlock && existingCodeBlock.classList.contains('popOverTarget')) {
      existingCodeBlock.remove();
      return;
    }
    
    let div = document.createElement('div');
    div.classList.add('popOverTarget');
    div.setAttribute("tabindex", "0");
    div.setAttribute("aria-live", "polite");
    
    let pre = document.createElement('pre');
    let codeBlock = document.createElement('code');
    
    // Get project title correctly
    let projectTitle = button.closest('.project-item')?.querySelector('h2')?.innerText.trim();
    let sourceCodeMessage = getSourceCodeMessage(projectTitle);
    
    codeBlock.textContent = sourceCodeMessage;
    pre.appendChild(codeBlock);
    div.appendChild(pre);
    
    button.after(div);
    
    // Add focus for accessibility
    div.focus();
  });
});

function getSourceCodeMessage(projectTitle) {
  switch (projectTitle) {
    case "Travel Vista":
      return "Source code for Travel Vista:\nGitHub: git clone https://github.com/webdevavi96/myproject.git";
    case "Portfolio Website":
      return "Source code for Portfolio Website:\nGitHub: git clone https://github.com/webdevavi96/My-Portfolio.git";
    case "Netflix Clone":
      return "Source code for Netflix Clone is currently unavailable.";
    case "Alumni Meet Web App":
      return "Source code for Alumni Meet Web App:\nAvailable soon...";
    default:
      return "Source code information not available.";
  }
}