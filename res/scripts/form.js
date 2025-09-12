document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("pBmdutdyOQvBVxmln");

  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      const params = {
        name: name,
        email: email,
        message: message,
      };

      const statusElement = document.getElementById("status");
      if (name && email && message) {
        statusElement.innerText = "Sending...";
        statusElement.style.color = "blue";

        emailjs
          .send("service_ue9vxfh", "template_5nezzpy", params)
          .then(function (response) {
            statusElement.innerText = "Message sent successfully!";
            statusElement.style.color = "green";
            document.getElementById("contactForm").reset();
          })
          .catch(function (error) {
            statusElement.innerText = "Failed to send message. Try again!";
            statusElement.style.color = "red";
          });
      } else {
        statusElement.innerText = "Please fill the all required fields...";
        statusElement.style.color = "red";
      }
    });
});
