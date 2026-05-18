/* =========================
   COUNTDOWN (INDEX PAGE)
   ========================= */

(function () {
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  // Safe exit if not on index page
  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  const target = new Date('2027-03-10T15:00:00').getTime();

  function updateCountdown() {
    const now = Date.now();
    let diff = target - now;

    if (diff <= 0) {
      daysEl.textContent = '0';
      hoursEl.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';
      return;
    }

    const totalSeconds = Math.floor(diff / 1000);

    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    daysEl.textContent = days;
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
})();


/* =========================
   RSVP BUTTON (SAFE)
   ========================= */

(function () {
  const rsvpBtn = document.getElementById("rsvpBtn");
  const rsvpForm = document.getElementById("rsvpForm");

  if (!rsvpBtn || !rsvpForm) return;

  rsvpBtn.addEventListener("click", function () {
    rsvpForm.style.display = "block";
    rsvpForm.scrollIntoView({ behavior: "smooth" });
  });
})();


/* =========================
   MUSIC TOGGLE (LUXURY UX)
   ========================= */

(function () {
  const btn = document.getElementById("musicBtn");
  const music = document.getElementById("bgMusic");

  if (!btn || !music) return;

  // start muted (important for UX + autoplay rules)
  music.volume = 0.6;

  btn.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      btn.textContent = "⏸ Pause Music";
      btn.classList.add("playing");
    } else {
      music.pause();
      btn.textContent = "🎵 Play Wedding Vibes";
      btn.classList.remove("playing");
    }
  });
})();


/* =========================
   SMOOTH SCROLL (NAV POLISH)
   ========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});
const btn = document.getElementById("backToTop");

window.onscroll = () => {
  btn.style.display = window.scrollY > 300 ? "block" : "none";
};

btn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
