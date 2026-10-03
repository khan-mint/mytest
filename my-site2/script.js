// 1. Active link on scroll (like Flutter BottomNav)
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    const top = sec.offsetTop - 120;
    if (scrollY >= top) current = sec.getAttribute("id");
  });
  navLinks.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === `#${current}`) a.classList.add("active");
  });
});

// 2. Fade-in animation on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.15 });

document.querySelectorAll(".card,.skill,.about-container").forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});

// 3. Contact form logic
document.querySelector(".contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message sent bro! I'll contact you soon.");
  e.target.reset();
});

// 4. Typing effect for hero (like Flutter animation)
const titles = ["Frontend Developer", "Flutter Learner", "UI Designer"];
let i = 0, j = 0, isDeleting = false;
const typingEl = document.querySelector(".hero-text h2");

function type() {
  let current = titles[i];
  if (isDeleting) {
    typingEl.textContent = current.substring(0, j--);
  } else {
    typingEl.textContent = current.substring(0, j++);
  }
  if (!isDeleting && j === current.length + 1) {
    isDeleting = true;
    setTimeout(type, 1000);
    return;
  }
  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % titles.length;
  }
  setTimeout(type, isDeleting? 50 : 100);
}
type();
