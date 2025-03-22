//change the mode according to the state of slider (Check-box)
export const changeMode = () => {
  const sliderElement = document.querySelector(".js-mode-slider");
  try {
    // Bring mode type from localStorage (true = light mode , false = dark mode)
    sliderElement.checked = JSON.parse(localStorage.getItem("mode"));
  } catch {
    sliderElement.checked = false;
  }
  sliderElement.checked ? toLight() : toDark();

  //when slider change the mode change
  sliderElement.addEventListener("change", () => {
    sliderElement.checked ? toLight() : toDark();
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
