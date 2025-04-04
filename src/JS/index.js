/* 
########################
####The Main JS file####
########################
*/
/*First: Importing Modules And  libraries*/
import { mainApp } from "./main/main.js";
import { getHtml } from "./pages.js";
import { changeMode } from "./utils/change-mode.js";
import { prviousSining } from "./auth/previous-signing.js";
import {mainSignIn} from "./Sign-in/Sign-in.js"
import { removeLoader } from "./utils/loader.js";
import { userId } from "../localStorage/User-id.js";
/*Second : The Main code*/
async function main() {
  changeMode();
  const html = await getHtml();
  document.querySelector("#app").innerHTML = html;
  if (prviousSining && userId && prviousSining.id === JSON.parse(userId)) {
    mainApp();
  } else {
    mainSignIn()
  }
  setTimeout(() => {
    removeLoader();
  }, 500);
}
main();
