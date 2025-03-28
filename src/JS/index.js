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
import { addTodb } from "./services/addUser.js";
import { authInfo } from "./auth/email-password-auth.js";
import { prviousSining } from "./auth/previous-signing.js";
import { getHtml } from "./pages.js";
/*Second : The Main code*/
async function main() {
  changeMode();
  const html = await getHtml();
  document.querySelector("#app").innerHTML = html;
  if (prviousSining) {
    console.log(prviousSining.id);
  } else {
    const signINBtn = document.querySelector("#sign-in");
    changeVisabilty();
    filterInput();
    signINBtn.addEventListener("click", signIN);
    async function signIN() {
      const username = document.querySelector("#username").value;
      const password = document.querySelector("#password").value;
      const passedFormEmpty = checkFormFields();
      const passedFormLength = checkLength();
      if (passedFormEmpty && passedFormLength) {
        let passedFromAuth = await authInfo(username, password);
        if (passedFromAuth === false) {
          await addTodb(username, password);
        } else if (passedFromAuth === "data founded") {
          console.log("Signed in");
        }
      }
    }
  }
}
main();
