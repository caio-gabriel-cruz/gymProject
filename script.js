const html = document.querySelector("html");
const splash = document.querySelector(".splash");

if (window.innerWidth <= 768) {
  html.classList.remove("desktop");
  html.classList.add("mobile");
  setTimeout(() => {
    splash.style.opacity = 0;
  }, 1000);
  splash.addEventListener("transitionend", () => {
    splash.style.display = "none";
  });
} else if (html.classList.contains("desktop")) {
  splash.style.display = "none";
}
