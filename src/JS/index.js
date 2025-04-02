/* 
########################
####The Main JS file####
########################
*/
/*First: Importing Modules And  libraries*/
import { mainApp } from "./main/main.js";
import { signIN } from "./Sign-in/Sign-in.js";
import { getHtml } from "./pages.js";
import { changeMode } from "./utils/change-mode.js";
import { prviousSining } from "./auth/previous-signing.js";
import { changeVisabilty } from "./utils/password-visabilty.js";
import { filterInput } from "./utils/filter-input.js";
import { removeLoader } from "./utils/loader.js";
import { userId } from "../localStorage/User-id.js";
/*Second : The Main code*/
async function main() {
  changeMode();
  const html = await getHtml();
  document.querySelector("#app").innerHTML = html;
  if (prviousSining && userId && prviousSining.id === userId) {
    mainApp();
  } else {
    localStorage.removeItem("signed-in");
    localStorage.removeItem("userId");
    const signINBtn = document.querySelector("#sign-in");
    changeVisabilty();
    filterInput();
    signINBtn.addEventListener("click", signIN);
  }
  removeLoader();
}
main();
