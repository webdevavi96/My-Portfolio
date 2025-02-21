document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("status");
  
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent form submission
      
      // Display loading message
      status.innerText = "Sending...";
      
      const serviceID = "service_ue9vxfh";
      const templateID = "template_5nezzpy";
      
      emailjs.sendForm(serviceID, templateID, form)
        .then(() => {
          status.innerText = "Message sent successfully!";
          status.style.color = "green";
          form.reset(); // Reset form after submission
        })
        .catch((error) => {
          status.innerText = "Failed to send the message. Please try again later.";
          status.style.color = "red";
          console.error("EmailJS Error:", error);
        });
    });
  } else {
    console.error("Form with ID 'contactForm' not found.");
  }
});