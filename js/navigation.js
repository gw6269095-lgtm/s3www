/**
 * Navigation: mobile menu toggle and active link
 */

const SELECTORS = {
  menuToggle: ".menu-toggle",
  navList: ".nav-list",
};

/**
 * Toggle mobile menu open/closed and aria state
 */
function handleMenuToggle() {
  const toggle = document.querySelector(SELECTORS.menuToggle);
  const nav = document.querySelector(SELECTORS.navList);
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Toggle menu");
  });
}

/**
 * Close mobile menu when clicking a nav link (for in-page navigation)
 */
function closeMenuOnNavClick() {
  const nav = document.querySelector(SELECTORS.navList);
  if (!nav) return;
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      const toggle = document.querySelector(SELECTORS.menuToggle);
      if (toggle) {
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Toggle menu");
      }
    });
  });
}

/**
 * Set aria-current="page" on the link that matches the current path
 */
function setActiveLink() {
  const path = window.location.pathname || "";
  const fileName = path.split("/").pop() || "index.html";
  const current = fileName === "" ? "index.html" : fileName;

  document.querySelectorAll(".nav-list a[href]").forEach((a) => {
    const href = a.getAttribute("href") || "";
    const linkFile = href.split("/").pop() || "index.html";
    if (linkFile === current) {
      a.setAttribute("aria-current", "page");
    } else {
      a.removeAttribute("aria-current");
    }
  });
}

/**
 * Initialize all navigation behavior
 */
export function initNavigation() {
  handleMenuToggle();
  closeMenuOnNavClick();
  setActiveLink();
}
