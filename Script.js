/* =========================
   COUNTDOWN (Index Page)
   ========================= */

(function () {
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  // Stop if countdown elements don’t exist
  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  // ⚠️ Adjust timezone if needed (Lanzarote = UTC / GMT, no DST)
  const target = new Date('2027-03-14T15:00:00Z').getTime();

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

document.getElementById("rsvpBtn").addEventListener("click", function () {
  document.getElementById("rsvpForm").style.display = "block";
});
