export const filterInput = () => {
  const telephoneField = document.querySelector("#username");
  telephoneField.addEventListener("input", () => {
    telephoneField.value = telephoneField.value.replace(/[^a-zA-Z0-9-#@_!]/g, "");
  });
  const passwordField = document.querySelector("#password");
  passwordField.addEventListener("input", () => {
    passwordField.value = passwordField.value.replace(/[^a-zA-Z0-9#@_!]/g, "");
  });
};
