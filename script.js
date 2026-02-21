// Initialize EmailJS
emailjs.init("jnJJ6fT332KaZqsPs"); //public key

// ✅ SHOW / HIDE EMAIL FORM BASED ON URL
const params = new URLSearchParams(window.location.search);
const emailSection = document.getElementById("emailSection");

// Only show form when ?send=true
if (params.get("send") === "true") {
  emailSection.style.display = "block";
}

document.getElementById("birthdayLink").value =
  "https://kavyanagamothu.github.io/birthday-website/";
  
document.getElementById("emailForm").addEventListener("submit", function (e) {
  e.preventDefault();

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
