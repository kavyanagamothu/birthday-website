document.addEventListener("DOMContentLoaded", () => {

  emailjs.init("jnJJ6fT332KaZqsPs");

  const intro = document.getElementById("intro");
  const startBtn = document.getElementById("startBtn");
  const bgMusic = document.getElementById("bgMusic");

  const hero = document.querySelector(".hero");
  const letter = document.querySelector(".letter");
  const timeline = document.querySelector(".timeline");

  const celebrateBtn = document.getElementById("celebrateBtn");
  const cakeOverlay = document.getElementById("cakeOverlay");

  const voice = document.getElementById("voiceNote");
  const memories = document.getElementById("memories");
  const future = document.querySelector(".future");

  startBtn.addEventListener("click", () => {
    bgMusic.volume = 0.4;
    bgMusic.play().catch(()=>{});
    intro.style.display = "none";
    hero.classList.remove("hidden");
    setTimeout(()=>letter.classList.remove("hidden"),1000);
    setTimeout(()=>timeline.classList.remove("hidden"),2000);
  });

  celebrateBtn.addEventListener("click", () => {
    cakeOverlay.classList.add("show");
  });

  cakeOverlay.addEventListener("click", (e) => {
    if (e.target === cakeOverlay) {
      cakeOverlay.classList.remove("show");
      voice.classList.remove("hidden");
      memories.classList.remove("hidden");
      future.classList.remove("hidden");
    }
  });

  // Fade-in on scroll
  const fades = document.querySelectorAll(".fade");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  fades.forEach(f => observer.observe(f));

  // Typewriter effect
  const letterText = `
  I’ve been trying to find the right words for weeks.

  And then I realized — there are no perfect words.
  There’s only truth.

  The truth is, you are the first thing I think about in the morning
  and the last thought I carry into sleep.
  The truth is, you make ordinary moments feel like something worth remembering.

  You don’t try to fix everything.
  You just stay.
  And staying — that is the bravest kind of love.

  On your birthday, I want you to know this:
  You are not just loved.
  You are **chosen**. Every single day.
  By me.
  Freely. Willingly. Completely.

  If every lifetime had a choice,
  I would find you in all of them.`;

  let i = 0;
  function typeLetter() {
    if (i < letterText.length) {
      document.getElementById("typeLetter").innerHTML += letterText.charAt(i);
      i++;
      setTimeout(typeLetter, 45);
    }
  }
  observer.observe(document.querySelector(".letter"));
  typeLetter();

  /* HEARTS */

setInterval(()=>{
const heart=document.createElement("div");
heart.className="heart";
heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

document.body.appendChild(heart);

setTimeout(()=>heart.remove(),10000);

},600);


/* FLOWERS */

setInterval(()=>{

const flower=document.createElement("div");

flower.className="flower";
flower.innerHTML="🌸";

flower.style.left=Math.random()*100+"vw";
flower.style.animationDuration=5+Math.random()*5+"s";

document.body.appendChild(flower);

setTimeout(()=>flower.remove(),8000);

},1200);


   // Typewriter effect
  // const wishText = `
  // Close your eyes…  
  // take a deep breath…  
  // and know that someone, somewhere,  
  // is wishing for **your happiness more than anything else** ❤️
  // `;

  // let w = 0;
  // function wish() {
  //   if (w < wishText.length) {
  //     document.getElementById("wish").innerHTML += wishText.charAt(i);
  //     i++;
  //     setTimeout(wish, 45);
  //   }
  // }
  // observer.observe(document.querySelector(".cake-overlay"));
  // wish();

  document.getElementById("emailForm").addEventListener("submit", function(e){
    e.preventDefault();
    emailjs.sendForm("service_s93ftzp","template_1qggvjs",this)
      .then(()=>{
        document.getElementById("status").innerText="💖 Message sent!";
        this.reset();
      });
  });

});