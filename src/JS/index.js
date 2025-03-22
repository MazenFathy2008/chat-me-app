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
/*Second : The Main code*/
changeVisabilty();
changeMode();
filterInput();
document.querySelector("button").addEventListener("click", () => {
  checkFormFields();
});
