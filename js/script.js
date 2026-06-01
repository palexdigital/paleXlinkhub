/**
 * paléXlinkhub — optional link overrides
 * Edit the links array below to replace the buttons in index.html.
 * Leave empty [] to keep the HTML links as-is.
 */
const links = [];

const linksContainer = document.getElementById("links");
const yearEl = document.getElementById("year");

function renderLinks() {
  if (!linksContainer || links.length === 0) return;

  linksContainer.innerHTML = "";

  links.slice(0, 5).forEach((link) => {
    const anchor = document.createElement("a");
    anchor.className = "link-btn";
    anchor.href = link.url;
    anchor.textContent = link.title;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    linksContainer.appendChild(anchor);
  });
}

function setYear() {
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

renderLinks();
setYear();
