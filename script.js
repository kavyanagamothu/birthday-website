// Initialize EmailJS
emailjs.init("jnJJ6fT332KaZqsPs");

// URL PARAM LOGIC
const params = new URLSearchParams(window.location.search);
const emailSection = document.getElementById("emailSection");

if (params.get("send") === "true") {
  emailSection.style.display = "none";
}

// Birthday link
document.getElementById("birthdayLink").value =
  "https://kavyanagamothu.github.io/birthday-website/?send=true";

// CAKE + CONFETTI
const cake = document.getElementById("cake");
document.getElementById("celebrateBtn").addEventListener("click", () => {
  cake.classList.add("show");
  launchConfetti();
});

// EMAIL SUBMIT
document.getElementById("emailForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_s93ftzp",
    "template_1qggvjs",
    this
  ).then(() => {
    document.getElementById("status").innerText = "💖 Message sent successfully!";
    this.reset();
    launchConfetti();
  }, () => {
    document.getElementById("status").innerText = "❌ Failed to send message";
  });
});

// CONFETTI FUNCTION
function launchConfetti() {
  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement("span");
    confetti.innerHTML = "🎉";
    confetti.style.position = "fixed";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-50px";
    confetti.style.fontSize = "2rem";
    confetti.style.animation = "fall 3s linear";
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 3000);
  }
}

// CONFETTI ANIMATION
const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
  to {
    transform: translateY(110vh) rotate(360deg);
    opacity: 0;
  }
}`;
document.head.appendChild(style);