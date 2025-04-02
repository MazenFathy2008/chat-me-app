import { get, ref } from "firebase/database";
import { db } from "./firebase/firebase.js";
import { prviousSining } from "./auth/previous-signing.js";
export const getHtml = async () => {
  let html;
  let refrence;
  const body = document.querySelector("body");
  if (prviousSining) {
    body.classList.remove("sign-in-bage");
    body.classList.add("main-page");
    refrence = ref(db, "templates/main");
    html = (await get(refrence)).val();
  } else {
    body.classList.remove("main-page");
    body.classList.add("sign-in-bage");
    refrence = ref(db, "templates/signIn");
    html = (await get(refrence)).val();
  }
  return html;
};
