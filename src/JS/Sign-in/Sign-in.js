import { addLoader, removeLoader } from "../utils/loader.js";
import { updateToMainPage } from "../services/get-main-html.js";
import { authInfo } from "../auth/email-password-auth.js";
import { addTodb } from "../services/addUser.js";
import { checkLength } from "../auth/length-auth.js";
import { checkFormFields } from "../auth/empty-auth.js";
import { changeVisabilty } from "../utils/password-visabilty.js";
import { filterInput } from "../utils/filter-input.js";
import { changeHistory } from "../services/history-push.js";
async function signIN() {
  addLoader();
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  const passedFormEmpty = checkFormFields();
  const passedFormLength = checkLength();
  if (passedFormEmpty && passedFormLength) {
    let passedFromAuth = await authInfo(username, password);
    if (passedFromAuth === false) {
      await addTodb(username, password);
    } else if (passedFromAuth === "data founded") {
      updateToMainPage();
      console.log("Signed in");
    }
  }
  removeLoader();
}
export function mainSignIn() {
  changeHistory("SIGN-IN")
  localStorage.removeItem("signed-in");
  localStorage.removeItem("userId");
  const signINBtn = document.querySelector("#sign-in");
  changeVisabilty();
  filterInput();
  signINBtn.addEventListener("click", signIN);
}
