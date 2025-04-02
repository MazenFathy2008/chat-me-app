import { NewUser } from "./new-user-class.js";
import { db } from "../firebase/firebase.js";
import { ref, set } from "firebase/database";
import { updateToMainPage } from "./get-main-html.js";
import { saveUserId } from "../../localStorage/User-id.js";
// add users to database
export async function addTodb(userName, password) {
  const user = new NewUser(userName, password);

  const refrenceToNewuser = ref(db, `Users/${user.id}`);

  const refrances = ref(db, `refrences/${user.userName}`);

  const popupContainer = document.querySelector(".popup-container");

  const popup = document.querySelector(".popup");
  popupContainer.querySelector(".username").innerText = userName;
  popupContainer.querySelector(".password").innerText = password;

  document.querySelector(".confirm").addEventListener("click", async () => {
    await set(refrances, {
      id: user.id,
      password: user.password,
    });
    saveUserId(user.id);
    await set(refrenceToNewuser, user);

    popupContainer.classList.remove("popup-visable");
    popup.classList.remove("popup-animation");

    localStorage.setItem(
      "signed-in",
      JSON.stringify({
        id: user.id,
        password: user.password,
      })
    );
    updateToMainPage();
  });

  document.querySelector(".Not-Now").addEventListener("click", () => {
    popupContainer.classList.remove("popup-visable");
    popup.classList.remove("popup-animation");
  });

  popupContainer.classList.add("popup-visable");
  popup.classList.add("popup-animation");
}
