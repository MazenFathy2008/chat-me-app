export const changeVisabilty = () => {
  const lockBtnElement = document.querySelector(".js-password-lock");
  const passwordField = document.querySelector("#password");
  const closedIcon =
    "./src/assets/lock_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg";
  const opendIcon =
    "./src/assets/lock_open_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg";
  lockBtnElement.addEventListener("click", () => {
    if (lockBtnElement.dataset.state === "opened") {
      lockBtnElement.querySelector("img").src = closedIcon;
      passwordField.type = "password";
      lockBtnElement.dataset.state="closed"
    } else {
      lockBtnElement.querySelector("img").src = opendIcon;
      passwordField.type = "text";
      lockBtnElement.dataset.state="opened"

    }
    lockBtnElement.classList.toggle("opend-lock-img");
  });
};
