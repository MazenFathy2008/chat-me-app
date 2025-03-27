// prevent the username or password less than required
export const checkLength = () => {
  const inputFieldsContainer = document.querySelectorAll(".js-input-field");
  let passed = true;
  inputFieldsContainer.forEach((container) => {
    const inputField = container.querySelector("input");
    const errorMsgSpan = container.querySelector(".js-error-msg");
    if (
      inputField.dataset.for === "username" && /*check the is it the username input */
      inputField.value.length < 6 &&
      inputField.value.length !== 0 /*prevent any change if the field is empty*/
    ) {
      errorMsgSpan.innerText = `You Entered ${inputField.value.length} You must Enter at least 6 Charachters`;
      errorMsgSpan.classList.add("visable");
      passed = false;
    } else if (
      inputField.dataset.for === "password" && /*check the is it the password input */
      inputField.value.length < 8 &&
      inputField.value.length !== 0 /*prevent any change if the field is empty*/
    ) {
      errorMsgSpan.innerText = `You Entered ${inputField.value.length} You must Enter at least 8 Numbers`;
      errorMsgSpan.classList.add("visable");
      passed = false;
    }
  });
  return passed;
};
