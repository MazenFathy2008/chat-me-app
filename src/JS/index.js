/* 
########################
####The Main JS file####
########################
*/
/*First: Importing Modules And  libraries*/
import { changeVisabilty } from "./utils/password-visabilty.js";
import { changeMode } from "./utils/change-mode.js";
import { checkFormFields } from "./auth/empty-auth.js";
/*Second : The Main code*/
changeVisabilty();
changeMode();
document.querySelector("button").addEventListener("click",()=>{
  checkFormFields();
})

