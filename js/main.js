/**
 * Entry point: init navigation, footer year, contact form
 */

import { initNavigation } from "./navigation.js";
import { setFooterYear, showStatus } from "./utils.js";

// Run on DOM ready
function init() {
  initNavigation();
  setFooterYear();
  initContactForm();
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  const statusEl = document.getElementById("form-status");
  if (!form || !statusEl) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.querySelector('[name="name"]')?.value?.trim();
    const email = form.querySelector('[name="email"]')?.value?.trim();
    const message = form.querySelector('[name="message"]')?.value?.trim();

    if (!name || !email || !message) {
      showStatus(statusEl, "Please fill in all fields.", true);
      return;
    }

    // Demo: no backend — show success. Replace with fetch() to your API later.
    showStatus(statusEl, "Thanks! We'll get back to you soon.", false, 5000);
    form.reset();
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
