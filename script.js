// Scroll effects
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// Fade-in animations
const animated = document.querySelectorAll(".fade-up");
function showOnScroll() {
  const trigger = window.innerHeight * 0.85;
  animated.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) el.classList.add("show");
  });
}
window.addEventListener("scroll", showOnScroll);
showOnScroll();

// Floating particles background
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
let w, h, particles;

function init() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  particles = Array.from({ length: 90 }).map(() => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5
  }));
}
function draw() {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "#00aaff";
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > w) p.dx *= -1;
    if (p.y < 0 || p.y > h) p.dy *= -1;
  });
  requestAnimationFrame(draw);
}
window.addEventListener("resize", init);
init();
draw();
