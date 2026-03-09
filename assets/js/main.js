(function () {
  var UNLOCK_KEY = "vibe_lab_unlocked";
  var body = document.body;
  if (!body) return;

  var pageType = body.getAttribute("data-page");

  function isUnlocked() {
    return localStorage.getItem(UNLOCK_KEY) === "true";
  }

  function setUnlocked() {
    localStorage.setItem(UNLOCK_KEY, "true");
  }

  function clearUnlocked() {
    localStorage.removeItem(UNLOCK_KEY);
  }

  if (pageType === "gate") {
    if (isUnlocked()) {
      window.location.href = "home.html";
      return;
    }

    var gateForm = document.getElementById("gate-form");
    var gateInput = document.getElementById("gate-input");
    var gateError = document.getElementById("gate-error");

    if (gateForm && gateInput) {
      gateForm.addEventListener("submit", function (event) {
        event.preventDefault();
        var answer = gateInput.value.trim().toLowerCase();

        if (answer === "in") {
          setUnlocked();
          window.location.href = "home.html";
        } else {
          if (gateError) gateError.textContent = "Nope. Try again.";
          gateInput.select();
        }
      });
    }
  }

  if (pageType === "protected" && !isUnlocked()) {
    window.location.href = "index.html";
    return;
  }

  var lockLinks = document.querySelectorAll(".js-lock");
  lockLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      clearUnlocked();
      window.location.href = "index.html";
    });
  });

  // Scroll reveal for cards and sections.
  var revealItems = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add("reveal-in");
    });
  }

  // Spotlight hover effect for playground cards.
  var spotlights = document.querySelectorAll(".spotlight");
  spotlights.forEach(function (card) {
    card.addEventListener("mousemove", function (event) {
      var bounds = card.getBoundingClientRect();
      var x = ((event.clientX - bounds.left) / bounds.width) * 100;
      var y = ((event.clientY - bounds.top) / bounds.height) * 100;
      card.style.setProperty("--spot-x", x + "%");
      card.style.setProperty("--spot-y", y + "%");
    });
  });

  // Rotating zen quotes on the homepage.
  var quoteEl = document.getElementById("zen-quote");
  if (quoteEl) {
    var quotes = [
      "Small steps, steady flow, beautiful momentum.",
      "Code like water: adapt, carve, keep moving.",
      "Ship the spark today, polish the glow tomorrow.",
      "Two friends, one lab, infinite weird ideas."
    ];
    var idx = 0;
    setInterval(function () {
      idx = (idx + 1) % quotes.length;
      quoteEl.style.opacity = "0";
      setTimeout(function () {
        quoteEl.textContent = quotes[idx];
        quoteEl.style.opacity = "1";
      }, 220);
    }, 5000);
  }

  // Tabbed content for quick vibe context.
  var tabsRoot = document.querySelector("[data-tabs]");
  if (tabsRoot) {
    var tabButtons = tabsRoot.querySelectorAll(".tab-button");
    var panels = tabsRoot.querySelectorAll(".tab-panel");

    tabButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        var key = button.getAttribute("data-tab");

        tabButtons.forEach(function (btn) {
          btn.classList.remove("active");
        });
        panels.forEach(function (panel) {
          panel.classList.remove("active");
        });

        button.classList.add("active");
        var panel = tabsRoot.querySelector('[data-panel="' + key + '"]');
        if (panel) panel.classList.add("active");
      });
    });
  }
})();
