import { NewUser } from "./new-user-class.js";
import { db } from "../firebase/firebase.js";
import { ref, get, set } from "firebase/database";
export async function addTodb(userName, password) {
  const user = new NewUser(userName, password);
  const refrenceToNewuser = ref(db, `Users/${user.id}`);
  const refrances = ref(db, `refrences/${user.userName}`);
  const isExist = (await get(refrances)).exists();
  if (!isExist) {
    const popupContainer = document.querySelector(".popup-container");
    popupContainer.querySelector(".username").innerText = userName;
    popupContainer.querySelector(".password").innerText = password;
    document.querySelector(".confirm").addEventListener("click", () => {
      set(refrances, {
        id: user.id,
        password: user.password,
      });
      set(refrenceToNewuser, user);
      popupContainer.classList.remove("visable");
    });
    document.querySelector(".Not-Now").addEventListener("click", () => {
      popupContainer.classList.remove("visable");
    });
    popupContainer.classList.add("visable");
  } else {
    return isExist;
  }
}
