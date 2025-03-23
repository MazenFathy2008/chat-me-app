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
// +201005375709
export async function signIN() {
  const phoneNumber = document.querySelector("#username-phone").value;
  const password = document.querySelector("#password").value;
  if (!checkFormFields()) {
    console.log("empty fields");
  } else if (!checkLength()) {
    console.log("less num of chars than excipectid");
  } else if (await authInfo(phoneNumber, password)) {
    console.log("data founded");
  } else {
    await addTodb(phoneNumber, password);
  }
}
