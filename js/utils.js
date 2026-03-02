/**
 * Shared utilities
 */

/**
 * Set the current year in elements with id="year"
 */
export function setFooterYear() {
  const els = document.querySelectorAll("#year");
  const year = new Date().getFullYear();
  els.forEach((el) => {
    el.textContent = year;
  });
}

/**
 * Show a status message and optionally hide it after a delay
 * @param {HTMLElement} element
 * @param {string} message
 * @param {boolean} isError
 * @param {number} hideAfterMs
 */
export function showStatus(element, message, isError = false, hideAfterMs = 0) {
  if (!element) return;
  element.textContent = message;
  element.style.display = "block";
  element.style.color = isError ? "var(--color-error)" : "var(--color-success)";
  if (hideAfterMs > 0) {
    setTimeout(() => {
      element.style.display = "none";
    }, hideAfterMs);
  }
}
