export const checkFormFields = () => {
  try {
    const inputFieldsContainer = document.querySelectorAll(".js-input-field");
    inputFieldsContainer.forEach((container) => {
      const inputField = container.querySelector("input");
      const errorMsgSpan = container.querySelector(".js-error-msg");
      if (!inputField.value.trim()) {
        errorMsgSpan.innerText = "This Field is Empty , Please fill this field";
        errorMsgSpan.classList.add("visable");
      } else {
        errorMsgSpan.classList.remove("visable");
      }
    });
  } catch (error) {
    console.error(error);
  }
};
