/**
 * paléXlinkhub — link configuration
 * Edit the links array below to update your buttons.
 */
const links = [
  {
    title: "Instagram",
    url: "https://instagram.com/",
  },
  {
    title: "Facebook",
    url: "https://facebook.com/",
  },
  {
    title: "WhatsApp",
    url: "https://wa.me/",
  },
  {
    title: "Website",
    url: "https://example.com/",
  },
  {
    title: "Book a Call",
    url: "https://calendly.com/",
  },
];

const linksContainer = document.getElementById("links");
const yearEl = document.getElementById("year");

function renderLinks() {
  if (!linksContainer) return;

  const fragment = document.createDocumentFragment();

  links.slice(0, 5).forEach((link) => {
    const anchor = document.createElement("a");
    anchor.className = "link-btn";
    anchor.href = link.url;
    anchor.textContent = link.title;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    fragment.appendChild(anchor);
  });

  linksContainer.appendChild(fragment);
}

function setYear() {
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

renderLinks();
setYear();
