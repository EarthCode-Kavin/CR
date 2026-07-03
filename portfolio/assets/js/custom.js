/* ============================================================
   custom.js — Dr. C. Ramachandran portfolio helpers
   ============================================================ */

/* ---------- Certificate image zoom (w3-modal) ---------- */
function onClick(el) {
  var modal = document.getElementById("imgModal");
  var modalImg = document.getElementById("modalImg");
  if (modal && modalImg) {
    modal.style.display = "block";
    modalImg.src = el.src;
  }
}
// Close modal on click
document.addEventListener("click", function(e) {
  var modal = document.getElementById("imgModal");
  if (modal && e.target === modal) {
    modal.style.display = "none";
  }
});

/* ---------- Particles.js init (if available) ---------- */
document.addEventListener("DOMContentLoaded", function () {
  if (typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
      particles: {
        number: { value: 60, density: { enable: true, value_area: 900 } },
        color: { value: "#1af07d" },
        shape: { type: "circle" },
        opacity: { value: 0.3, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 140, color: "#1af07d", opacity: 0.15, width: 1 },
        move: { enable: true, speed: 1.5, direction: "none", random: false, straight: false, out_mode: "out" }
      },
      interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: false }, resize: true },
        modes: { grab: { distance: 180, line_linked: { opacity: 0.35 } } }
      },
      retina_detect: true
    });
  }
});

/* ---------- Re-init Isotope after publications are rendered ---------- */
window.addEventListener("load", function () {
  setTimeout(function () {
    var container = document.querySelector(".portfolio-container");
    if (container && typeof Isotope !== "undefined") {
      var iso = new Isotope(container, {
        itemSelector: ".portfolio-item",
        layoutMode: "fitRows"
      });

      var filters = document.querySelectorAll("#portfolio-flters li");
      filters.forEach(function (f) {
        f.addEventListener("click", function (e) {
          e.preventDefault();
          filters.forEach(function (el) { el.classList.remove("filter-active"); });
          f.classList.add("filter-active");
          iso.arrange({ filter: f.getAttribute("data-filter") });
        });
      });
    }
  }, 500); // wait for publications.js to finish rendering
});
