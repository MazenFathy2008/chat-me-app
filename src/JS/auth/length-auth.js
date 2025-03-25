export const checkLength = () => {
  try {
    const inputFieldsContainer = document.querySelectorAll(".js-input-field");
    let passed = true;
    inputFieldsContainer.forEach((container) => {
      const inputField = container.querySelector("input");
      const errorMsgSpan = container.querySelector(".js-error-msg");
      if (
        inputField.dataset.for === "username" &&
        inputField.value.length < 6 &&
        inputField.value.length !== 0
      ) {
        errorMsgSpan.innerText = `You Entered ${inputField.value.length} You must Enter at least 6 Charachters`;
        errorMsgSpan.classList.add("visable");
        passed = false;
      } else if (
        inputField.dataset.for === "password" &&
        inputField.value.length < 8 &&
        inputField.value.length !== 0
      ) {
        errorMsgSpan.innerText = `You Entered ${inputField.value.length} You must Enter at least 8 Numbers`;
        errorMsgSpan.classList.add("visable");
        passed = false;
      }
    });
    return passed;
  } catch (error) {
    console.error(error);
  }
};
