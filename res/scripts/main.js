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



const popUpButtons = document.querySelectorAll('.source_code');

popUpButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    
    let existingCodeBlock = button.nextElementSibling;
    if (existingCodeBlock && existingCodeBlock.classList.contains('popOverTarget')) {
      existingCodeBlock.remove();
      return;
    }
    
    let div = document.createElement('div');
    div.classList.add('popOverTarget');
    
    let codeBlock = document.createElement('code');
    
    let projectTitle = button.parentElement.querySelector('h2').innerText;
    let sourceCodeMessage = "";
    
    switch (projectTitle) {
      case "Travel Vista":
        sourceCodeMessage = "Source code for Travel Vista: \nGitHub: git clone https://github.com/webdevavi96/myproject.git";
        break;
      case "Portfolio Website":
        sourceCodeMessage = "Source code for Portfolio Website: \nGitHub: git clone https://github.com/webdevavi96/My-Portfolio.git";
        break;
      case "Netflix Clone":
        sourceCodeMessage = "Source code for Netflix Clone is currently unavailable.";
        break;
      case "Alumni Meet Web App":
        sourceCodeMessage = "Source code for Alumni Meet Web App: \nAvailable soon...";
        break;
      default:
        sourceCodeMessage = "Source code information not available.";
    }
    
    codeBlock.textContent = sourceCodeMessage;
    div.appendChild(codeBlock);
    button.after(div);
  });
});