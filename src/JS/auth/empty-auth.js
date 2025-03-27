//display empty error massege if there is no input
export const checkFormFields = () => {
  // these are the continers of input fields
  const inputFieldsContainer = document.querySelectorAll(".js-input-field");

  let passed = true;

  inputFieldsContainer.forEach((container) => {
    const inputField = container.querySelector("input");

    const errorMsgSpan = container.querySelector(".js-error-msg");

    errorMsgSpan.classList.remove("visable");
    //display error massege if the input was empty
    if (!inputField.value) {
      errorMsgSpan.innerText = "This Field is Empty , Please fill this field";
      errorMsgSpan.classList.add("visable");
      passed = false;
    }
  });
  return passed;
};
