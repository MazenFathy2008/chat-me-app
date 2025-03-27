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
/* Sign in page code */
changeMode();
const signedIn = true;
async function signIN() {
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  const passedFormEmpty = checkFormFields();
  const passedFormLength = checkLength();
  if (passedFormEmpty && passedFormLength) {
    let passedFromAuth = await authInfo(username, password);
    if (!passedFromAuth) {
      await addTodb(username, password);
    }
  }
}
if (signedIn) {
  const signINBtn = document.querySelector("#sign-in");
  changeVisabilty();
  filterInput();
  signINBtn.addEventListener("click", signIN);
}
