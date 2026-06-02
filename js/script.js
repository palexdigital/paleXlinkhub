/**
 * paléXlinkhub — link configuration
 * Edit the links array below to update your buttons.
 */
const links = [
  {
    title: "Official Website",
    url: "https://palexdigital.github.io/paleXofficial/",
    external: true,
  },
  {
    title: "WhatsApp Us",
    url: "https://wa.me/27627654746",
    external: true,
  },
  {
    title: "Email Us",
    url: "mailto:palexdigital@gmail.com",
    external: false,
  },
  {
    title: "Projects Developed by paléX",
    url: "https://palexdigital.github.io/paleXarchive/#",
    external: true,
  },

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
    if (link.external) {
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
    }
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
