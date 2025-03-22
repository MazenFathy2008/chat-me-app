export const changeMode = () => {
  const sliderElement = document.querySelector(".js-mode-slider");
  try {
    sliderElement.checked = JSON.parse(localStorage.getItem("mode"));
  } catch {
    sliderElement.checked = false;
  }
  if (sliderElement.checked) {
    toLight();
  } else {
    toDark();
  }
  sliderElement.addEventListener("change", () => {
    if (sliderElement.checked) {
      toLight();
    } else {
      toDark();
    }
  });
};
const toLight = () => {
  document.querySelector("body").classList.add("light-mode");
  localStorage.setItem("mode", "true");
};
const toDark = () => {
  document.querySelector("body").classList.remove("light-mode");
  localStorage.setItem("mode", "false");
};
