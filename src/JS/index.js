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
/*Second : The Main code*/
changeVisabilty();
changeMode();
filterInput();
document.querySelector("#sign-in").addEventListener("click", () => {
  checkFormFields();
  checkLength();

  addTodb("+201005375709", "12mdoi3nie3idms3i");
});
