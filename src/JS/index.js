/* 
########################
####The Main JS file####
########################
*/
/*First: Importing Modules And  libraries*/
import { changeVisabilty } from "./utils/password-visabilty.js";
import { changeMode } from "./utils/change-mode.js";
import { checkFormFields } from "./auth/empty-auth.js";
import { filterInput } from "./utils/filter-input.js";
import { checkLength } from "./auth/length-auth.js";
import "./firebase/firebase.js";
import { addTodb } from "./services/addUser.js";
import { authInfo } from "./auth/email-password-auth.js";
/*Second : The Main code*/
changeVisabilty();
changeMode();
filterInput();
export const signINBtn = document.querySelector("#sign-in");
signINBtn.addEventListener("click", signIN);
export async function signIN() {
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  const passedFormEmpty = checkFormFields();
  const passedFormmLength = checkLength();
  if (passedFormEmpty && passedFormmLength) {
    let passedFromAuth = await authInfo(username, password);
    if (!passedFromAuth) {
      await addTodb(username, password);
    }
  }
}
