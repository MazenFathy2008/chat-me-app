export function toggleNav() {
  document.querySelector(".js-toggle-nav").addEventListener("click", () => {
    document.querySelector("nav").style.animationDuration = "0.5s"
    document.querySelector("body").classList.toggle("nav-background-blur");
    document.querySelector(".js-nav").classList.toggle("nav-appearence");
  });
}
