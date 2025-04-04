import { mainSignIn } from "../../Sign-in/Sign-in.js";
import { addLoader, removeLoader } from "../../utils/loader.js";
import { get, ref } from "firebase/database";
import { db } from "../../firebase/firebase.js";
export async function logOut() {
  const logOutBtn = document.querySelector(".js-log-out");
  logOutBtn.addEventListener("click", async () => {
    addLoader();
    document.querySelector("body").classList.remove("nav-background-blur");
    document.querySelector(".js-nav").classList.remove("nav-appearence");
    const main = document.querySelector("#app");
    const body = document.querySelector("body");
    main.innerHTML = "";
    body.classList.remove("main-page");
    body.classList.add("sign-in-bage");
    const pageRef = ref(db, "templates/signIn");
    const html = (await get(pageRef)).val();
    main.innerHTML = html;
    mainSignIn();
    setTimeout(() => {
      removeLoader();
    }, 500);
  });
}
