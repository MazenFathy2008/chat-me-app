export const filterInput = () => {
  const telephoneField = document.querySelector("#username-phone");
  telephoneField.addEventListener("input", () => {
    telephoneField.value = telephoneField.value.trim().replace(/[^0-9]/g, "");
  });
  const passwordField = document.querySelector("#password");
  passwordField.addEventListener("input", () => {
    passwordField.value = passwordField.value.replace(/[^a-zA-Z0-9#@-_!]/g, "");
  });
};
