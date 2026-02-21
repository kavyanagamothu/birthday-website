// Initialize EmailJS
emailjs.init("jnJJ6fT332KaZqsPs"); //public key

document.getElementById("emailForm").addEventListener("submit", function (e) {
  e.preventDefault();

  document.getElementById("status").innerText = "Sending... 💌";

  emailjs.sendForm(
    "service_s93ftzp", //service ID
    "template_1qggvjs", //Iemplate ID
    this
  ).then(() => {
    document.getElementById("status").innerText = "💖 Message sent successfully!";
    this.reset();
  }, () => {
    document.getElementById("status").innerText = "❌ Failed to send message";
  });
});
