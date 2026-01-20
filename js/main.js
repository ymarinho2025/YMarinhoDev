// Smooth scroll (somente para links âncora)
document.addEventListener("click", function (e) {
  const a = e.target.closest("a");
  if (!a) return;

  const href = a.getAttribute("href") || "";
  if (!href.startsWith("#")) return;

  const id = href.slice(1);
  const element = document.getElementById(id);
  if (!element) return;

  e.preventDefault();
  element.scrollIntoView({ behavior: "smooth" });
});
